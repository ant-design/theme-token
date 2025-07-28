import { convertGlobalToAntdToken, theme } from '../src';

describe('新的导出测试', () => {
  test('应该导出 theme 对象', () => {
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
    expect(theme.marginNone).toBe('var(--margin-none)');
    expect(theme.colorGrayText).toBe('var(--color-gray-text)');
  });

  test('应该导出 convertGlobalToAntdToken 函数', () => {
    expect(convertGlobalToAntdToken).toBeDefined();
    expect(typeof convertGlobalToAntdToken).toBe('function');
  });

  test('convertGlobalToAntdToken 应该返回有效的 token 对象', () => {
    const antdToken = convertGlobalToAntdToken();

    expect(antdToken).toBeDefined();
    expect(typeof antdToken).toBe('object');

    // 检查一些关键的 token 属性
    expect(antdToken.colorPrimary).toBeDefined();
    expect(antdToken.colorSuccess).toBeDefined();
    expect(antdToken.colorWarning).toBeDefined();
    expect(antdToken.colorError).toBeDefined();
    expect(antdToken.colorText).toBeDefined();
    expect(antdToken.colorBgContainer).toBeDefined();
  });

  test('theme 对象应该包含预期的属性', () => {
    const expectedProperties = [
      'marginNone',
      'marginComponentXs',
      'marginComponentSm',
      'marginComponentBase',
      'marginComponentLg',
      'colorGrayText',
      'colorBlueText',
      'colorBlueControlFillPrimary',
    ];

    expectedProperties.forEach((prop) => {
      expect(theme).toHaveProperty(prop);
      expect(typeof theme[prop as keyof typeof theme]).toBe('string');
      expect(theme[prop as keyof typeof theme]).toMatch(
        /^var\(--[a-z0-9-]+\)$/,
      );
    });
  });
});
