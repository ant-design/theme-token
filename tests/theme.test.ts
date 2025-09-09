import { global } from '../src/token/global';
import { cssVarToCamelCase, theme } from '../src/token/theme';

describe('theme 对象测试', () => {
  test('theme 对象应该匹配快照', () => {
    // 使用快照测试验证 theme 对象的结构
    expect(theme).toMatchSnapshot();
  });

  test('应该正确转换 CSS 变量名为驼峰命名法', () => {
    // 测试 cssVarToCamelCase 函数
    expect(cssVarToCamelCase('--margin-component-xs')).toBe('marginComponentXs');
    expect(cssVarToCamelCase('--color-gray-text')).toBe('colorGrayText');
    expect(cssVarToCamelCase('--font-size-base')).toBe('fontSizeBase');
  });

  test('应该包含有效的 theme 对象', () => {
    // 验证 theme 对象基本属性
    expect(theme).toBeDefined();
    expect(typeof theme).toBe('object');
    expect(Object.keys(theme).length).toBeGreaterThan(0);
  });

  test('所有属性值都应该是 CSS 变量引用格式', () => {
    // 验证所有属性值都是 var() 格式，支持数字
    Object.values(theme).forEach((value) => {
      expect(typeof value).toBe('string');
      expect(value).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
    });
  });

  test('应该正确处理复杂的 CSS 变量名', () => {
    // 测试实际存在的复杂变量名
    const complexKeys = Object.keys(theme).filter(key => key.includes('ControlFill'));
    expect(complexKeys.length).toBeGreaterThan(0);
    
    // 检查第一个复杂变量名的格式
    const key = complexKeys[0];
    expect(theme[key]).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
  });

  test('theme 对象快照测试', () => {
    // 使用快照测试确保 theme 对象结构稳定
    expect(theme).toMatchSnapshot();
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
  test('应该为所有 CSS 变量生成正确的 var() 格式的值', () => {
    // 验证所有值都是 var() 格式
    Object.values(theme).forEach((value) => {
      expect(value).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
    });
  });

  test('theme 对象应该包含所有 global 对象中的 CSS 变量', () => {
    // 验证所有 global 中的 CSS 变量都在 theme 中有对应的属性
    const cssVars = Object.keys(global).filter((cssVar) =>
      cssVar.startsWith('--'),
    );
    cssVars.forEach((cssVar) => {
      const camelCaseKey = cssVarToCamelCase(cssVar);
      expect(theme).toHaveProperty(camelCaseKey);
    });
  });

  test('theme 对象的属性数量应该与 global 对象中的 CSS 变量数量一致', () => {
    const cssVarCount = Object.keys(global).filter((key) =>
      key.startsWith('--'),
    ).length;
    expect(Object.keys(theme).length).toBe(cssVarCount);
  });
});

describe('theme 对象实际使用场景测试', () => {
  test('应该能够用于 CSS-in-JS 样式', () => {
    // 获取实际存在的变量进行测试
    const themeKeys = Object.keys(theme);
    const marginKeys = themeKeys.filter(key => key.includes('margin'));
    const colorKeys = themeKeys.filter(key => key.includes('color'));
    
    expect(marginKeys.length).toBeGreaterThan(0);
    expect(colorKeys.length).toBeGreaterThan(0);
    
    // 模拟在 CSS-in-JS 中使用实际存在的 theme 变量
    const mockStyle = {
      margin: theme[marginKeys[0]],
      color: theme[colorKeys[0]],
    };

    expect(mockStyle.margin).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
    expect(mockStyle.color).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
  });

  test('应该支持主题切换（通过 CSS 变量）', () => {
    // 验证所有值都是 CSS 变量引用，支持动态主题切换
    Object.values(theme).forEach((value) => {
      expect(value).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
      // 确保是有效的 CSS 变量引用格式
      expect(value).not.toBe('');
      expect(value.length).toBeGreaterThan(6); // var(--x) 最小长度
    });
  });

  test('应该包含所有必要的设计令牌', () => {
    // 使用 snapshot 测试确保 theme 对象结构稳定
    expect(theme).toMatchSnapshot();
  });

  test('theme 对象的所有值都应该是 CSS 变量格式', () => {
    // 验证所有属性值都是正确的 CSS 变量格式
    Object.values(theme).forEach((value) => {
      expect(typeof value).toBe('string');
      expect(value).toMatch(/^var\(--[a-zA-Z0-9-]+\)$/);
    });
  });
});
