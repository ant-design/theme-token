---
hero:
  title: @ant-design/theme-token
  description: 一个基于 @ant-design/cssinjs 的 React 样式主题系统，提供灵活的样式注册和主题 token 管理功能
  actions:
    - text: 快速开始
      link: /guide
    - text: 查看示例
      link: /example
features:
  - title: CSS 变量注入
    emoji: 🎨
    description: 自动将 CSS 变量注入到 :root 选择器中，支持动态主题切换
  - title: SSR 支持
    emoji: ⚡
    description: 提供 wrapSSR 函数支持服务端渲染，确保样式在服务端正确渲染
  - title: 样式隔离
    emoji: 🛡️
    description: 通过 hashId 实现样式隔离，避免样式冲突
  - title: 类型安全
    emoji: 🔒
    description: 完整的 TypeScript 类型支持，提供更好的开发体验
  - title: antd 集成
    emoji: 🔗
    description: 与 antd 主题系统无缝集成，复用现有的主题配置
  - title: 灵活配置
    emoji: ⚙️
    description: 支持自定义 token、CSS 变量和样式生成函数
---

# @ant-design/theme-token

一个基于 `@ant-design/cssinjs` 的 React 样式主题系统，提供灵活的样式注册和主题 token 管理功能。支持 CSS 变量注入和 SSR 渲染。

## 特性

- **CSS 变量注入**: 自动将 CSS 变量注入到 `:root` 选择器中
- **SSR 支持**: 提供 `wrapSSR` 函数支持服务端渲染
- **样式隔离**: 通过 `hashId` 实现样式隔离
- **类型安全**: 完整的 TypeScript 类型支持
- **antd 集成**: 与 antd 主题系统无缝集成

## 快速开始

```bash
npm install @ant-design/theme-token
# 或
yarn add @ant-design/theme-token
# 或
pnpm add @ant-design/theme-token
```

## 基础用法

```tsx | pure
import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-design/theme-token';

const MyComponent: React.FC = () => {
  // 获取 antd 的配置
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, hashId } = antdTheme?.useToken();

  // 创建样式注册函数
  const useStyle = createStyleRegister({
    theme: theme,
    token: {
      ...token,
      antCls: getPrefixCls(),
    },
    hashId,
    cssVariables: {
      '--md-editor-color-primary': token.colorPrimary,
    },
  });

  // 定义样式生成函数
  const styleFn = (token: ComponentToken) => ({
    [`${token.componentCls}`]: {
      backgroundColor: 'var(--md-editor-color-primary)',
      padding: '16px',
      borderRadius: '8px',
    },
  });

  // 使用生成的样式注册函数
  const { wrapSSR } = useStyle('my-component', styleFn);

  return wrapSSR(<div className="md-editor-my-component">内容</div>);
};
```
