# useCSSVariables Hooks 使用示例

## 概述

`useCSSVariables` 是一个用于管理 CSS 变量插入和更新的 React hooks。它提供了一种简单的方式来动态管理组件级别的 CSS 变量。

## 基本用法

```tsx | pure
import React from 'react';
import { useCSSVariables } from 'theme-token';

const MyComponent: React.FC = () => {
  const cssVariables = {
    '--primary-color': '#1890ff',
    '--text-color': '#000000',
    '--border-radius': '6px',
  };

  // 使用 hooks 管理 CSS 变量
  useCSSVariables('my-component', cssVariables);

  return (
    <div className="my-component">
      <h1>我的组件</h1>
      <p>这个组件使用了动态 CSS 变量</p>
    </div>
  );
};
```

## 在 createStyleRegister 中使用

```tsx | pure
import { createStyleRegister } from 'theme-token';

const useStyle = createStyleRegister({
  theme: theme,
  token: {
    ...token,
    antCls: getPrefixCls(),
  },
  hashId,
  cssVariables: {
    '--md-editor-color-primary': token.colorPrimary,
    '--md-editor-border-radius': '6px',
  },
});

// 在组件中使用
const MyStyledComponent = () => {
  const { wrapSSR } = useStyle('my-styled-component', (token) => ({
    '.my-styled-component': {
      color: 'var(--md-editor-color-primary)',
      borderRadius: 'var(--md-editor-border-radius)',
    },
  }));

  return wrapSSR(<div className="my-styled-component">样式化的组件</div>);
};
```

## 特性

1. **自动管理**: 自动处理 CSS 变量的插入、更新和删除
2. **性能优化**: 只在变量发生变化时才更新样式
3. **错误处理**: 内置错误处理，避免 DOM 操作失败
4. **类型安全**: 完整的 TypeScript 支持

## API

### useCSSVariables(componentName, cssVariables)

#### 参数

- `componentName` (string): 组件名称，用于生成唯一的样式 ID
- `cssVariables` (CSSVariables): CSS 变量对象

#### 类型定义

```typescript
interface CSSVariables {
  [key: string]: string;
}
```

## 注意事项

1. 确保在 React 组件内部使用此 hooks
2. 组件名称应该是唯一的，以避免样式冲突
3. CSS 变量值应该是有效的 CSS 值
4. 在服务端渲染环境中，此 hooks 会安全地跳过 DOM 操作
