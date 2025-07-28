import { cssVarToCamelCase, theme } from '../src/token/theme';

// 声明 require 函数类型
declare const require: (module: string) => any;

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

describe('cssVarToCamelCase 函数测试', () => {
  test('应该正确转换基本的 CSS 变量名', () => {
    expect(cssVarToCamelCase('--margin-none')).toBe('marginNone');
    expect(cssVarToCamelCase('--color-gray-text')).toBe('colorGrayText');
    expect(cssVarToCamelCase('--color-blue-control-fill-primary')).toBe(
      'colorBlueControlFillPrimary',
    );
  });

  test('应该处理单个连字符的情况', () => {
    expect(cssVarToCamelCase('--margin-xs')).toBe('marginXs');
    expect(cssVarToCamelCase('--color-red')).toBe('colorRed');
  });

  test('应该处理多个连字符的情况', () => {
    expect(cssVarToCamelCase('--color-gray-control-fill-primary-hover')).toBe(
      'colorGrayControlFillPrimaryHover',
    );
    expect(cssVarToCamelCase('--margin-component-xs')).toBe(
      'marginComponentXs',
    );
  });

  test('应该处理数字的情况', () => {
    expect(cssVarToCamelCase('--margin-2xs')).toBe('margin-2xs');
    expect(cssVarToCamelCase('--color-gray-a12')).toBe('colorGrayA12');
  });

  test('应该处理没有连字符的情况', () => {
    expect(cssVarToCamelCase('--name')).toBe('name');
    expect(cssVarToCamelCase('--color')).toBe('color');
  });

  test('应该处理空字符串和边界情况', () => {
    expect(cssVarToCamelCase('--')).toBe('');
    expect(cssVarToCamelCase('--a')).toBe('a');
    expect(cssVarToCamelCase('--a-b')).toBe('aB');
  });
});

describe('theme 对象生成逻辑测试', () => {
  test('应该为所有以 -- 开头的 CSS 变量生成 var() 格式的值', () => {
    // 验证所有以 -- 开头的键都生成了 var() 格式的值
    Object.entries(theme).forEach(([key, value]) => {
      // 从 key 反推原始的 CSS 变量名
      const originalCssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      const expectedCssVar = `--${originalCssVar}`;

      expect(value).toBe(`var(${expectedCssVar})`);
    });
  });

  test('theme 对象应该是可变的', () => {
    // 验证 theme 对象可以添加新属性
    (theme as any).newProperty = 'test';
    expect(theme).toHaveProperty('newProperty');
    expect(theme.newProperty).toBe('test');
  });

  test('theme 对象应该包含所有 global 对象中的 CSS 变量', () => {
    // 导入 global 对象进行验证
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { globalThemeToken } = require('../src/token/global') as any;

    // 验证所有 global 中的 CSS 变量都在 theme 中有对应的属性
    const cssVars = Object.keys(globalThemeToken).filter((cssVar) =>
      cssVar.startsWith('--'),
    );
    cssVars.forEach((cssVar) => {
      const camelCaseKey = cssVarToCamelCase(cssVar);
      expect(theme).toHaveProperty(camelCaseKey);
      expect(theme[camelCaseKey]).toBe(`var(${cssVar})`);
    });
  });

  test('theme 对象的属性数量应该与 global 对象中的 CSS 变量数量一致', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { globalThemeToken } = require('../src/token/global') as any;
    const cssVarCount = Object.keys(globalThemeToken).filter((key) =>
      key.startsWith('--'),
    ).length;
    // 由于测试中添加了 newProperty，我们需要减去1
    const actualCount =
      Object.keys(theme).length - (theme.hasOwnProperty('newProperty') ? 1 : 0);
    expect(actualCount).toBe(cssVarCount);
  });
});

describe('theme 对象实际使用场景测试', () => {
  test('应该能够用于 CSS-in-JS 样式', () => {
    // 模拟在 CSS-in-JS 中使用 theme 对象
    const mockStyle = {
      margin: theme.marginNone,
      color: theme.colorGrayText,
      backgroundColor: theme.colorGrayBgPage,
    };

    expect(mockStyle.margin).toBe('var(--margin-none)');
    expect(mockStyle.color).toBe('var(--color-gray-text)');
    expect(mockStyle.backgroundColor).toBe('var(--color-gray-bg-page)');
  });

  test('应该支持主题切换（通过 CSS 变量）', () => {
    // 验证所有值都是 CSS 变量引用，支持动态主题切换
    Object.entries(theme).forEach(([key, value]) => {
      // 跳过测试中添加的属性
      if (key === 'newProperty') return;

      expect(value).toMatch(/^var\(--[a-z0-9-]+\)$/);
      // 确保是有效的 CSS 变量引用格式
      expect(value).not.toBe('');
      expect(value.length).toBeGreaterThan(6); // var(--x) 最小长度
    });
  });

  test('应该包含所有必要的设计令牌', () => {
    // 验证包含颜色、间距等关键设计令牌
    const requiredTokens = [
      'marginNone',
      'marginComponentXs',
      'colorGrayText',
      'colorBlueText',
      'colorGrayBgPage',
    ];

    requiredTokens.forEach((token) => {
      expect(theme).toHaveProperty(token);
      expect(typeof theme[token]).toBe('string');
      expect(theme[token]).toMatch(/^var\(--[a-z0-9-]+\)$/);
    });
  });
});
