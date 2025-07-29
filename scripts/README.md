# LESS 转换器脚本

这个脚本用于将 LESS 文件转换为 TypeScript 对象，支持变量、mixins 和嵌套选择器的解析。

## 功能特性

### 1. 变量解析

- 解析 `@variable: value;` 格式的变量定义
- 支持变量引用（`@variable: @other-variable;`）
- 自动转换为 CSS 变量格式
- 保留注释信息

### 2. Mixin 解析

- 解析 `.mixinName() { ... }` 格式的 mixin 定义
- 支持 mixin 调用（`.mixinName();`）
- 支持嵌套选择器
- **新功能：单个值 Mixin 优化**

### 3. 单个值 Mixin 优化

当 mixin 只包含一个属性时，会自动优化为直接返回值而不是对象：

**LESS 输入：**

```less
.single-color() {
  color: #ff0000;
}

.multiple-properties() {
  color: #ff0000;
  font-size: 16px;
}
```

**TypeScript 输出：**

```typescript
// global 对象中包含单个值 mixin
export const global = {
  '--single-color': '#ff0000',
  '--single-font-size': '16px',
  '--single-border': '1px solid #ccc',
} as const;

// 多个值 mixin - 返回对象
export const multipleProperties = () => {
  return {
    color: '#ff0000',
    fontSize: '16px',
  };
};
```

**在组合 mixin 中的使用：**

```less
.composite-mixin() {
  .single-color(); // 直接展开为 color: "#ff0000"
  .multiple-properties(); // 展开为 ...multipleProperties()
  padding: 8px;
}
```

**生成的 TypeScript：**

```typescript
export const compositeMixin = () => {
  return {
    color: '#ff0000', // 直接展开
    ...multipleProperties(), // 对象展开
    padding: '8px',
  };
};
```

**使用方式：**

```typescript
// 在组件中使用
import { global } from './global';

const styles = {
  color: global['--single-color'],
  fontSize: global['--single-font-size'],
  border: global['--single-border'],
};
```

## 使用方法

### 命令行

```bash
# 运行测试
node scripts/less-converter.js test

# 生成示例
node scripts/less-converter.js example

# 转换文件
node scripts/less-converter.js convert [input.less] [output.ts]

# 修复 CSS 变量引用
node scripts/less-converter.js fix [target.ts]
```

### 编程方式

```javascript
const {
  convertLessToTs,
  EnhancedLessASTParser,
} = require('./scripts/less-converter.js');

// 转换文件
convertLessToTs('input.less', 'output.ts', {
  generateReport: true,
});

// 直接解析
const parser = new EnhancedLessASTParser();
const variables = parser.parse(lessContent);
const tsObject = parser.generateTypeScriptObject();
```

## 测试

运行所有测试：

```bash
node scripts/less-converter.js test
```

测试包括：

- 基础变量解析
- 变量引用处理
- Mixin 解析和调用
- 单个值 Mixin 优化
- 注释处理
- 实际文件解析

## 示例

查看完整示例：

```bash
node scripts/less-converter.js example
```

这将展示：

- 变量解析示例
- 单个值 Mixin 优化示例
- 组合 Mixin 使用示例
