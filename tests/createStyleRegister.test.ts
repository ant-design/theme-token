import { createStyleRegister } from '../src/useStyle';
import {
  cleanupDOM,
  mockCssVariables,
  mockTheme,
  mockToken,
} from './utils/test-utils';

describe('createStyleRegister', () => {
  beforeEach(() => {
    cleanupDOM();
  });

  afterEach(() => {
    cleanupDOM();
  });

  it('应该正确创建样式注册函数', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该在没有参数时使用默认值', () => {
    const useStyle = createStyleRegister();

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理空的CSS变量', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables: {},
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理部分token参数', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: { colorPrimary: '#ff0000' },
      hashId: 'test-hash',
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理空的hashId', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: '',
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理undefined的hashId', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理undefined的cssVariables', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理undefined的theme', () => {
    const useStyle = createStyleRegister({
      token: mockToken,
      hashId: 'test-hash',
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理undefined的token', () => {
    const useStyle = createStyleRegister({
      theme: mockTheme,
      hashId: 'test-hash',
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理所有参数都为undefined的情况', () => {
    const useStyle = createStyleRegister({});

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理复杂的token对象', () => {
    const complexToken = {
      ...mockToken,
      customProperty: 'custom value',
      nestedObject: {
        key: 'value',
      },
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: complexToken,
      hashId: 'test-hash',
      cssVariables: mockCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });

  it('应该正确处理复杂的CSS变量对象', () => {
    const complexCssVariables = {
      ...mockCssVariables,
      '--complex-url': 'url("https://example.com/image.png")',
      '--complex-gradient': 'linear-gradient(45deg, #1890ff, #ff0000)',
      '--complex-calc': 'calc(100% - 20px)',
      '--complex-var': 'var(--another-variable)',
    };

    const useStyle = createStyleRegister({
      theme: mockTheme,
      token: mockToken,
      hashId: 'test-hash',
      cssVariables: complexCssVariables,
    });

    expect(useStyle).toBeInstanceOf(Function);
  });
});
