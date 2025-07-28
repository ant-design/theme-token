# Global Token 转 Ant Design Token

这个模块提供了将自定义的 global token 转换为 Ant Design token 格式的功能。

## 功能特性

- 🔄 **自动转换**: 将 global token 自动映射为 Ant Design token
- 🎨 **多对一映射**: 支持一个变量对应多个 Ant Design token key
- 🧩 **组件级配置**: 支持组件级别的主题配置
- ⚡ **类型安全**: 完整的 TypeScript 支持

## 使用方法

### 1. 基本使用

```tsx
import { ConfigProvider } from 'antd';
import { getAntdThemeConfig } from './token/globalToAntd';

const App = () => {
  return (
    <ConfigProvider theme={getAntdThemeConfig()}>
      {/* 你的应用组件 */}
    </ConfigProvider>
  );
};
```

### 2. 完整配置（包含组件级配置）

```tsx
import { ConfigProvider } from 'antd';
import { getCompleteAntdThemeConfig } from './token/globalToAntd';

const App = () => {
  return (
    <ConfigProvider theme={getCompleteAntdThemeConfig()}>
      {/* 你的应用组件 */}
    </ConfigProvider>
  );
};
```

### 3. 自定义映射

```tsx
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
  components: {
    Button: {
      colorPrimary: '#1890ff',
      algorithm: true,
    },
  },
};
```

## 映射规则

### 颜色映射

| Global Token       | Ant Design Token                    |
| ------------------ | ----------------------------------- |
| `--color-blue-9`   | `colorPrimary`, `colorInfo`         |
| `--color-green-9`  | `colorSuccess`                      |
| `--color-orange-9` | `colorWarning`                      |
| `--color-red-9`    | `colorError`                        |
| `--color-gray-a12` | `colorText`                         |
| `--color-gray-a11` | `colorTextSecondary`                |
| `--color-gray-1`   | `colorBgContainer`                  |
| `--color-gray-a3`  | `colorBorder`, `colorFillSecondary` |

### 尺寸映射

| Global Token                   | Ant Design Token |
| ------------------------------ | ---------------- |
| `--margin-component-base`      | `controlHeight`  |
| `--border-radius-control-base` | `borderRadius`   |

### 字体映射

| Global Token          | Ant Design Token   |
| --------------------- | ------------------ |
| `--font-size-body-sm` | `fontSize`         |
| `--font-size-h6`      | `fontSizeHeading1` |

## 支持的映射类型

### 1. 颜色变量

- 主色系：`--color-blue-*`
- 成功色：`--color-green-*`
- 警告色：`--color-orange-*`
- 错误色：`--color-red-*`
- 中性色：`--color-gray-*`

### 2. 尺寸变量

- 控件高度：`--margin-component-*`
- 圆角：`--border-radius-*`

### 3. 字体变量

- 字体大小：`--font-size-*`

## 默认值

转换函数会设置以下默认值：

```tsx
{
  borderRadius: 6,
  fontFamily: 'AlibabaPuHuiTi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  motion: true,
  lineWidth: 1,
  lineWidthBold: 2,
  lineWidthFocus: 3,
}
```

## 组件级配置

支持以下组件的主题配置：

- `Button`: 按钮组件
- `Input`: 输入框组件
- `Card`: 卡片组件
- `Modal`: 模态框组件
- `Select`: 选择器组件
- `Table`: 表格组件

每个组件都支持：

- `colorPrimary`: 主色
- `borderRadius`: 圆角
- `algorithm`: 是否启用算法

## 注意事项

1. **引用处理**: 如果 global token 的值是引用其他变量，会自动解析引用
2. **类型转换**: 尺寸值会自动从字符串转换为数字
3. **默认值**: 如果某些 token 在 global 中不存在，会使用默认值
4. **算法支持**: 组件级配置支持启用 Ant Design 的主题算法

## 扩展映射

如果需要添加新的映射规则，可以修改 `globalToAntd.ts` 文件中的映射表：

```tsx
// 添加新的颜色映射
const colorMapping: Record<string, string[]> = {
  // ... 现有映射
  '--color-custom-primary': ['colorPrimary'],
  '--color-custom-secondary': ['colorTextSecondary'],
};
```

## 参考文档

- [Ant Design 主题定制](https://ant-design.antgroup.com/docs/react/customize-theme-cn#seedtoken)
- [Design Token 概念](https://ant-design.antgroup.com/docs/react/customize-theme-cn#基本概念)
