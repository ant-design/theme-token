import '@testing-library/jest-dom';
import { insertCSSVariables } from '../src/hooks/useCSSVariables';

// Mock document methods for insertCSSVariables
const mockInsertBefore = jest.fn();
const mockCreateElement = jest.fn();
const mockGetElementById = jest.fn();

describe('useCSSVariables Hook', () => {
  beforeEach(() => {
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

  describe('insertCSSVariables 函数测试', () => {
    it('应该正确插入 CSS 变量', () => {
      insertCSSVariables(
        'test-component-1',
        {
          '--primary-color': '#1890ff',
          '--text-color': '#000000',
        },
        'test-theme',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理空的 CSS 变量对象', () => {
      insertCSSVariables('test-component-2', {}, 'test-theme');

      // 空对象不会触发插入
      expect(mockCreateElement).not.toHaveBeenCalled();
      expect(mockInsertBefore).not.toHaveBeenCalled();
    });

    it('应该处理空的 className', () => {
      insertCSSVariables(
        'test-component-3',
        {
          '--primary-color': '#1890ff',
        },
        '',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该为不同的组件名称插入 CSS 变量', () => {
      insertCSSVariables(
        'button-component-1',
        {
          '--button-bg': '#1890ff',
        },
        'button-theme',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该为复杂的组件名称插入 CSS 变量', () => {
      insertCSSVariables(
        'MyComplexComponent-123-1',
        {
          '--complex-bg': '#ff0000',
        },
        'complex-theme',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理单个 CSS 变量', () => {
      insertCSSVariables(
        'test-component-4',
        {
          '--single-color': '#ffffff',
        },
        'test-theme',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理多个 CSS 变量', () => {
      insertCSSVariables(
        'test-component-5',
        {
          '--primary-color': '#1890ff',
          '--secondary-color': '#52c41a',
          '--text-color': '#000000',
          '--background-color': '#ffffff',
          '--border-color': '#d9d9d9',
        },
        'test-theme',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理包含特殊字符的 CSS 变量值', () => {
      insertCSSVariables(
        'test-component-6',
        {
          '--gradient': 'linear-gradient(45deg, #1890ff, #52c41a)',
          '--shadow': '0 2px 8px rgba(0, 0, 0, 0.15)',
          '--font-family': '"PingFang SC", "Microsoft YaHei", sans-serif',
        },
        'test-theme',
      );

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });
  });

  describe('useCSSVariables Hook 逻辑测试', () => {
    it('应该调用 insertCSSVariables 并传递正确的参数', () => {
      // 模拟 useThemeContext 返回的 className
      const mockClassName = 'test-theme';

      // 模拟 hook 的内部逻辑
      const componentName = 'test-component-7';
      const cssVariables = {
        '--primary-color': '#1890ff',
        '--text-color': '#000000',
      };

      // 直接调用 insertCSSVariables（这是 hook 内部调用的函数）
      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理空的 className', () => {
      const mockClassName = '';

      const componentName = 'test-component-8';
      const cssVariables = {
        '--primary-color': '#1890ff',
      };

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理不同的组件名称', () => {
      const mockClassName = 'button-theme';

      const componentName = 'button-component-2';
      const cssVariables = {
        '--button-bg': '#1890ff',
      };

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理复杂的组件名称', () => {
      const mockClassName = 'complex-theme';

      const componentName = 'MyComplexComponent-123-2';
      const cssVariables = {
        '--complex-bg': '#ff0000',
      };

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理多个 CSS 变量', () => {
      const mockClassName = 'test-theme';

      const componentName = 'test-component-9';
      const cssVariables = {
        '--primary-color': '#1890ff',
        '--secondary-color': '#52c41a',
        '--text-color': '#000000',
        '--background-color': '#ffffff',
        '--border-color': '#d9d9d9',
      };

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });

    it('应该处理包含特殊字符的 CSS 变量值', () => {
      const mockClassName = 'test-theme';

      const componentName = 'test-component-10';
      const cssVariables = {
        '--gradient': 'linear-gradient(45deg, #1890ff, #52c41a)',
        '--shadow': '0 2px 8px rgba(0, 0, 0, 0.15)',
        '--font-family': '"PingFang SC", "Microsoft YaHei", sans-serif',
      };

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });
  });

  describe('Hook 参数验证测试', () => {
    it('应该验证 componentName 参数', () => {
      const mockClassName = 'test-theme';

      // 测试不同的 componentName 值
      const testCases = [
        'test-component-11',
        'button-component-3',
        'MyComplexComponent-123-3',
        'component-with-dashes-1',
        'component_with_underscores-1',
      ];

      testCases.forEach((componentName) => {
        jest.clearAllMocks();

        insertCSSVariables(
          componentName,
          {
            '--primary-color': '#1890ff',
          },
          mockClassName,
        );

        expect(mockCreateElement).toHaveBeenCalledWith('style');
        expect(mockInsertBefore).toHaveBeenCalled();
      });
    });

    it('应该验证空的 cssVariables 参数', () => {
      const mockClassName = 'test-theme';
      const componentName = 'test-component-12';
      const cssVariables = {};

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).not.toHaveBeenCalled();
      expect(mockInsertBefore).not.toHaveBeenCalled();
    });

    it('应该验证非空的 cssVariables 参数', () => {
      const mockClassName = 'test-theme';

      const testCases: Array<Record<string, string>> = [
        { '--single-color': '#ffffff' },
        {
          '--primary-color': '#1890ff',
          '--secondary-color': '#52c41a',
        },
        {
          '--gradient': 'linear-gradient(45deg, #1890ff, #52c41a)',
          '--shadow': '0 2px 8px rgba(0, 0, 0, 0.15)',
        },
      ];

      testCases.forEach((cssVariables, index) => {
        jest.clearAllMocks();

        const componentName = `test-component-13-${index}`;
        insertCSSVariables(componentName, cssVariables, mockClassName);

        expect(mockCreateElement).toHaveBeenCalledWith('style');
        expect(mockInsertBefore).toHaveBeenCalled();
      });
    });

    it('应该验证 className 参数', () => {
      const cssVariables = {
        '--primary-color': '#1890ff',
      };

      // 测试不同的 className 值
      const testCases = [
        'test-theme',
        'button-theme',
        'complex-theme',
        '', // 空字符串
        'theme-with-dashes',
        'theme_with_underscores',
      ];

      testCases.forEach((className, index) => {
        jest.clearAllMocks();

        // 为每个测试使用不同的组件名称
        const componentName = `test-component-14-${index}`;

        insertCSSVariables(componentName, cssVariables, className);

        expect(mockCreateElement).toHaveBeenCalledWith('style');
        expect(mockInsertBefore).toHaveBeenCalled();
      });
    });
  });

  describe('类型安全测试', () => {
    it('应该正确处理 CSSVariables 类型', () => {
      const mockClassName = 'test-theme';
      const componentName = 'test-component-15';

      const cssVariables: Record<string, string> = {
        '--primary-color': '#1890ff',
        '--text-color': '#000000',
      };

      insertCSSVariables(componentName, cssVariables, mockClassName);

      expect(mockCreateElement).toHaveBeenCalledWith('style');
      expect(mockInsertBefore).toHaveBeenCalled();
    });
  });
});
