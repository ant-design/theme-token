import type { CSSInterpolation } from '@ant-design/cssinjs';
import { useStyleRegister as useDefaultStyleRegister } from '@ant-design/cssinjs';
import type React from 'react';

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

// CSS变量类型
export interface CSSVariables {
  [key: string]: string;
}

// 使用样式的结果类型
export interface UseStyleResult<T extends ComponentToken> {
  wrapSSR: (node: React.ReactElement) => React.ReactElement;
  hashId: string;
  styles: Record<string, any>;
  token: T;
}

// 用于跟踪每个组件的 CSS 变量是否已插入，以及当前的 CSS 变量内容
const CSS_VAR_INSERT_MAP = new Map<
  string,
  { inserted: boolean; cssVariables: string }
>();

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
    // 生成当前的 CSS 变量字符串
    const currentCssVariables = Object.entries(cssVariables)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');

    // 检查该组件的 CSS 变量是否已插入，以及是否需要更新
    const existingRecord = CSS_VAR_INSERT_MAP.get(componentName);
    const needsUpdate =
      !existingRecord || existingRecord.cssVariables !== currentCssVariables;

    if (needsUpdate && cssVariables && Object.keys(cssVariables).length > 0) {
      // 如果已存在样式，先删除旧的
      if (existingRecord?.inserted) {
        try {
          const existingStyle = document.getElementById(
            `${componentName}-css-variables`,
          );
          if (existingStyle) {
            existingStyle.remove();
          }
        } catch (error) {}
      }

      // 插入新的 CSS 变量
      try {
        const style = document.createElement('style');
        style.innerHTML = `:root{${currentCssVariables}}`;
        style.id = `${componentName}-css-variables`;
        document.head?.insertBefore(style, document.head?.firstChild);

        // 更新记录
        CSS_VAR_INSERT_MAP.set(componentName, {
          inserted: true,
          cssVariables: currentCssVariables,
        });
      } catch (error) {}
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
