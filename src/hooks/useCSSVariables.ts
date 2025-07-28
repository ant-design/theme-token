import { useEffect } from 'react';
import { useThemeContext } from '../ThemeProvide';

// CSS变量类型
export interface CSSVariables {
  [key: string]: string;
}

// 用于跟踪每个组件的 CSS 变量是否已插入，以及当前的 CSS 变量内容
const CSS_VAR_INSERT_MAP = new Map<
  string,
  { inserted: boolean; cssVariables: string }
>();

/**
 * 内部函数：管理 CSS 变量的插入和更新
 * @param componentName 组件名称
 * @param cssVariables CSS变量对象
 * @param className 主题类名
 */
export function insertCSSVariables(
  componentName: string,
  cssVariables: CSSVariables,
  className: string,
) {
  // 生成当前的 CSS 变量字符串
  const currentCssVariables = Object.entries(cssVariables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');

  const cacheKey = className + '-' + componentName;

  // 检查该组件的 CSS 变量是否已插入，以及是否需要更新
  const existingRecord = CSS_VAR_INSERT_MAP.get(cacheKey);
  const needsUpdate =
    !existingRecord || existingRecord.cssVariables !== currentCssVariables;

  if (needsUpdate && cssVariables && Object.keys(cssVariables).length > 0) {
    // 如果已存在样式，先删除旧的
    if (existingRecord?.inserted) {
      try {
        const existingStyle = document.getElementById(
          `${componentName}-${className}-css-variables`,
        );
        if (existingStyle) {
          existingStyle.remove();
        }
      } catch (error) {
        // 忽略删除错误
      }
    }

    // 插入新的 CSS 变量
    try {
      const style = document.createElement('style');
      style.innerHTML = className
        ? `.${className}{${currentCssVariables}}`
        : `:root{${currentCssVariables}}`;
      style.id = `${componentName}-${className}-css-variables`;
      document.head?.insertBefore(style, document.head?.firstChild);

      // 更新记录
      CSS_VAR_INSERT_MAP.set(cacheKey, {
        inserted: true,
        cssVariables: currentCssVariables,
      });
    } catch (error) {
      // 忽略插入错误
    }
  }
}

/**
 * React Hooks：管理 CSS 变量的插入和更新
 * @param componentName 组件名称
 * @param cssVariables CSS变量对象
 */
export function useCSSVariables(
  componentName: string,
  cssVariables: CSSVariables,
) {
  const { className, cssVariables: contextCssVariables } = useThemeContext();
  useEffect(() => {
    insertCSSVariables(
      componentName,
      {
        ...(contextCssVariables || {}),
        ...(cssVariables || {}),
      } as CSSVariables,
      className,
    );
  }, [
    componentName,
    JSON.stringify(cssVariables || {}),
    JSON.stringify(contextCssVariables || {}),
    className,
  ]);
}
