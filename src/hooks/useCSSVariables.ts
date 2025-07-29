import { useEffect } from 'react';
import { useThemeContext } from '../ThemeProvider';

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
  const cacheKey = className + '-' + componentName;

  // 检查该组件的 CSS 变量是否已插入，以及是否需要更新
  const existingRecord = CSS_VAR_INSERT_MAP.get(cacheKey);

  // 将 CSS 变量分批处理，每批最多 50 个变量
  const BATCH_SIZE = 50;
  const cssVariableEntries = Object.entries(cssVariables);
  const batches = [];

  for (let i = 0; i < cssVariableEntries.length; i += BATCH_SIZE) {
    batches.push(cssVariableEntries.slice(i, i + BATCH_SIZE));
  }

  // 生成当前的 CSS 变量字符串（分批）
  const currentCssVariables = batches
    .map((batch) => batch.map(([key, value]) => `${key}: ${value};`).join('\n'))
    .join('\n');

  const needsUpdate =
    !existingRecord || existingRecord.cssVariables !== currentCssVariables;

  if (needsUpdate && cssVariables && Object.keys(cssVariables).length > 0) {
    // 如果已存在样式，先删除旧的
    if (existingRecord?.inserted) {
      try {
        // 删除所有相关的样式标签
        for (let i = 0; i < batches.length; i++) {
          const existingStyle = document.getElementById(
            `${componentName}-${className}-css-variables-${i}`,
          );
          if (existingStyle) {
            existingStyle.remove();
          }
        }
      } catch (error) {
        // 忽略删除错误
      }
    }

    // 分批插入新的 CSS 变量
    try {
      batches.forEach((batch, index) => {
        const batchCssVariables = batch
          .map(([key, value]) => `${key}: ${value};`)
          .join('\n');

        const style = document.createElement('style');
        style.innerHTML = className
          ? `.${className}{\n${batchCssVariables}\n}`
          : `:root{\n${batchCssVariables}\n}`;
        style.id = `${componentName}-${className}-css-variables-${index}`;
        document.head?.insertBefore(style, document.head?.firstChild);
      });

      // 更新记录
      CSS_VAR_INSERT_MAP.set(cacheKey, {
        inserted: true,
        cssVariables: currentCssVariables,
      });
    } catch (error) {
      // 忽略插入错误
      console.warn('Failed to insert CSS variables:', error);
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
