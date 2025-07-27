# LESS 到 TypeScript 转换脚本

这个目录包含了将 LESS 变量文件转换为 TypeScript 对象的统一脚本。

## 最近更新

### 统一脚本合并 (2024-01-XX)

根据项目需求，已将所有功能合并到单一脚本中：

- **更改**: 删除了所有分散的脚本文件，合并为 `less-converter.js`
- **保留**: 只保留一个统一的转换脚本
- **更新**: 所有 npm 脚本现在指向统一脚本
- **结果**: 简化了脚本管理，统一了转换逻辑

### 修复函数名转换问题 (2024-01-XX)

修复了 `convertToFunctionName` 函数无法正确处理包含数字的 kebab-case 名称的问题：

- **问题**: `padding-table-lg-60` 无法正确转换为有效的函数名
- **修复**: 更新正则表达式从 `/-([a-z])/g` 到 `/-([a-z0-9])/g`
- **结果**: 现在可以正确转换 `padding-table-lg-60` -> `paddingTableLg60`

## 脚本说明

### `less-converter.js` - 统一转换脚本

- 使用 AST 解析 LESS 文件
- 解析变量定义和引用
- 解析 mixin 定义并转换为函数
- 生成 TypeScript 对象
- 生成使用示例
- 生成详细的转换报告
- 更好的错误处理和警告
- 支持 CSS 变量引用保持
- 内置测试功能
- 支持多种命令行模式

## 使用方法

### 通过 npm 脚本运行

```bash
# 转换 LESS 文件（默认）
npm run convert:less

# 运行测试
npm run convert:less:test

# 生成示例
npm run convert:less:example

# 运行独立测试
npm run test:less
```

### 直接运行脚本

```bash
# 转换文件（默认）
node scripts/less-converter.js

# 运行测试
node scripts/less-converter.js test

# 生成示例
node scripts/less-converter.js example

# 指定输入输出文件
node scripts/less-converter.js convert input.less output.ts
```

### 在代码中使用

```javascript
const {
  convertLessToTs,
  EnhancedLessASTParser,
  runTests,
  generateExample,
} = require('./scripts/less-converter.js');

// 基础转换
convertLessToTs('input.less', 'output.ts');

// 增强转换（带选项）
convertLessToTs('input.less', 'output.ts', {
  generateExample: true,
  generateReport: true,
});

// 运行测试
runTests();

// 生成示例
generateExample();
```

## 输入格式

脚本解析 LESS 文件中的变量定义和 mixin：

```less
// 基础变量
@color-gray-text: #343a45;
@margin-component-base: 8px;

// 引用其他变量
@color-gray-text-secondary: @color-gray-a11;

// Mixin 定义
.scrollbar-hidden() {
  overflow-y: auto;
  scrollbar-width: none;
}

.showScrollLine() {
  border-top: 1px solid @color-transparent;
  border-bottom: 1px solid @color-transparent;
}
```

## 输出格式

生成的 TypeScript 文件格式：

```typescript
export const global = {
  '--gray-text': '#343A45',
  '--margin-component-base': '8px',
  '--gray-text-secondary': '#767E8B',
} as const;

export default global;

// === Mixins 函数 ===

export const scrollbarHidden = () => {
  return {
    overflowY: 'auto',
    scrollbarWidth: 'none',
  };
};

export const showScrollLine = () => {
  return {
    borderTop: '1px solid @color-transparent',
    borderBottom: '1px solid @color-transparent',
  };
};
```

## 特性

### AST 解析

- 使用词法分析和语法分析
- 构建抽象语法树
- 确保解析的稳定性和准确性

### 变量引用解析

- 自动解析变量间的引用关系
- 支持多层引用
- 防止循环引用

### 函数名转换

- 将 kebab-case 转换为 camelCase
- 正确处理数字和字母的组合（如 `padding-table-lg-60` -> `paddingTableLg60`）
- 生成有效的 JavaScript 标识符

### CSS 变量转换

- 自动转换为 CSS 自定义属性格式
- 驼峰命名转 kebab-case
- 移除 `color-` 前缀

### Mixin 转换

- 解析 LESS mixin 定义
- 转换为 TypeScript 函数
- 自动处理 CSS 属性名转换（kebab-case 转 camelCase）
- 支持嵌套的 mixin 内容

### 错误处理

- 检测未解析的变量引用
- 提供详细的错误和警告信息
- 生成转换报告

## 示例输出

### 转换前 (global.less)

```less
@color-gray-text: @color-gray-a12;
@color-gray-text-secondary: @color-gray-a11;
@color-gray-a12: #343a45;
@color-gray-a11: #767e8b;
```

### 转换后 (global.ts)

```typescript
export const global = {
  '--gray-text': '#343A45',
  '--gray-text-secondary': '#767E8B',
  '--gray-a12': '#343A45',
  '--gray-a11': '#767E8B',
} as const;
```

## 使用示例

### 在 React 组件中使用

```tsx
import { global, scrollbarHidden, showScrollLine } from './global';

function MyComponent() {
  return (
    <div
      style={{
        color: global['--gray-text-secondary'],
        backgroundColor: global['--gray-bg-page'],
        ...scrollbarHidden(),
        ...showScrollLine(),
      }}
    >
      Hello World
    </div>
  );
}
```

### 在 CSS 中使用

```css
.my-class {
  color: var(--gray-text-secondary);
  background-color: var(--gray-bg-page);
}
```

## 注意事项

1. **文件路径**: 脚本默认从 `src/token/global.less` 读取，输出到 `src/token/global.ts`
2. **变量格式**: 只解析 `@variable: value;` 格式的变量定义
3. **引用解析**: 自动解析变量引用，但需要确保引用的变量已定义
4. **循环引用**: 脚本会检测并警告循环引用问题

## 故障排除

### 常见问题

1. **未解析的变量引用**

   - 检查引用的变量是否已定义
   - 确保变量定义的顺序正确

2. **循环引用警告**

   - 检查变量之间是否存在循环依赖
   - 重构变量定义以避免循环引用

3. **解析错误**
   - 检查 LESS 文件语法是否正确
   - 确保变量定义格式符合要求

### 调试技巧

1. 查看生成的报告文件 (`global.md`)
2. 检查控制台输出的统计信息
3. 验证生成的 TypeScript 文件内容
