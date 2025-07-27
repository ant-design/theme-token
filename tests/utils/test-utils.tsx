import { render, RenderOptions } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import React from 'react';

// 自定义渲染器，包含必要的Provider
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// 重新导出所有内容
export * from '@testing-library/react';
export { customRender as render };

// 测试用的基础token
export const mockToken = {
  colorPrimary: '#1890ff',
  colorText: '#000000',
  colorTextSecondary: '#666666',
  colorBgContainer: '#ffffff',
  colorBorder: '#d9d9d9',
  lineHeight: 1.5715,
};

// 测试用的主题对象
export const mockTheme = {
  algorithm: 'default',
  token: mockToken,
};

// 测试用的CSS变量
export const mockCssVariables = {
  '--test-color-primary': mockToken.colorPrimary,
  '--test-border-radius': '6px',
  '--test-font-size': '14px',
};

// 清理DOM的工具函数
export const cleanupDOM = () => {
  // 清理可能插入的样式标签
  const styleElements = document.querySelectorAll('style[id*="css-variables"]');
  styleElements.forEach((element) => element.remove());

  // 清理CSS变量映射
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.CSS_VAR_INSERT_MAP = new Map();
  }
};
