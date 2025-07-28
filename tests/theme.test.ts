import { theme } from '../src/token/theme';

describe('theme 对象测试', () => {
  test('应该正确转换 CSS 变量名为驼峰命名法', () => {
    // 打印实际的 theme 对象用于调试
    console.log('Theme object keys:', Object.keys(theme).slice(0, 20));
    console.log('Sample theme values:', {
      marginNone: theme.marginNone,
      marginComponentXs: theme.marginComponentXs,
      colorGrayText: theme.colorGrayText,
    });

    // 测试基本的 CSS 变量转换
    expect(theme.marginNone).toBe('var(--margin-none)');
    expect(theme.marginComponentXs).toBe('var(--margin-component-xs)');
    expect(theme.colorGrayText).toBe('var(--color-gray-text)');
  });

  test('应该包含所有 global 对象中的 CSS 变量', () => {
    // 验证一些关键的 theme 属性存在
    expect(theme).toHaveProperty('marginNone');
    expect(theme).toHaveProperty('marginComponentXs');
    expect(theme).toHaveProperty('marginComponentSm');
    expect(theme).toHaveProperty('marginComponentBase');
    expect(theme).toHaveProperty('marginComponentLg');
    expect(theme).toHaveProperty('colorGrayText');
    expect(theme).toHaveProperty('colorBlueText');
  });

  test('所有属性值都应该是 CSS 变量引用格式', () => {
    // 验证所有属性值都是 var() 格式，支持数字
    Object.values(theme).forEach((value) => {
      expect(typeof value).toBe('string');
      expect(value).toMatch(/^var\(--[a-z0-9-]+\)$/);
    });
  });

  test('应该正确处理复杂的 CSS 变量名', () => {
    // 测试包含多个连字符的变量名
    expect(theme.colorGrayControlFillPrimary).toBe(
      'var(--color-gray-control-fill-primary)',
    );
    expect(theme.colorBlueControlFillPrimaryHover).toBe(
      'var(--color-blue-control-fill-primary-hover)',
    );
  });

  test('theme 对象应该包含预期的属性', () => {
    // 验证 theme 对象包含预期的属性
    expect(theme).toHaveProperty('marginNone');
    expect(theme).toHaveProperty('marginComponentXs');
    expect(theme).toHaveProperty('colorGrayText');
    expect(theme).toHaveProperty('colorBlueText');

    // 验证属性值格式正确
    expect(theme.marginNone).toBe('var(--margin-none)');
    expect(theme.colorGrayText).toBe('var(--color-gray-text)');
  });
});
