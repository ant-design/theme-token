import React from 'react';
import { theme, useCSSVariables } from '../src';

const ThemeExample: React.FC = () => {
  // 注入 CSS 变量
  useCSSVariables('ThemeExample', {
    '--margin-none': '0',
    '--margin-component-xs': '2px',
    '--margin-component-sm': '4px',
    '--margin-component-base': '8px',
    '--margin-component-lg': '12px',
    '--color-gray-text': '#333333',
    '--color-blue-text': '#1890ff',
    '--color-blue-control-fill-primary': '#1890ff',
    '--color-blue-control-fill-primary-hover': '#40a9ff',
    '--border-radius-control-base': '4px',
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Theme 对象使用示例</h2>

      {/* 基本使用 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>基本用法</h3>
        <div
          style={{
            margin: theme.marginComponentBase,
            padding: theme.marginComponentLg,
            color: theme.colorGrayText,
            border: `1px solid ${theme.colorBlueText}`,
            borderRadius: theme.borderRadiusControlBase,
            backgroundColor: '#f5f5f5',
          }}
        >
          这是一个使用 theme 对象的卡片
        </div>
      </div>

      {/* 按钮示例 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>按钮示例</h3>
        <button
          type="button"
          style={{
            margin: theme.marginComponentSm,
            padding: '8px 16px',
            backgroundColor: theme.colorBlueControlFillPrimary,
            color: '#ffffff',
            border: 'none',
            borderRadius: theme.borderRadiusControlBase,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              theme.colorBlueControlFillPrimaryHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              theme.colorBlueControlFillPrimary;
          }}
        >
          使用 theme 的按钮
        </button>
      </div>

      {/* 显示 theme 对象的一些属性 */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Theme 对象属性</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '10px',
          }}
        >
          <div>
            <h4>间距 (Margin)</h4>
            <ul>
              <li>marginNone: {theme.marginNone}</li>
              <li>marginComponentXs: {theme.marginComponentXs}</li>
              <li>marginComponentSm: {theme.marginComponentSm}</li>
              <li>marginComponentBase: {theme.marginComponentBase}</li>
              <li>marginComponentLg: {theme.marginComponentLg}</li>
            </ul>
          </div>

          <div>
            <h4>颜色 (Color)</h4>
            <ul>
              <li>colorGrayText: {theme.colorGrayText}</li>
              <li>colorBlueText: {theme.colorBlueText}</li>
              <li>
                colorBlueControlFillPrimary: {theme.colorBlueControlFillPrimary}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div>
        <h3>代码示例</h3>
        <pre
          style={{
            backgroundColor: '#f5f5f5',
            padding: '15px',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '14px',
          }}
        >
          {`import { theme } from '@ant-design/theme-token';

const styles = {
  margin: theme.marginComponentBase,     // 'var(--margin-component-base)'
  padding: theme.marginComponentLg,      // 'var(--margin-component-lg)'
  color: theme.colorGrayText,           // 'var(--color-gray-text)'
  backgroundColor: theme.colorBlueControlFillPrimary, // 'var(--color-blue-control-fill-primary)'
};`}
        </pre>
      </div>
    </div>
  );
};

export default ThemeExample;
