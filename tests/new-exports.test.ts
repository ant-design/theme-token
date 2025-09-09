import { convertGlobalToAntdToken, theme } from '../src';

describe('新的导出测试', () => {
  test('应该导出 theme 对象', () => {
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
    // 使用 snapshot 测试 theme 对象的结构
    expect(theme).toMatchSnapshot();
  });

  test('应该导出 convertGlobalToAntdToken 函数', () => {
    expect(convertGlobalToAntdToken).toBeDefined();
    expect(typeof convertGlobalToAntdToken).toBe('function');
  });

  test('convertGlobalToAntdToken 应该返回有效的 token 对象', () => {
    const antdToken = convertGlobalToAntdToken();

    expect(antdToken).toBeDefined();
    expect(typeof antdToken).toBe('object');

    // 使用 snapshot 测试返回的 token 对象结构
    expect(antdToken).toMatchSnapshot();
  });

  test('theme 对象的所有值都应该是 CSS 变量格式', () => {
    // 验证所有属性值都是正确的 CSS 变量格式
    Object.values(theme).forEach((value) => {
      expect(typeof value).toBe('string');
      expect(value).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
    });
  });
});
