# 使用指南

## 安装

```bash
npm install @ant-desgin/theme-token
# 或
yarn add @ant-desgin/theme-token
# 或
pnpm add @ant-desgin/theme-token
```

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

## 基础用法

### 1. 导入依赖

```tsx | pure
import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import {
  createStyleRegister,
  type ComponentToken,
} from '@ant-desgin/theme-token';
```

### 2. 获取 antd 配置

```tsx | pure
const MyComponent: React.FC = () => {
  // 获取 antd 的配置
  const { getPrefixCls } = useContext(AntdConfigProvider.ConfigContext);
  const { token, theme, hashId } = antdTheme?.useToken();

  // ... 其他代码
};
```

### 3. 创建样式注册函数

```tsx | pure
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
```

### 4. 定义样式生成函数

```tsx | pure
// 定义样式生成函数
const styleFn = (token: ComponentToken) => ({
  [`${token.componentCls}`]: {
    backgroundColor: 'var(--md-editor-color-primary)',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #d9d9d9',
  },
  [`${token.componentCls}-title`]: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: token.colorText,
    marginBottom: '12px',
  },
  [`${token.componentCls}-content`]: {
    color: token.colorText,
    lineHeight: token.lineHeight,
  },
});
```

### 5. 使用样式注册函数

```tsx | pure
// 使用生成的样式注册函数
const { wrapSSR } = useStyle('my-component', styleFn);

// 将样式应用到组件
const component = (
  <div className="md-editor-my-component">
    <div className="md-editor-my-component-title">标题</div>
    <div className="md-editor-my-component-content">内容</div>
  </div>
);

return wrapSSR(component);
```

## 参数说明

### createStyleRegister

`createStyleRegister` 函数用于生成一个样式注册函数，接受以下参数：

- `options` (object): 配置选项
  - `theme` (any): antd 主题对象，用于样式注册
  - `token` (Partial<ComponentToken>): 主题 token 配置
  - `hashId` (string): 样式 hash ID，用于样式隔离
  - `cssVariables` (CSSVariables): CSS 变量对象，会自动注入到 `:root` 选择器中

### 返回的样式注册函数

`createStyleRegister` 返回一个函数，该函数接受：

- `componentName` (string): 具体的组件名称
- `styleFn` (Function): 样式生成函数，接收 token 参数并返回 CSS 样式对象

返回的对象包含：

- `wrapSSR` (Function): 用于 SSR 渲染的包装函数
- `hashId` (string): 样式 hash ID

## 类型定义

```tsx | pure
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

## 最佳实践

### 1. CSS 变量命名

建议使用有意义的 CSS 变量名称，并添加组件前缀：

```tsx | pure
cssVariables: {
  '--md-editor-color-primary': token.colorPrimary,
  '--md-editor-border-radius': '8px',
  '--md-editor-font-size': '14px',
}
```

### 2. 样式生成函数

将样式生成函数提取为独立的函数，便于复用和测试：

```tsx | pure
const createComponentStyle = (token: ComponentToken) => ({
  [`${token.componentCls}`]: {
    // 基础样式
  },
  [`${token.componentCls}-title`]: {
    // 标题样式
  },
  [`${token.componentCls}-content`]: {
    // 内容样式
  },
});
```

### 3. 错误处理

在生产环境中，建议添加错误处理：

```tsx | pure
try {
  const useStyle = createStyleRegister(options);
  const { wrapSSR } = useStyle('my-component', styleFn);
  return wrapSSR(component);
} catch (error) {
  console.error('样式注册失败:', error);
  return component; // 降级处理
}
```

## 常见问题

### Q: 为什么需要 wrapSSR？

A: `wrapSSR` 函数用于确保样式在服务端渲染时正确应用，避免样式闪烁问题。

### Q: CSS 变量什么时候会被注入？

A: CSS 变量会在首次调用 `createStyleRegister` 时自动注入到 `:root` 选择器中。

### Q: 如何实现主题切换？

A: 可以通过更新 `cssVariables` 中的值来实现主题切换，CSS 变量会自动响应变化。
