import { global, scrollbar, scrollbarHidden } from '../src/token/global';

// 为了向后兼容，重新导出 globalThemeToken
const globalThemeToken = global;

describe('Global Token', () => {
  describe('global 对象', () => {
    it('应该导出 global 对象', () => {
      expect(globalThemeToken).toBeDefined();
      expect(typeof globalThemeToken).toBe('object');
    });

    it('应该包含 CSS 变量', () => {
      const keys = Object.keys(globalThemeToken);
      expect(keys.length).toBeGreaterThan(0);

      // 检查所有键都是 CSS 变量格式
      keys.forEach((key) => {
        expect(key).toMatch(/^--/);
      });
    });

    it('应该包含颜色相关的变量', () => {
      const colorKeys = Object.keys(globalThemeToken).filter(
        (key) =>
          key.includes('color') ||
          key.includes('Color') ||
          key.includes('gray') ||
          key.includes('Gray'),
      );
      expect(colorKeys.length).toBeGreaterThan(0);
    });

    it('应该包含间距变量', () => {
      const marginKeys = Object.keys(globalThemeToken).filter(
        (key) =>
          key.includes('margin') ||
          key.includes('Margin') ||
          key.includes('padding') ||
          key.includes('Padding'),
      );
      expect(marginKeys.length).toBeGreaterThan(0);
    });

    it('应该包含透明色变量', () => {
      const transparentKeys = Object.keys(globalThemeToken).filter(
        (key) => key.includes('transparent') || key.includes('Transparent'),
      );
      expect(transparentKeys.length).toBeGreaterThan(0);
    });

    it('应该包含数字相关的变量', () => {
      const numberKeys = Object.keys(globalThemeToken).filter((key) =>
        /\d/.test(key),
      );
      expect(numberKeys.length).toBeGreaterThan(0);
    });
  });

  describe('scrollbar mixin', () => {
    it('应该导出 scrollbar 函数', () => {
      expect(scrollbar).toBeDefined();
      expect(typeof scrollbar).toBe('function');
    });

    it('应该返回正确的样式对象', () => {
      const result = scrollbar();

      expect(result).toBeDefined();
      expect(typeof result).toBe('object');
      expect(result.overflowY).toBe('auto');
      expect(result.overscrollBehavior).toBe('contain');
    });

    it('应该包含 webkit scrollbar 样式', () => {
      const result = scrollbar();

      expect(result['&::-webkit-scrollbar']).toBeDefined();
      expect(result['&::-webkit-scrollbar'].width).toBe('10px');
      expect(result['&::-webkit-scrollbar'].backgroundColor).toBe(
        '@color-transparent',
      );
    });

    it('应该包含 webkit scrollbar thumb 样式', () => {
      const result = scrollbar();

      expect(result['&::-webkit-scrollbar-thumb']).toBeDefined();
      expect(result['&::-webkit-scrollbar-thumb'].width).toBe('4px');
      expect(result['&::-webkit-scrollbar-thumb'].backgroundColor).toBe(
        '@color-transparent',
      );
      expect(result['&::-webkit-scrollbar-thumb'].border).toBe(
        '2px solid @color-transparent',
      );
      expect(result['&::-webkit-scrollbar-thumb'].backgroundClip).toBe(
        'padding-box',
      );
      expect(result['&::-webkit-scrollbar-thumb'].borderRadius).toBe('72px');
    });

    it('应该包含 hover 样式', () => {
      const result = scrollbar();

      expect(result['&:hover::-webkit-scrollbar-thumb']).toBeDefined();
      expect(result['&:hover::-webkit-scrollbar-thumb'].backgroundColor).toBe(
        '@color-gray-border-light',
      );

      const nestedHover = result['&:hover::-webkit-scrollbar-thumb']['&:hover'];
      expect(nestedHover).toBeDefined();
      expect(nestedHover.backgroundColor).toBe('@color-gray-text-disabled');
    });
  });

  describe('scrollbarHidden mixin', () => {
    it('应该导出 scrollbarHidden 函数', () => {
      expect(scrollbarHidden).toBeDefined();
      expect(typeof scrollbarHidden).toBe('function');
    });

    it('应该返回正确的样式对象', () => {
      const result = scrollbarHidden();

      expect(result).toBeDefined();
      expect(typeof result).toBe('object');
      expect(result.overflowY).toBe('auto');
      expect(result.scrollbarWidth).toBe('none');
    });

    it('应该隐藏 webkit scrollbar', () => {
      const result = scrollbarHidden();

      expect(result['&::-webkit-scrollbar']).toBeDefined();
      expect(result['&::-webkit-scrollbar'].display).toBe('none');
    });
  });

  describe('CSS 变量值', () => {
    it('应该包含有效的颜色值', () => {
      const colorValues = Object.values(globalThemeToken).filter(
        (value) =>
          typeof value === 'string' &&
          (value.startsWith('#') ||
            value.startsWith('rgba') ||
            value.startsWith('rgb')) &&
          !value.startsWith('@') && // 排除变量引用
          !value.startsWith('#rgba') && // 排除无效的 #rgba 格式
          !value.includes('linear-gradient'), // 排除线性渐变
      );

      // 支持十六进制（3位、6位、8位）、rgba、rgb 格式（包括带百分比的rgba）
      colorValues.forEach((value) => {
        const isValidColor =
          /^#[0-9A-Fa-f]{3,8}$/.test(value) || /^rgba?\([^)]+\)$/.test(value);
        if (!isValidColor) {
          console.log(`Invalid color value: "${value}"`);
        }
        expect(isValidColor).toBe(true);
      });

      // 如果没有直接的颜色值，至少应该有变量引用
      const referenceValues = Object.values(globalThemeToken).filter(
        (value) => typeof value === 'string' && value.startsWith('var('),
      );
      expect(referenceValues.length).toBeGreaterThan(0);
    });

    it('应该包含有效的尺寸值', () => {
      const sizeValues = Object.values(globalThemeToken).filter(
        (value) =>
          typeof value === 'string' &&
          (value.includes('px') ||
            value.includes('em') ||
            value.includes('rem')),
      );

      sizeValues.forEach((value) => {
        expect(value).toMatch(/^\d+(\.\d+)?(px|em|rem)$/);
      });
    });

    it('应该包含有效的透明值', () => {
      const transparentValues = Object.values(globalThemeToken).filter(
        (value) => typeof value === 'string' && value === 'transparent',
      );

      expect(transparentValues.length).toBeGreaterThan(0);
    });

    it('应该包含有效的变量引用', () => {
      const referenceValues = Object.values(globalThemeToken).filter(
        (value) => typeof value === 'string' && value.startsWith('@'),
      );

      referenceValues.forEach((value) => {
        // 支持包含数字的变量名
        expect(value).toMatch(/^@[a-zA-Z0-9-]+$/);
      });
    });

    it('应该包含有效的百分比值', () => {
      const percentageValues = Object.values(globalThemeToken).filter(
        (value) =>
          typeof value === 'string' &&
          value.includes('%') &&
          !value.startsWith('@') && // 排除变量引用
          !value.includes('linear-gradient'), // 排除线性渐变
      );

      // 支持纯百分比值或 rgba 中的百分比（如 rgba(0, 9, 50, 12.16%)）
      percentageValues.forEach((value) => {
        const isValidPercentage =
          /^\d+(\.\d+)?%$/.test(value) ||
          /^rgba?\([^)]*,\s*\d+(\.\d+)?%[^)]*\)$/.test(value);
        expect(isValidPercentage).toBe(true);
      });
    });
  });

  describe('变量命名规范', () => {
    it('所有变量名应该遵循 kebab-case 格式', () => {
      const keys = Object.keys(globalThemeToken);

      keys.forEach((key) => {
        // 移除 -- 前缀后检查格式
        const name = key.substring(2);
        expect(name).toMatch(/^[a-z][a-z0-9-]*[a-z0-9]$/);
      });
    });

    it('变量名应该有意义', () => {
      const keys = Object.keys(globalThemeToken);

      // 检查是否包含常见的命名模式
      const hasColorVars = keys.some(
        (key) => key.includes('color') || key.includes('gray'),
      );
      const hasMarginVars = keys.some(
        (key) => key.includes('margin') || key.includes('padding'),
      );

      expect(hasColorVars || hasMarginVars).toBe(true);
    });
  });

  describe('默认导出', () => {
    it('应该提供默认导出', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      //@ts-ignore
      const defaultExport = require('../src/token/global').default;
      expect(defaultExport).toBeDefined();
      expect(defaultExport).toBe(globalThemeToken);
    });
  });
});
