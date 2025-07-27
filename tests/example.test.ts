import { createStyleRegister } from '../src/useStyle';

// 这是一个简单的测试示例，展示如何测试 createStyleRegister 函数
describe('createStyleRegister 示例', () => {
  it('应该能够创建样式注册函数', () => {
    // 创建样式注册函数
    const useStyle = createStyleRegister({
      theme: { algorithm: 'default' },
      token: { colorPrimary: '#1890ff' },
      hashId: 'test-hash',
      cssVariables: {
        '--primary-color': '#1890ff',
      },
    });

    // 验证返回的是一个函数
    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该能够处理空参数', () => {
    // 测试空参数
    const useStyle = createStyleRegister();

    // 验证返回的是一个函数
    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该能够处理部分参数', () => {
    // 测试部分参数
    const useStyle = createStyleRegister({
      token: { colorPrimary: '#1890ff' },
    });

    // 验证返回的是一个函数
    expect(useStyle).toBeInstanceOf(Function);
  });
});
