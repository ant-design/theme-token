# @ant-desgin/theme-token

[![NPM version](https://img.shields.io/npm/v/@ant-desgin/theme-token.svg?style=flat)](https://npmjs.org/package/@ant-desgin/theme-token)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-desgin/theme-token.svg?style=flat)](https://npmjs.org/package/@ant-desgin/theme-token)

一个基于 `@ant-design/cssinjs` 的 React 样式主题系统，提供灵活的样式注册和主题 token 管理功能。支持 CSS 变量注入和 SSR 渲染。

## 安装

```bash
npm install @ant-desgin/theme-token
# 或
yarn add @ant-desgin/theme-token
# 或
pnpm add @ant-desgin/theme-token
```

## 使用方法

### 基础用法

基于代码注释中的示例，这里展示如何与 antd 集成使用：

```tsx
import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-desgin/theme-token';

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
    [`${token.componentCls}-title`]: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: token.colorText,
    },
  });

  // 使用生成的样式注册函数
  const { wrapSSR } = useStyle('my-component', styleFn);

  const component = (
    <div className="md-editor-my-component">
      <div className="md-editor-my-component-title">标题</div>
    </div>
  );

  return wrapSSR(component);
};
```

### 参数说明

#### createStyleRegister

`createStyleRegister` 函数用于生成一个样式注册函数，接受以下参数：

- `options` (object): 配置选项
  - `theme` (any): antd 主题对象，用于样式注册
  - `token` (Partial<ComponentToken>): 主题 token 配置
  - `hashId` (string): 样式 hash ID，用于样式隔离
  - `cssVariables` (CSSVariables): CSS 变量对象，会自动注入到 `:root` 选择器中

#### 返回的样式注册函数

`createStyleRegister` 返回一个函数，该函数接受：

- `componentName` (string): 具体的组件名称
- `styleFn` (Function): 样式生成函数，接收 token 参数并返回 CSS 样式对象

返回的对象包含：

- `wrapSSR` (Function): 用于 SSR 渲染的包装函数
- `hashId` (string): 样式 hash ID

### 类型定义

```tsx
// 基础token类型定义
interface BaseToken {
  colorText?: string; // 文字颜色
  lineHeight?: number; // 行高
  [key: string]: any; // 其他属性
}

// 组件token类型
interface ComponentToken extends BaseToken {
  themeId?: number; // 主题ID
  antCls?: string; // antd类名
  componentCls?: string; // 组件类名
  placeholderContent?: string; // 占位符内容
}

// CSS变量类型
interface CSSVariables {
  [key: string]: string; // CSS变量键值对
}

// 样式生成函数类型
type GenerateStyle<T = ComponentToken> = (token: T) => Record<string, any>;

// 使用样式的结果类型
interface UseStyleResult<T extends ComponentToken> {
  wrapSSR: (node: React.ReactElement) => React.ReactElement;
  hashId: string;
  styles: Record<string, any>;
  token: T;
}
```

### 特性

- **CSS 变量注入**: 自动将 CSS 变量注入到 `:root` 选择器中
- **SSR 支持**: 提供 `wrapSSR` 函数支持服务端渲染
- **样式隔离**: 通过 `hashId` 实现样式隔离
- **类型安全**: 完整的 TypeScript 类型支持
- **antd 集成**: 与 antd 主题系统无缝集成

## 依赖

```json
{
  "dependencies": {
    "@ant-design/cssinjs": "^1.24.0"
  },
  "peerDependencies": {
    "react": ">=16.9.0",
    "react-dom": ">=16.9.0"
  }
}
```

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
