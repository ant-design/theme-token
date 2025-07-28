---
order: 2
title: convertGlobalToAntdToken
nav:
  title: utils
---

# Global Token 转 Ant Design Token

这个模块提供了将自定义的 global token 转换为 Ant Design token 格式的功能，支持 SeedToken、MapToken 和 AliasToken。

## 功能特性

- 🔄 **自动转换**: 将 global token 自动映射为 Ant Design token
- 🎨 **多对一映射**: 支持一个变量对应多个 antd token key
- 🏗️ **三层 Token 支持**: 支持 SeedToken、MapToken 和 AliasToken
- ⚡ **类型安全**: 完整的 TypeScript 支持

## Token 层级说明

根据 [Ant Design 文档](https://ant-design.antgroup.com/docs/react/customize-theme-cn#aliastoken)，Design Token 分为三个层级：

### 1. SeedToken (基础变量)

影响范围最大的基础变量，修改后会影响其他所有变量。

### 2. MapToken (梯度变量)

基于 SeedToken 派生的梯度变量，用于不同场景下的样式变化。

### 3. AliasToken (别名变量)

基于 MapToken 派生的别名变量，用于特定组件的样式定制。

## 使用方法

### 基本使用

```tsx | pure
import { ConfigProvider } from 'antd';
import { convertGlobalToAntdToken } from './token/globalToAntd';

const App = () => {
  return (
    <ConfigProvider theme={{ token: convertGlobalToAntdToken() }}>
      {/* 你的应用组件 */}
    </ConfigProvider>
  );
};
```

### 自定义映射

```tsx | pure
import { convertGlobalToAntdToken } from './token/globalToAntd';

// 获取转换后的 token
const antdToken = convertGlobalToAntdToken();

// 自定义主题配置
const customTheme = {
  token: {
    ...antdToken,
    // 添加自定义配置
    colorPrimary: '#1890ff',
  },
};
```

## 映射规则

### SeedToken 映射

| Global Token                   | Ant Design Token   |
| ------------------------------ | ------------------ |
| `--color-blue-9`               | `colorPrimary`     |
| `--color-green-9`              | `colorSuccess`     |
| `--color-orange-9`             | `colorWarning`     |
| `--color-red-9`                | `colorError`       |
| `--color-gray-a12`             | `colorText`        |
| `--color-gray-1`               | `colorBgContainer` |
| `--border-radius-control-base` | `borderRadius`     |
| `--margin-component-base`      | `controlHeight`    |

### MapToken 映射

| Global Token      | Ant Design Token      |
| ----------------- | --------------------- |
| `--color-blue-1`  | `colorPrimaryBg`      |
| `--color-blue-2`  | `colorPrimaryBgHover` |
| `--color-blue-3`  | `colorPrimaryBorder`  |
| `--color-gray-6`  | `colorBgBlur`         |
| `--color-gray-a1` | `colorFill`           |

### AliasToken 映射

| Global Token          | Ant Design Token                            |
| --------------------- | ------------------------------------------- |
| `--color-blue-9`      | `colorLink`, `colorPrimaryTextActive`       |
| `--color-gray-a3`     | `colorControl`, `colorSplit`, `colorBorder` |
| `--shadow-control-b1` | `boxShadow`                                 |
| `--line-width-base`   | `lineWidth`                                 |
| `--font-family`       | `fontFamily`                                |

## 支持的映射类型

### 1. 颜色变量

- **主色系**: `--color-blue-*` → `colorPrimary*`, `colorLink*`
- **成功色**: `--color-green-*` → `colorSuccess*`
- **警告色**: `--color-orange-*` → `colorWarning*`
- **错误色**: `--color-red-*` → `colorError*`
- **中性色**: `--color-gray-*` → `colorText*`, `colorBg*`, `colorBorder*`, `colorFill*`

### 2. 尺寸变量

- **控件高度**: `--margin-component-*` → `controlHeight*`
- **圆角**: `--border-radius-*` → `borderRadius*`

### 3. 字体变量

- **字体大小**: `--font-size-*` → `fontSize*`
- **字体族**: `--font-family` → `fontFamily`
- **行高**: `--line-height-*` → `lineHeight*`
- **字重**: `--font-weight-*` → `fontWeight*`

### 4. 其他变量

- **阴影**: `--shadow-*` → `boxShadow*`
- **线宽**: `--line-width-*` → `lineWidth*`
- **动画**: `--motion-*` → `motionDuration*`
- **屏幕断点**: `--screen-*` → `screen*`

## 多对一映射示例

一个 global token 可以对应多个 Ant Design token：

```tsx | pure
// 一个变量对应多个 token
'--color-blue-9': ['colorPrimary', 'colorLink', 'colorPrimaryTextActive', 'colorPrimaryBorder']
'--color-gray-a3': ['colorBorder', 'colorControl', 'colorSplit', 'colorBgContainerDisabled', 'colorBorderDisabled']
'--color-gray-a12': ['colorText', 'colorTextPlaceholder']
```

## 注意事项

1. **引用处理**: 如果 global token 的值是引用其他变量，会自动解析引用
2. **类型转换**: 尺寸值会自动从字符串转换为数字
3. **优先级**: 后定义的 token 会覆盖先定义的 token
4. **完整性**: 支持 Ant Design 5.x 版本的所有 token

## 扩展映射

如果需要添加新的映射规则，可以修改 `globalToAntd.ts` 文件中的映射数组：

```tsx | pure
// 添加新的颜色映射
const colorMappings = [
  // ... 现有映射
  { key: '--color-custom-primary', tokens: ['colorPrimary'] },
  { key: '--color-custom-secondary', tokens: ['colorTextSecondary'] },
];
```

## 参考文档

- [Ant Design 主题定制](https://ant-design.antgroup.com/docs/react/customize-theme-cn#aliastoken)
- [Design Token 概念](https://ant-design.antgroup.com/docs/react/customize-theme-cn#基本概念)
- [SeedToken 列表](https://ant-design.antgroup.com/docs/react/customize-theme-cn#seedtoken)
- [MapToken 列表](https://ant-design.antgroup.com/docs/react/customize-theme-cn#maptoken)
- [AliasToken 列表](https://ant-design.antgroup.com/docs/react/customize-theme-cn#aliastoken)
