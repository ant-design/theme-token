# 使用示例

## 基础示例

### 简单的按钮组件

```tsx
import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-design/theme-token';

const CustomButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, tokenHashId } = antdTheme?.useToken();

  const useStyle = createStyleRegister({
    theme,
    token: {
      ...token,
      antCls: getPrefixCls(),
    },
    hashId: tokenHashId,
    cssVariables: {
      '--custom-button-primary': token.colorPrimary,
      '--custom-button-border-radius': '6px',
    },
  });

  const buttonStyle = (token: ComponentToken) => ({
    [`${token.componentCls}`]: {
      backgroundColor: 'var(--custom-button-primary)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--custom-button-border-radius)',
      padding: '8px 16px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover': {
        opacity: 0.8,
      },
    },
  });

  const { wrapSSR, hashId } = useStyle('custom-button', buttonStyle);

  return wrapSSR(
    <button className={`custom-button ${hashId}`}>{children}</button>,
  );
};

// 使用示例
const App = () => (
  <AntdConfigProvider>
    <CustomButton>点击我</CustomButton>
  </AntdConfigProvider>
);

export default App;
```

### 卡片组件示例

```tsx
import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-design/theme-token';

interface CardProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({ title, content, children }) => {
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, antdHashId } = antdTheme?.useToken();

  const useStyle = createStyleRegister({
    theme,
    token: {
      ...token,
      antCls: getPrefixCls(),
    },
    hashId: antdHashId,
    cssVariables: {
      '--custom-card-bg': token.colorBgContainer,
      '--custom-card-border': token.colorBorder,
      '--custom-card-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
  });

  const cardStyle = (token: ComponentToken) => ({
    [`${token.componentCls}`]: {
      backgroundColor: 'var(--custom-card-bg)',
      border: '1px solid var(--custom-card-border)',
      borderRadius: '8px',
      boxShadow: 'var(--custom-card-shadow)',
      padding: '16px',
      margin: '8px',
    },
    [`${token.componentCls}-title`]: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: token.colorText,
      marginBottom: '12px',
      borderBottom: '1px solid var(--custom-card-border)',
      paddingBottom: '8px',
    },
    [`${token.componentCls}-content`]: {
      color: token.colorTextSecondary,
      lineHeight: token.lineHeight,
      marginBottom: '12px',
    },
    [`${token.componentCls}-footer`]: {
      borderTop: '1px solid var(--custom-card-border)',
      paddingTop: '12px',
      marginTop: '12px',
    },
  });

  const { wrapSSR, hashId } = useStyle('custom-card', cardStyle);

  return wrapSSR(
    <div className={`custom-card ${hashId}`}>
      <div className={`custom-card-title ${hashId}`}>{title}</div>
      <div className={`custom-card-content ${hashId}`}>{content}</div>
      {children && (
        <div className={`custom-card-footer ${hashId}`}>{children}</div>
      )}
    </div>,
  );
};

// 使用示例
const App = () => (
  <AntdConfigProvider>
    <CustomCard title="示例卡片" content="这是一个使用主题系统的卡片组件示例。">
      <button>操作按钮</button>
    </CustomCard>
  </AntdConfigProvider>
);

export default App;
```

## 高级示例

### 主题切换组件

```tsx
import React, { useContext, useState } from 'react';
import {
  ConfigProvider as AntdConfigProvider,
  theme as antdTheme,
  Button,
} from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-design/theme-token';

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, antdHashId } = antdTheme?.useToken();

  const useStyle = createStyleRegister({
    theme,
    token: {
      ...token,
      antCls: getPrefixCls(),
    },
    hashId: antdHashId,
    cssVariables: {
      '--theme-switcher-bg': isDark ? '#1f1f1f' : '#ffffff',
      '--theme-switcher-text': isDark ? '#ffffff' : '#000000',
      '--theme-switcher-border': isDark ? '#333333' : '#d9d9d9',
    },
  });

  const switcherStyle = (token: ComponentToken) => ({
    [`${token.componentCls}`]: {
      backgroundColor: 'var(--theme-switcher-bg)',
      color: 'var(--theme-switcher-text)',
      border: '1px solid var(--theme-switcher-border)',
      borderRadius: '8px',
      padding: '16px',
      transition: 'all 0.3s',
    },
    [`${token.componentCls}-title`]: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '12px',
    },
    [`${token.componentCls}-content`]: {
      marginBottom: '16px',
    },
  });

  const { wrapSSR, hashId } = useStyle('theme-switcher', switcherStyle);

  return wrapSSR(
    <div className={`theme-switcher ${hashId}`}>
      <div className={`theme-switcher-title ${hashId}`}>主题切换器</div>
      <div className={`theme-switcher-content ${hashId}`}>
        当前主题: {isDark ? '深色' : '浅色'}
      </div>
      <Button onClick={() => setIsDark(!isDark)}>切换主题</Button>
    </div>,
  );
};

// 使用示例
const App = () => (
  <AntdConfigProvider>
    <ThemeSwitcher />
  </AntdConfigProvider>
);

export default App;
```

### 响应式组件

```tsx
import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-design/theme-token';

const ResponsiveGrid: React.FC = () => {
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, antdHashId } = antdTheme?.useToken();

  const useStyle = createStyleRegister({
    theme,
    token: {
      ...token,
      antCls: getPrefixCls(),
    },
    hashId: antdHashId,
    cssVariables: {
      '--responsive-grid-gap': '16px',
      '--responsive-grid-item-bg': token.colorBgContainer,
    },
  });

  const gridStyle = (token: ComponentToken) => ({
    [`${token.componentCls}`]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--responsive-grid-gap)',
      padding: '16px',
    },
    [`${token.componentCls}-item`]: {
      backgroundColor: 'var(--responsive-grid-item-bg)',
      border: `1px solid ${token.colorBorder}`,
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
    },
    [`${token.componentCls}-item-title`]: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: token.colorText,
      marginBottom: '8px',
    },
    [`${token.componentCls}-item-content`]: {
      color: token.colorTextSecondary,
      fontSize: '14px',
    },
  });

  const { wrapSSR, hashId } = useStyle('responsive-grid', gridStyle);

  const items = [
    { title: '项目 1', content: '这是第一个项目的内容' },
    { title: '项目 2', content: '这是第二个项目的内容' },
    { title: '项目 3', content: '这是第三个项目的内容' },
    { title: '项目 4', content: '这是第四个项目的内容' },
  ];

  return wrapSSR(
    <div className={`responsive-grid ${hashId}`}>
      {items.map((item, index) => (
        <div key={index} className={`responsive-griditem ${hashId}`}>
          <div className={`responsive-grid-item-title ${hashId}`}>
            {item.title}
          </div>
          <div className={`responsive-grid-item-content ${hashId}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>,
  );
};

// 使用示例
const App = () => (
  <AntdConfigProvider>
    <ResponsiveGrid />
  </AntdConfigProvider>
);

export default App;
```

## 最佳实践示例

### 可复用的样式生成函数

```tsx
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-design/theme-token';
import React, { useContext } from 'react';

const useStyle = (
  componentName: string,
  styleFn: (token: ComponentToken) => CSSInterpolation,
) => {
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, antdHashId } = antdTheme?.useToken();
  const genStyle = createStyleRegister({
    theme,
    token: {
      ...token,
      antCls: getPrefixCls(),
    },
    hashId: antdHashId,
    cssVariables: {
      '--custom-button-primary': token.colorPrimary,
      '--custom-button-border-radius': '6px',
    },
  });

  return genStyle(componentName, styleFn);
};

// 创建可复用的样式生成函数
const createButtonStyle = (variant: 'primary' | 'secondary' | 'danger') => {
  return (token: ComponentToken) => ({
    [`${token.componentCls}`]: {
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.3s',
      ...(variant === 'primary' && {
        backgroundColor: 'var(--custom-button-primary)',
        color: '#fff',
        '&:hover': { opacity: 0.8 },
      }),
      ...(variant === 'secondary' && {
        backgroundColor: 'transparent',
        color: 'var(--custom-button-primary)',
        border: '1px solid var(--custom-button-primary)',
        '&:hover': {
          backgroundColor: 'var(--custom-button-primary)',
          color: '#fff',
        },
      }),
      ...(variant === 'danger' && {
        backgroundColor: '#ff4d4f',
        color: '#fff',
        '&:hover': { backgroundColor: '#ff7875' },
      }),
    },
  });
};

// 使用示例
const PrimaryButton = () => {
  const { wrapSSR, hashId } = useStyle(
    'custom-primary-button',
    createButtonStyle('primary'),
  );
  return wrapSSR(
    <button className={`custom-primary-button ${hashId}`}>主要按钮</button>,
  );
};

const SecondaryButton = () => {
  const { wrapSSR, hashId } = useStyle(
    'custom-secondary-button',
    createButtonStyle('secondary'),
  );
  return wrapSSR(
    <button className={`custom-secondary-button ${hashId}`}>次要按钮</button>,
  );
};

export default () => {
  return (
    <>
      <PrimaryButton />
      <SecondaryButton />
    </>
  );
};
```

这些示例展示了如何使用 `@ant-design/theme-token` 创建各种类型的组件，从简单的按钮到复杂的响应式网格布局。每个示例都包含了完整的代码和最佳实践。
