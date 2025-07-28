// 模拟 @ant-design/cssinjs 的 useStyleRegister
jest.mock('@ant-design/cssinjs', () => ({
  useStyleRegister: jest.fn(() => ({
    wrapSSR: (node: any) => node,
    hashId: 'mock-hash-id',
  })),
}));

import {
  createStyleRegister,
  BaseToken,
  ComponentToken,
  GenerateStyle,
  CSSVariables,
  UseStyleResult,
} from '../src/index';

describe('Index Exports', () => {
  describe('createStyleRegister', () => {
    it('应该导出 createStyleRegister 函数', () => {
      expect(createStyleRegister).toBeDefined();
      expect(typeof createStyleRegister).toBe('function');
    });

    it('应该能够创建样式注册函数', () => {
      const useStyle = createStyleRegister({
        token: { colorPrimary: '#1890ff' },
        hashId: 'test-hash',
      });

      expect(useStyle).toBeInstanceOf(Function);
    });
  });

  describe('类型导出', () => {
    it('应该导出所有必要的类型', () => {
      // 检查类型是否被正确导出（通过 TypeScript 编译检查）
      const _baseToken: BaseToken = {
        colorText: '#000000',
        lineHeight: 1.5,
      };

      const _componentToken: ComponentToken = {
        colorText: '#000000',
        lineHeight: 1.5,
        themeId: 1,
        antCls: 'ant',
        componentCls: '.my-component',
      };

      const _cssVariables: CSSVariables = {
        '--primary-color': '#1890ff',
      };

      const _generateStyle: GenerateStyle = (token) => ({
        [token.componentCls || '.default']: {
          color: token.colorText,
        },
      });

      const _useStyleResult: UseStyleResult<ComponentToken> = {
        wrapSSR: (node) => node,
        hashId: 'test',
        styles: {},
        token: _componentToken,
      };

      expect(_baseToken).toBeDefined();
      expect(_componentToken).toBeDefined();
      expect(_cssVariables).toBeDefined();
      expect(_generateStyle).toBeDefined();
      expect(_useStyleResult).toBeDefined();
    });
  });

  describe('BaseToken 类型', () => {
    it('应该允许创建符合 BaseToken 的对象', () => {
      const token: BaseToken = {
        colorText: '#000000',
        lineHeight: 1.5,
        customProperty: 'custom value',
      };

      expect(token.colorText).toBe('#000000');
      expect(token.lineHeight).toBe(1.5);
      expect(token.customProperty).toBe('custom value');
    });
  });

  describe('ComponentToken 类型', () => {
    it('应该继承 BaseToken 并添加组件特定属性', () => {
      const componentToken: ComponentToken = {
        colorText: '#000000',
        lineHeight: 1.5,
        themeId: 1,
        antCls: 'ant',
        componentCls: '.my-component',
        placeholderContent: '请输入内容',
        customProperty: 'custom value',
      };

      expect(componentToken.colorText).toBe('#000000');
      expect(componentToken.themeId).toBe(1);
      expect(componentToken.antCls).toBe('ant');
      expect(componentToken.componentCls).toBe('.my-component');
      expect(componentToken.placeholderContent).toBe('请输入内容');
    });
  });

  describe('GenerateStyle 类型', () => {
    it('应该能够创建符合 GenerateStyle 的函数', () => {
      const styleFn: GenerateStyle = (token: ComponentToken) => ({
        [token.componentCls || '.default']: {
          color: token.colorText,
          lineHeight: token.lineHeight,
        },
      });

      const result = styleFn({
        colorText: '#1890ff',
        lineHeight: 1.5,
        componentCls: '.test-component',
      });

      expect(result['.test-component']).toBeDefined();
      expect(result['.test-component'].color).toBe('#1890ff');
      expect(result['.test-component'].lineHeight).toBe(1.5);
    });
  });

  describe('CSSVariables 类型', () => {
    it('应该允许创建符合 CSSVariables 的对象', () => {
      const cssVars: CSSVariables = {
        '--primary-color': '#1890ff',
        '--border-radius': '6px',
        '--font-size': '14px',
        '--custom-var': 'var(--another-var)',
      };

      expect(cssVars['--primary-color']).toBe('#1890ff');
      expect(cssVars['--border-radius']).toBe('6px');
      expect(cssVars['--font-size']).toBe('14px');
      expect(cssVars['--custom-var']).toBe('var(--another-var)');
    });
  });

  describe('UseStyleResult 类型', () => {
    it('应该能够创建符合 UseStyleResult 的对象', () => {
      const mockReactElement = { type: 'div', props: {} } as any;
      
      const result: UseStyleResult<ComponentToken> = {
        wrapSSR: (node) => node,
        hashId: 'test-hash',
        styles: { '.test': { color: 'red' } },
        token: {
          colorText: '#000000',
          lineHeight: 1.5,
          componentCls: '.test-component',
        },
      };

      expect(result.wrapSSR).toBeInstanceOf(Function);
      expect(result.hashId).toBe('test-hash');
      expect(result.styles).toBeDefined();
      expect(result.token).toBeDefined();
      expect(result.wrapSSR(mockReactElement)).toBe(mockReactElement);
    });
  });

  describe('类型兼容性', () => {
    it('应该支持类型继承关系', () => {
      const baseToken: BaseToken = {
        colorText: '#000000',
        lineHeight: 1.5,
      };

      const componentToken: ComponentToken = {
        ...baseToken,
        themeId: 1,
        antCls: 'ant',
      };

      expect(componentToken.colorText).toBe(baseToken.colorText);
      expect(componentToken.lineHeight).toBe(baseToken.lineHeight);
      expect(componentToken.themeId).toBe(1);
    });

    it('应该支持泛型约束', () => {
      const styleFn: GenerateStyle<ComponentToken> = (token) => ({
        [token.componentCls || '.default']: {
          color: token.colorText,
        },
      });

      const result = styleFn({
        colorText: '#1890ff',
        componentCls: '.test',
      });

      expect(result['.test'].color).toBe('#1890ff');
    });
  });

  describe('实际使用场景', () => {
    it('应该能够完整地使用所有导出的类型和函数', () => {
      // 创建 CSS 变量
      const cssVars: CSSVariables = {
        '--primary-color': '#1890ff',
        '--border-radius': '6px',
      };

      // 创建组件 token
      const componentToken: ComponentToken = {
        colorText: '#000000',
        lineHeight: 1.5,
        themeId: 1,
        antCls: 'ant',
        componentCls: '.my-component',
      };

      // 创建样式生成函数
      const styleFn: GenerateStyle<ComponentToken> = (token) => ({
        [token.componentCls || '.default']: {
          color: token.colorText,
          lineHeight: token.lineHeight,
          borderRadius: 'var(--border-radius)',
        },
      });

      // 创建样式注册函数
      const useStyle = createStyleRegister({
        token: componentToken,
        hashId: 'test-hash',
        cssVariables: cssVars,
      });

      // 使用样式注册函数
      const result = useStyle('my-component', styleFn);

      expect(result).toHaveProperty('wrapSSR');
      expect(result).toHaveProperty('hashId');
      expect(result.hashId).toBe('test-hash');
    });
  });
}); 