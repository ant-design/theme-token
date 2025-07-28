import React from 'react';
import { theme } from '../src';

const Demo: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Theme 对象演示</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>基本用法</h2>
        <div
          style={{
            margin: theme.marginComponentBase,
            padding: theme.marginComponentLg,
            color: theme.colorGrayText,
            border: `1px solid ${theme.colorBlueText}`,
            borderRadius: '4px',
            backgroundColor: '#f5f5f5',
          }}
        >
          这是一个使用 theme 对象的卡片
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>按钮示例</h2>
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
        >
          使用 theme 的按钮
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Theme 对象属性</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '10px',
          }}
        >
          <div>
            <h3>间距 (Margin)</h3>
            <ul>
              <li>marginNone: {theme.marginNone}</li>
              <li>marginComponentXs: {theme.marginComponentXs}</li>
              <li>marginComponentSm: {theme.marginComponentSm}</li>
              <li>marginComponentBase: {theme.marginComponentBase}</li>
              <li>marginComponentLg: {theme.marginComponentLg}</li>
            </ul>
          </div>

          <div>
            <h3>颜色 (Color)</h3>
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

      <div>
        <h2>代码示例</h2>
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

export default Demo;
