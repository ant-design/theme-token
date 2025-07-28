---
order: 3
title: theme
nav:
  title: utils
---

# Theme 使用示例

## 概述

`theme` 对象是基于 `global` 对象自动生成的，它将 CSS 变量名转换为驼峰命名法的属性名，方便在 CSS-in-JS 中使用。theme 对象现在位于 `src/token/theme.ts` 文件中。

## 基本用法

```tsx | pure
import { theme } from '@ant-design/theme-token';

// 使用 theme 对象
const styles = {
  margin: theme.marginNone, // 'var(--margin-none)'
  padding: theme.paddingCardM, // 'var(--padding-card-m)'
  color: theme.colorGrayText, // 'var(--color-gray-text)'
  borderRadius: theme.borderRadiusControlBase, // 'var(--border-radius-control-base)'
};
```

## 在 React 组件中使用

```tsx | pure
import React from 'react';
import { theme, useCSSVariables } from '@ant-design/theme-token';

const MyComponent: React.FC = () => {
  // 注入 CSS 变量
  useCSSVariables('MyComponent', {
    '--margin-none': '0',
    '--padding-card-m': '16px',
    '--color-gray-text': '#333',
  });

  return (
    <div
      style={{
        margin: theme.marginNone,
        padding: theme.paddingCardM,
        color: theme.colorGrayText,
        borderRadius: theme.borderRadiusControlBase,
      }}
    >
      使用 theme 对象的组件
    </div>
  );
};
```

## 在 styled-components 中使用

```tsx | pure
import styled from 'styled-components';
import { theme } from '@ant-design/theme-token';

const StyledButton = styled.button`
  margin: ${theme.marginComponentBase};
  padding: ${theme.paddingControlM32};
  background-color: ${theme.colorBlueControlFillPrimary};
  border-radius: ${theme.borderRadiusControlBase};
  color: ${theme.colorBlueTextContrast};

  &:hover {
    background-color: ${theme.colorBlueControlFillPrimaryHover};
  }
`;
```

## 在 emotion 中使用

```tsx | pure
import { css } from '@emotion/react';
import { theme } from '@ant-design/theme-token';

const buttonStyles = css`
  margin: ${theme.marginComponentBase};
  padding: ${theme.paddingControlM32};
  background-color: ${theme.colorBlueControlFillPrimary};
  border-radius: ${theme.borderRadiusControlBase};
  color: ${theme.colorBlueTextContrast};

  &:hover {
    background-color: ${theme.colorBlueControlFillPrimaryHover};
  }
`;
```

## 主题切换

由于 theme 对象使用的是 CSS 变量，当通过 `ThemeProvide` 切换主题时，所有使用 theme 对象的样式都会自动更新：

```tsx | pure
import React from 'react';
import { ThemeProvide } from '@ant-design/theme-token';

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <ThemeProvide className={isDark ? 'dark-theme' : 'light-theme'}>
      <div>
        <button onClick={() => setIsDark(!isDark)}>切换主题</button>
        <MyComponent />
      </div>
    </ThemeProvide>
  );
};
```

## 可用的 theme 属性

theme 对象包含以下类别的属性：

### 间距 (Margin)

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

### 颜色 (Color)

- `colorGrayText` - 灰色文本
- `colorGrayTextSecondary` - 灰色次要文本
- `colorGrayTextLight` - 灰色浅色文本
- `colorGrayTextDisabled` - 灰色禁用文本
- `colorBlueText` - 蓝色文本
- `colorBlueTextContrast` - 蓝色对比文本
- `colorBlueControlFillPrimary` - 蓝色主按钮填充
- `colorBlueControlFillPrimaryHover` - 蓝色主按钮悬停填充

### 内边距 (Padding)

- `paddingNone` - 无内边距
- `paddingCardM` - 卡片中等内边距
- `paddingCardL` - 卡片大内边距
- `paddingControlM32` - 控件中等内边距
- `paddingDialog` - 对话框内边距

### 圆角 (Border Radius)

- `borderRadiusControlXs` - 控件超小圆角
- `borderRadiusControlSm` - 控件小圆角
- `borderRadiusControlBase` - 控件基础圆角
- `borderRadiusCardM` - 卡片中等圆角
- `borderRadiusCardLg` - 卡片大圆角

### 阴影 (Shadow)

- `shadowBorderL1` - 边框阴影
- `shadowControlB1` - 控件底部阴影
- `shadowCardL1` - 卡片阴影
- `shadowDialogL3` - 对话框阴影

## 类型支持

TypeScript 用户可以获得完整的类型支持：

```tsx | pure
import { theme, Theme } from 'theme-token';

// theme 对象有完整的类型定义
const margin: string = theme.marginNone; // ✅ 类型安全

// 可以定义使用 theme 的样式对象类型
type MyStyles = {
  margin: Theme['marginNone'];
  padding: Theme['paddingCardM'];
  color: Theme['colorGrayText'];
};
```

## 注意事项

1. theme 对象是只读的，不要尝试修改其属性
2. 所有属性值都是 CSS 变量引用，格式为 `var(--variable-name)`
3. 确保在使用 theme 对象之前已经通过 `useCSSVariables` 或 `ThemeProvide` 注入了相应的 CSS 变量
4. theme 对象会自动包含 global 对象中的所有 CSS 变量，无需手动维护
