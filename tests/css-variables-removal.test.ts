import { insertCSSVariables } from '../src/hooks/useCSSVariables';

// Mock document methods
const mockRemove = jest.fn();
const mockInsertBefore = jest.fn();
const mockCreateElement = jest.fn();
const mockGetElementById = jest.fn();

describe('CSS Variables Removal', () => {
  beforeEach(() => {
    // 重置所有 mock
    jest.clearAllMocks();

    // Mock document methods
    Object.defineProperty(document, 'head', {
      value: {
        insertBefore: mockInsertBefore,
        firstChild: null,
      },
      writable: true,
    });

    Object.defineProperty(document, 'getElementById', {
      value: mockGetElementById,
      writable: true,
    });

    Object.defineProperty(document, 'createElement', {
      value: mockCreateElement.mockReturnValue({
        innerHTML: '',
        id: '',
      }),
      writable: true,
    });
  });

  describe('样式删除逻辑', () => {
    it('应该在更新样式时删除旧的样式元素', () => {
      // 模拟已存在的样式元素
      const existingStyle = {
        remove: mockRemove,
      };
      mockGetElementById.mockReturnValue(existingStyle);

      // 第一次插入样式
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 验证第一次插入
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();

      // 重置 mock 调用次数
      jest.clearAllMocks();

      // 第二次插入不同的样式（触发更新）
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#ff0000', // 不同的颜色
        },
        'test-theme',
      );

      // 验证删除了旧的样式
      expect(mockGetElementById).toHaveBeenCalledWith(
        'test-component-test-theme-css-variables',
      );
      expect(mockRemove).toHaveBeenCalled();

      // 验证插入了新的样式
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该在样式元素不存在时安全地处理删除', () => {
      // 模拟样式元素不存在
      mockGetElementById.mockReturnValue(null);

      // 第一次插入
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 第二次插入（触发更新）
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#ff0000',
        },
        'test-theme',
      );

      // 验证尝试删除，但元素不存在
      expect(mockGetElementById).toHaveBeenCalledWith(
        'test-component-test-theme-css-variables',
      );
      expect(mockRemove).not.toHaveBeenCalled(); // 因为元素不存在，所以不会调用 remove

      // 验证仍然插入了新样式
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该在删除样式时处理错误', () => {
      // 模拟删除时抛出错误
      const existingStyle = {
        remove: jest.fn().mockImplementation(() => {
          throw new Error('Remove failed');
        }),
      };
      mockGetElementById.mockReturnValue(existingStyle);

      // 第一次插入
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 第二次插入（应该处理删除错误）
      expect(() => {
        insertCSSVariables(
          'test-component',
          {
            '--primary-color': '#ff0000',
          },
          'test-theme',
        );
      }).not.toThrow();

      // 验证仍然插入了新样式
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该在 getElementById 失败时安全处理', () => {
      // 模拟 getElementById 抛出错误
      mockGetElementById.mockImplementation(() => {
        throw new Error('getElementById failed');
      });

      // 第一次插入
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 第二次插入（应该处理 getElementById 错误）
      expect(() => {
        insertCSSVariables(
          'test-component',
          {
            '--primary-color': '#ff0000',
          },
          'test-theme',
        );
      }).not.toThrow();

      // 验证仍然插入了新样式
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该只在样式内容发生变化时才删除和重新插入', () => {
      const cssVariables = {
        '--primary-color': '#1890ff',
        '--text-color': '#000000',
      };

      // 第一次插入
      insertCSSVariables('test-component', cssVariables, 'test-theme');

      // 重置 mock
      jest.clearAllMocks();

      // 插入相同的样式（不应该触发更新）
      insertCSSVariables('test-component', cssVariables, 'test-theme');

      // 验证没有删除和重新插入
      expect(mockGetElementById).not.toHaveBeenCalled();
      expect(mockRemove).not.toHaveBeenCalled();
      expect(mockCreateElement).not.toHaveBeenCalled();
      expect(mockInsertBefore).not.toHaveBeenCalled();
    });

    it('应该正确处理相同的组件名称和 className 但不同的样式内容', () => {
      // 模拟已存在的样式元素
      const existingStyle = {
        remove: mockRemove,
      };
      mockGetElementById.mockReturnValue(existingStyle);

      // 第一次插入
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 使用相同的组件名称和 className 但不同的样式内容
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#ff0000', // 不同的颜色
        },
        'test-theme',
      );

      // 验证删除的是正确的样式元素
      expect(mockGetElementById).toHaveBeenCalledWith(
        'test-component-test-theme-css-variables',
      );
      expect(mockRemove).toHaveBeenCalled();
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该正确处理空的 className', () => {
      // 模拟已存在的样式元素
      const existingStyle = {
        remove: mockRemove,
      };
      mockGetElementById.mockReturnValue(existingStyle);

      // 第一次插入（空 className）
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        '',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 第二次插入（空 className）但不同的样式内容
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#ff0000', // 不同的颜色
        },
        '',
      );

      // 验证删除的是正确的样式元素
      expect(mockGetElementById).toHaveBeenCalledWith(
        'test-component--css-variables',
      );
      expect(mockRemove).toHaveBeenCalled();
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该在组件名称不同时不会删除其他组件的样式', () => {
      // 插入第一个组件的样式
      insertCSSVariables(
        'component-1',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 插入第二个组件的样式（不同的组件名称）
      insertCSSVariables(
        'component-2',
        {
          '--secondary-color': '#ff0000',
        },
        'test-theme',
      );

      // 验证没有删除第一个组件的样式（因为组件名称不同）
      // 由于 component-2 没有之前的记录，所以不会调用 getElementById 和 remove
      expect(mockGetElementById).not.toHaveBeenCalled();
      expect(mockRemove).not.toHaveBeenCalled();
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该测试删除逻辑的边界情况', () => {
      // 模拟已存在的样式元素
      const existingStyle = {
        remove: mockRemove,
      };
      mockGetElementById.mockReturnValue(existingStyle);

      // 第一次插入
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 插入空的对象（边界情况）
      insertCSSVariables('test-component', {}, 'test-theme');

      // 验证没有删除，因为空对象不会触发更新
      expect(mockGetElementById).not.toHaveBeenCalled();
      expect(mockRemove).not.toHaveBeenCalled();
      expect(mockCreateElement).not.toHaveBeenCalled();
      expect(mockInsertBefore).not.toHaveBeenCalled();
    });

    it('应该测试删除逻辑的 try-catch 错误处理', () => {
      // 模拟 getElementById 抛出错误
      mockGetElementById.mockImplementation(() => {
        throw new Error('getElementById failed');
      });

      // 第一次插入
      insertCSSVariables(
        'test-component',
        {
          '--primary-color': '#1890ff',
        },
        'test-theme',
      );

      // 重置 mock
      jest.clearAllMocks();

      // 第二次插入（应该处理 getElementById 错误）
      expect(() => {
        insertCSSVariables(
          'test-component',
          {
            '--primary-color': '#ff0000',
          },
          'test-theme',
        );
      }).not.toThrow();

      // 验证仍然插入了新样式
      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });
  });
});
