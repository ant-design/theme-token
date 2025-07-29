# Theme Token

一个用于管理 CSS 变量和主题切换的 React 库。

## 功能特性

- 🎨 **CSS 变量管理**: 自动生成和管理 CSS 变量
- 🌓 **主题切换**: 支持动态主题切换
- 📦 **TypeScript 支持**: 完整的类型定义
- 🎯 **React Hooks**: 提供便捷的 React Hooks
- 🎨 **Theme 对象**: 基于 global 对象自动生成的 theme 变量，方便在 CSS-in-JS 中使用

## 安装

```bash
npm install @ant-design/theme-token
# 或
yarn add @ant-design/theme-token
# 或
pnpm add @ant-design/theme-token
```

## 基本用法

### 使用 Theme 对象

`theme` 对象是基于 `global` 对象自动生成的，它将 CSS 变量名转换为驼峰命名法的属性名，方便在 CSS-in-JS 中使用。

```tsx | pure
import { theme } from '@ant-design/theme-token';

// 使用 theme 对象
const styles = {
  margin: theme.marginNone, // 'var(--margin-none)'
  padding: theme.marginComponentBase, // 'var(--margin-component-base)'
  color: theme.colorGrayText, // 'var(--color-gray-text)'
  borderRadius: '4px',
};
```

### 在 React 组件中使用

```tsx | pure
import React from 'react';
import { theme, useCSSVariables } from '@ant-design/theme-token';

const MyComponent: React.FC = () => {
  // 注入 CSS 变量
  useCSSVariables('MyComponent', {
    '--margin-none': '0',
    '--margin-component-base': '8px',
    '--color-gray-text': '#333',
  });

  return (
    <div
      style={{
        margin: theme.marginNone,
        padding: theme.marginComponentBase,
        color: theme.colorGrayText,
      }}
    >
      使用 theme 对象的组件
    </div>
  );
};
```

### 主题切换

```tsx | pure
import React from 'react';
import { ThemeProvider } from '@ant-design/theme-token';

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvider className={isDark ? 'dark-theme' : 'light-theme'}>
      <div>
        <button onClick={() => setIsDark(!isDark)}>切换主题</button>
        <MyComponent />
      </div>
    </ThemeProvider>
  );
};
```

### 在 styled-components 中使用

```tsx | pure
import styled from 'styled-components';
import { theme } from '@ant-design/theme-token';

const StyledButton = styled.button`
  margin: ${theme.marginComponentBase};
  padding: 8px 16px;
  background-color: ${theme.colorBlueControlFillPrimary};
  border-radius: 4px;
  color: #ffffff;

  &:hover {
    background-color: ${theme.colorBlueControlFillPrimaryHover};
  }
`;
```

### 在 emotion 中使用

```tsx | pure
import { css } from '@emotion/react';
import { theme } from '@ant-design/theme-token';

const buttonStyles = css`
  margin: ${theme.marginComponentBase};
  padding: 8px 16px;
  background-color: ${theme.colorBlueControlFillPrimary};
  border-radius: 4px;
  color: #ffffff;

  &:hover {
    background-color: ${theme.colorBlueControlFillPrimaryHover};
  }
`;
```

## API 参考

### theme 对象

`theme` 对象包含以下类别的属性：

#### 间距 (Margin)

- `marginNone` - 无间距
- `marginComponentXs` - 组件内小间距
- `marginComponentSm` - 组件内中小间距
- `marginComponentBase` - 组件内基础间距
- `marginComponentLg` - 组件内大间距
- `marginBlockXs` - 区块内小间距
- `marginBlockSm` - 区块内中小间距
- `marginBlockBase` - 区块内基础间距
- `marginBlockXl` - 区块内超大间距
- `marginSection2xs` - 区块间超小间距
- `marginSectionXs` - 区块间小间距
- `marginSectionSm` - 区块间中小间距
- `marginSectionBase` - 区块间基础间距
- `marginSectionLg` - 区块间大间距
- `marginSectionXl` - 区块间超大间距

#### 颜色 (Color)

- `colorGrayText` - 灰色文本
- `colorGrayTextSecondary` - 灰色次要文本
- `colorGrayTextLight` - 灰色浅色文本
- `colorGrayTextDisabled` - 灰色禁用文本
- `colorBlueText` - 蓝色文本
- `colorBlueTextContrast` - 蓝色对比文本
- `colorBlueControlFillPrimary` - 蓝色主按钮填充
- `colorBlueControlFillPrimaryHover` - 蓝色主按钮悬停填充

### useCSSVariables

用于注入 CSS 变量的 React Hook。

```typescript
useCSSVariables(componentName: string, cssVariables: CSSVariables)
```

### ThemeProvider

用于提供主题上下文的 React 组件。

```tsx | pure
<ThemeProvider className={className}>{children}</ThemeProvider>
```

## 类型支持

TypeScript 用户可以获得完整的类型支持：

```tsx | pure
import { theme, Theme } from '@ant-design/theme-token';

// theme 对象有完整的类型定义
const margin: string = theme.marginNone; // ✅ 类型安全

// 可以定义使用 theme 的样式对象类型
type MyStyles = {
  margin: Theme['marginNone'];
  padding: Theme['marginComponentBase'];
  color: Theme['colorGrayText'];
};
```

## 注意事项

1. theme 对象是只读的，不要尝试修改其属性
2. 所有属性值都是 CSS 变量引用，格式为 `var(--variable-name)`
3. 确保在使用 theme 对象之前已经通过 `useCSSVariables` 或 `ThemeProvider` 注入了相应的 CSS 变量
4. theme 对象会自动包含 global 对象中的所有 CSS 变量，无需手动维护

## 开发

```bash
# 安装依赖
npm install

# 运行测试
npm test

# 构建
npm run build
```

## 许可证

MIT
