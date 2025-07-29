import React, { createContext, useContext, useMemo } from 'react';
import { CSSVariables } from '../hooks/useCSSVariables';

/**
 * 主题上下文类型定义
 * 包含类名和CSS变量对象
 */
interface ThemeContextType {
  className: string;
  cssVariables: Partial<CSSVariables>;
}

/**
 * 创建主题上下文，提供默认值
 * 用于在组件树中传递主题相关的数据
 */
const ThemeContext = createContext<ThemeContextType>({
  className: '',
  cssVariables: {},
});

/**
 * 自定义Hook：获取主题上下文
 * 用于在子组件中访问主题数据
 */
export const useThemeContext = () => useContext(ThemeContext);

/**
 * ThemeProvide 组件的属性接口
 */
interface ThemeProvideProps {
  children: React.ReactNode; // 子组件
  className: string; // 主题类名
  cssVariables?: Partial<CSSVariables>; // 可选的CSS变量对象
}

/**
 * 主题提供者组件
 * 用于在组件树中提供主题上下文，避免重复创建相同主题的DOM节点
 */
export const ThemeProvide: React.FC<ThemeProvideProps> = ({
  children,
  className,
  cssVariables = {},
}) => {
  // 获取当前上下文中的类名
  const { className: contextClassName } = useContext(ThemeContext);

  /**
   * 检查DOM中是否已存在相同类名的元素
   * 使用 useMemo 优化性能，避免重复查询DOM
   */
  const hasProviderDom = useMemo(() => {
    if (typeof document !== 'undefined' && className) {
      return document.querySelector(`.${className}`) !== null;
    }
    return false;
  }, [className]);

  /**
   * 如果当前上下文的类名与传入的类名相同
   * 说明已经在相同的主题上下文中，直接返回子组件
   * 避免重复包装
   */
  if (contextClassName && contextClassName === className) {
    return <>{children}</>;
  }

  /**
   * 如果DOM中已存在相同类名的元素
   * 说明该主题已经存在，直接返回子组件
   * 避免创建重复的DOM节点
   */
  if (hasProviderDom) {
    return <>{children}</>;
  }

  /**
   * 创建新的主题上下文提供者
   * 包装子组件并应用主题类名
   */
  return (
    <ThemeContext.Provider value={{ className, cssVariables }}>
      <div className={className}>{children}</div>
    </ThemeContext.Provider>
  );
};
