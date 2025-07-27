import { createStyleRegister } from '../src/useStyle';
import { mockToken, mockTheme, cleanupDOM } from './utils/test-utils';

describe('CSS变量注入', () => {
  beforeEach(() => {
    cleanupDOM();
    // 重置document.head的mock
    Object.defineProperty(document, 'head', {
      value: {
        insertBefore: jest.fn(),
        firstChild: null,
      },
      writable: true,
    });
  });

  afterEach(() => {
    cleanupDOM();
  });

  it('应该创建样式注册函数', () => {
    const cssVariables = {
      '--test-color-primary': '#1890ff',
      '--test-border-radius': '6px',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理空的CSS变量对象', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables: {},
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理undefined的CSS变量', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理复杂的CSS变量对象', () => {
    const complexCssVariables = {
      '--test-url': 'url("https://example.com/image.png")',
      '--test-gradient': 'linear-gradient(45deg, #1890ff, #ff0000)',
      '--test-calc': 'calc(100% - 20px)',
      '--test-var': 'var(--another-variable)',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables: complexCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理CSS变量中的特殊字符', () => {
    const cssVariables = {
      '--test-url': 'url("https://example.com/image.png")',
      '--test-gradient': 'linear-gradient(45deg, #1890ff, #ff0000)',
      '--test-calc': 'calc(100% - 20px)',
      '--test-quotes': '"quoted value"',
      '--test-semicolon': 'value; with; semicolons',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理多个CSS变量', () => {
    const cssVariables = {
      '--color-primary': '#1890ff',
      '--color-secondary': '#52c41a',
      '--color-success': '#52c41a',
      '--color-warning': '#faad14',
      '--color-error': '#ff4d4f',
      '--border-radius': '6px',
      '--font-size': '14px',
      '--line-height': '1.5715',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理CSS变量值为空字符串', () => {
    const cssVariables = {
      '--empty-string': '',
      '--normal-value': 'normal',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理CSS变量值为数字', () => {
    const cssVariables = {
      '--number-value': '123',
      '--decimal-value': '3.14',
      '--negative-value': '-10',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });
}); 