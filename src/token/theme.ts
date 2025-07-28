import { globalThemeToken } from './global';

/**
 * 将 CSS 变量名转换为驼峰命名法
 * 例如: '--margin-none' -> 'marginNone'
 */
export function cssVarToCamelCase(cssVar: string): string {
  return cssVar
    .replace(/^--/, '') // 移除开头的 --
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()); // 将 -x 转换为 X
}

/**
 * 基于 global 对象生成的 theme 变量
 * 用户可以在 CSS-in-JS 中使用，支持主题切换
 * 例如: theme.marginNone 的值是 'var(--margin-none)'
 */
export const theme = (() => {
  const themeObj: Record<string, string> = {};

  // 遍历 global 对象，为每个 CSS 变量创建对应的 theme 属性
  Object.keys(globalThemeToken).forEach((cssVar) => {
    const camelCaseKey = cssVarToCamelCase(cssVar);
    if (cssVar.startsWith('--')) {
      themeObj[camelCaseKey] = `var(${cssVar})`;
    } else {
      themeObj[camelCaseKey] = cssVar;
    }
  });

  return themeObj;
})();

export const themeCssVar = (() => {
  const themeObj: Record<string, string> = {};

  // 遍历 global 对象，为每个 CSS 变量创建对应的 theme 属性
  Object.keys(globalThemeToken).forEach((cssVar) => {
    if (cssVar.startsWith('--')) {
      themeObj[cssVar] = `var(${cssVar})`;
    } else {
      themeObj[cssVar] = cssVar;
    }
  });

  return themeObj;
})();

// 导出 theme 的类型定义
export type Theme = typeof theme;
