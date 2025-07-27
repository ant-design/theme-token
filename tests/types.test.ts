import {
  BaseToken,
  ComponentToken,
  CSSVariables,
  UseStyleResult,
} from '../src/useStyle';

describe('类型定义', () => {
  describe('BaseToken', () => {
    it('应该接受基础属性', () => {
      const token: BaseToken = {
        colorText: '#000000',
        lineHeight: 1.5,
      };

      expect(token.colorText).toBe('#000000');
      expect(token.lineHeight).toBe(1.5);
    });

    it('应该接受任意额外属性', () => {
      const token: BaseToken = {
        colorText: '#000000',
        customProperty: 'custom value',
        anotherProperty: 123,
      };

      expect(token.customProperty).toBe('custom value');
      expect(token.anotherProperty).toBe(123);
    });
  });

  describe('ComponentToken', () => {
    it('应该继承BaseToken的所有属性', () => {
      const token: ComponentToken = {
        colorText: '#000000',
        lineHeight: 1.5,
        themeId: 1,
        antCls: 'ant',
        componentCls: '.test-component',
        placeholderContent: '请输入内容',
      };

      expect(token.colorText).toBe('#000000');
      expect(token.lineHeight).toBe(1.5);
      expect(token.themeId).toBe(1);
      expect(token.antCls).toBe('ant');
      expect(token.componentCls).toBe('.test-component');
      expect(token.placeholderContent).toBe('请输入内容');
    });

    it('应该接受任意额外属性', () => {
      const token: ComponentToken = {
        colorText: '#000000',
        customProperty: 'custom value',
      };

      expect(token.customProperty).toBe('custom value');
    });
  });

  describe('CSSVariables', () => {
    it('应该接受字符串键值对', () => {
      const cssVars: CSSVariables = {
        '--primary-color': '#1890ff',
        '--border-radius': '6px',
        '--font-size': '14px',
      };

      expect(cssVars['--primary-color']).toBe('#1890ff');
      expect(cssVars['--border-radius']).toBe('6px');
      expect(cssVars['--font-size']).toBe('14px');
    });

    it('应该允许空对象', () => {
      const cssVars: CSSVariables = {};

      expect(Object.keys(cssVars)).toHaveLength(0);
    });
  });

  describe('UseStyleResult', () => {
    it('应该包含所有必需的属性', () => {
      const result: UseStyleResult<ComponentToken> = {
        wrapSSR: jest.fn(),
        hashId: 'test-hash',
        styles: {},
        token: {
          componentCls: '.test-component',
          colorText: '#000000',
        },
      };

      expect(result).toHaveProperty('wrapSSR');
      expect(result).toHaveProperty('hashId');
      expect(result).toHaveProperty('styles');
      expect(result).toHaveProperty('token');
      expect(typeof result.wrapSSR).toBe('function');
      expect(result.hashId).toBe('test-hash');
    });

    it('应该支持泛型类型', () => {
      interface CustomToken extends ComponentToken {
        customProperty: string;
      }

      const result: UseStyleResult<CustomToken> = {
        wrapSSR: jest.fn(),
        hashId: 'test-hash',
        styles: {},
        token: {
          componentCls: '.test-component',
          colorText: '#000000',
          customProperty: 'custom value',
        },
      };

      expect(result.token.customProperty).toBe('custom value');
    });
  });
});
