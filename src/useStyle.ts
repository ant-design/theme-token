import type { CSSInterpolation } from '@ant-design/cssinjs';
import { useStyleRegister as useDefaultStyleRegister } from '@ant-design/cssinjs';
import type React from 'react';
import { useCSSVariables, type CSSVariables } from './hooks';

// 基础token类型定义
export interface BaseToken {
  colorText?: string;
  lineHeight?: number;
  [key: string]: any;
}

// 组件token类型
export interface ComponentToken extends BaseToken {
  themeId?: number;
  antCls?: string;
  componentCls?: string;
  placeholderContent?: string;
}

// 样式生成函数类型
export type GenerateStyle<T = ComponentToken> = (
  token: T,
) => Record<string, any>;

// 使用样式的结果类型
export interface UseStyleResult<T extends ComponentToken> {
  wrapSSR: (node: React.ReactElement) => React.ReactElement;
  hashId: string;
  styles: Record<string, any>;
  token: T;
}

// 重新导出 CSSVariables 类型
export type { CSSVariables };

/**
 * 生成一个useStyle注册函数
 * @example
 * import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
 * const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
 * const { token, theme, hashId } = antdTheme?.useToken();
 * const useStyle = createStyleRegister({
 *   theme: theme,
 *   token: {
 *     ...token,
 *     antCls: getPrefixCls(),
 *   },
 *   hashId,
 *   cssVariables: {
 *     '--md-editor-color-primary': token.colorPrimary,
 *   },
 * });
 * @param options 配置选项
 * @param options.theme antd主题对象
 * @param options.token 主题token配置
 * @param options.hashId 样式hash ID
 * @param options.cssVariables CSS变量对象
 * @returns 返回一个样式注册函数
 */
export function createStyleRegister<T extends ComponentToken>(
  options: {
    theme?: any;
    token?: Partial<ComponentToken>;
    hashId?: string;
    cssVariables?: CSSVariables;
  } = {},
) {
  const { token = {}, theme, hashId = '', cssVariables = {} } = options;

  return (componentName: string, styleFn: (token: T) => CSSInterpolation) => {
    // 在 React 环境中使用 hooks，在非 React 环境中直接调用内部函数
    try {
      useCSSVariables(componentName, cssVariables);
    } catch (error) {
      // 在非 React 环境中，直接调用内部函数
      const { insertCSSVariables } = require('./hooks/useCSSVariables');
      insertCSSVariables(componentName, cssVariables, '');
    }
    token.componentCls = `.${componentName}`;
    return {
      wrapSSR: useDefaultStyleRegister(
        {
          theme: theme as any,
          token,
          hashId,
          path: [`${componentName}`],
        },
        () => [styleFn(token as any as T)],
      ),
      hashId,
    };
  };
}
