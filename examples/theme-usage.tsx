import React from 'react';
import { ThemeProvide, theme, useCSSVariables } from '../src';
import global from '../src/token/global';

const ThemeExample: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  // 注入 CSS 变量
  useCSSVariables(
    'ThemeExample',
    isDark
      ? {
          '--color-blue-control-fill-primary': '#000000',
          '--color-blue-control-fill-primary-hover': '#000000',
          '--color-blue-control-fill-secondary': '#000000',
          '--color-blue-control-fill-secondary-hover': '#000000',
          '--color-blue-control-fill-ghost-active': '#000000',
          '--color-blue-control-fill-tag': '#000000',
          '--color-blue-control-fill-active': '#000000',
          '--color-blue-control-fill-disabled': '#000000',
          '--color-blue-control-fill-hover': '#000000',
        }
      : {
          '--margin-none': '0',
          '--margin-component-xs': '2px',
          '--margin-component-sm': '4px',
          '--margin-component-base': '8px',
          '--margin-component-lg': '12px',
          '--color-gray-text': '#333333',
          '--color-blue-text': '#1890ff',
          '--color-blue-control-fill-primary': '#1890ff',
          '--color-blue-control-fill-primary-hover': '#40a9ff',
        },
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Theme 对象使用示例</h2>

      {/* 使用 theme 对象的样式 */}
      <div
        style={{
          margin: theme.marginComponentBase,
          padding: theme.marginComponentLg,
          color: theme.colorGrayText,
          border: `1px solid ${theme.colorBlueText}`,
          borderRadius: '4px',
        }}
      >
        这是一个使用 theme 对象的卡片
      </div>

      {/* 按钮示例 */}
      <button
        type="button"
        style={{
          margin: theme.marginComponentSm,
          padding: '8px 16px',
          backgroundColor: theme.colorBlueControlFillPrimary,
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
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

      {/* 显示 theme 对象的一些属性 */}
      <div style={{ marginTop: '20px' }}>
        <h3>Theme 对象属性示例：</h3>
        <ul>
          <li>marginNone: {theme.marginNone}</li>
          <li>marginComponentXs: {theme.marginComponentXs}</li>
          <li>marginComponentBase: {theme.marginComponentBase}</li>
          <li>colorGrayText: {theme.colorGrayText}</li>
          <li>colorBlueText: {theme.colorBlueText}</li>
        </ul>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvide
      className={'theme'}
      cssVariables={{
        ...global,
      }}
    >
      <div>
        <button
          type="button"
          onClick={() => setIsDark(!isDark)}
          style={{
            margin: '10px',
            padding: '8px 16px',
            backgroundColor: theme.colorBlueControlFillPrimary,
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          切换主题 ({isDark ? '深色' : '浅色'})
        </button>
        <ThemeExample isDark={isDark} />
      </div>
    </ThemeProvide>
  );
};

export default App;
