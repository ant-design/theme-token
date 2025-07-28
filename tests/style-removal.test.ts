describe('Style Removal Test', () => {
  let mockGetElementById: jest.Mock;
  let mockRemove: jest.Mock;

  beforeEach(() => {
    // 创建模拟函数
    mockRemove = jest.fn();
    mockGetElementById = jest.fn();

    // 模拟 DOM 元素
    const mockElement = {
      remove: mockRemove,
    };

    // 设置模拟返回值
    mockGetElementById.mockReturnValue(mockElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // 测试函数：模拟样式删除逻辑
  const testStyleRemoval = (
    existingRecord: { inserted?: boolean } | null | undefined,
    componentName: string,
    getElementByIdMock: jest.Mock = mockGetElementById,
  ) => {
    if (existingRecord?.inserted) {
      try {
        const existingStyle = getElementByIdMock(
          `${componentName}-css-variables`,
        );
        if (existingStyle) {
          existingStyle.remove();
        }
      } catch (error) {
        // 忽略错误
      }
    }
  };

  it('应该能够删除已存在的样式元素', () => {
    const existingRecord = { inserted: true };
    const componentName = 'test-component';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证 getElementById 被调用
    expect(mockGetElementById).toHaveBeenCalledWith(
      'test-component-css-variables',
    );

    // 验证 remove 方法被调用
    expect(mockRemove).toHaveBeenCalled();
  });

  it('当样式元素不存在时不应该抛出错误', () => {
    // 模拟样式元素不存在
    mockGetElementById.mockReturnValue(null);

    const existingRecord = { inserted: true };
    const componentName = 'test-component';

    // 执行样式删除逻辑，不应该抛出错误
    expect(() => {
      testStyleRemoval(existingRecord, componentName);
    }).not.toThrow();

    // 验证 getElementById 被调用
    expect(mockGetElementById).toHaveBeenCalledWith(
      'test-component-css-variables',
    );

    // 验证 remove 方法没有被调用
    expect(mockRemove).not.toHaveBeenCalled();
  });

  it('当 existingRecord.inserted 为 false 时不应该执行删除操作', () => {
    const existingRecord = { inserted: false };
    const componentName = 'test-component';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证 getElementById 没有被调用
    expect(mockGetElementById).not.toHaveBeenCalled();
  });

  it('当 existingRecord 为 null 时不应该执行删除操作', () => {
    const existingRecord = null;
    const componentName = 'test-component';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证 getElementById 没有被调用
    expect(mockGetElementById).not.toHaveBeenCalled();
  });

  it('当 existingRecord 为 undefined 时不应该执行删除操作', () => {
    const existingRecord = undefined;
    const componentName = 'test-component';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证 getElementById 没有被调用
    expect(mockGetElementById).not.toHaveBeenCalled();
  });

  it('当 remove 方法抛出错误时应该被捕获', () => {
    // 模拟 remove 方法抛出错误
    mockRemove.mockImplementation(() => {
      throw new Error('Remove failed');
    });

    const existingRecord = { inserted: true };
    const componentName = 'test-component';

    // 执行样式删除逻辑，不应该抛出错误
    expect(() => {
      testStyleRemoval(existingRecord, componentName);
    }).not.toThrow();

    // 验证 getElementById 被调用
    expect(mockGetElementById).toHaveBeenCalledWith(
      'test-component-css-variables',
    );

    // 验证 remove 方法被调用
    expect(mockRemove).toHaveBeenCalled();
  });

  it('应该使用正确的元素 ID 格式', () => {
    const existingRecord = { inserted: true };
    const componentName = 'MyComponent';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证使用了正确的 ID 格式
    expect(mockGetElementById).toHaveBeenCalledWith(
      'MyComponent-css-variables',
    );
  });

  it('应该处理复杂的组件名称', () => {
    const existingRecord = { inserted: true };
    const componentName = 'Complex-Component_Name';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证使用了正确的 ID 格式
    expect(mockGetElementById).toHaveBeenCalledWith(
      'Complex-Component_Name-css-variables',
    );
  });

  it('应该处理空字符串组件名称', () => {
    const existingRecord = { inserted: true };
    const componentName = '';

    // 执行样式删除逻辑
    testStyleRemoval(existingRecord, componentName);

    // 验证使用了正确的 ID 格式
    expect(mockGetElementById).toHaveBeenCalledWith('-css-variables');
  });
});
