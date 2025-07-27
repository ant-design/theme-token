# LESS 转换器使用说明

## 可用的 npm 脚本

### 主要功能

```bash
# 转换 LESS 文件到 TypeScript（默认）
npm run convert:less

# 运行转换器内置测试
npm run convert:less:test

# 生成使用示例
npm run convert:less:example

# 运行 Jest 测试（包含 LESS 转换器测试）
npm test
```

### 命令行参数

```bash
# 转换文件（使用默认路径）
node scripts/less-converter.js

# 运行测试
node scripts/less-converter.js test

# 生成示例
node scripts/less-converter.js example

# 指定输入输出文件
node scripts/less-converter.js convert input.less output.ts
```

## 功能说明

### 1. 转换功能 (`convert:less`)

- 读取 `src/token/global.less`
- 解析 LESS 变量和 mixin
- 生成 `src/token/global.ts`
- 生成转换报告 `src/token/global.md`
- 包含使用示例

### 2. 测试功能 (`convert:less:test` / `npm test`)

- 运行基础变量测试
- 运行变量引用测试
- 运行复杂引用测试
- 运行 mixin 解析测试
- 测试 CSS 变量转换
- 测试颜色值标准化
- 测试 mixin 函数生成
- 测试注释保留功能

### 3. 示例功能 (`convert:less:example`)

- 显示 LESS 输入示例
- 显示 TypeScript 输出示例
- 分析变量引用关系
- 提供使用统计

## 输出文件

转换后会生成以下文件：

- `src/token/global.ts` - TypeScript 变量对象
- `src/token/global.md` - 转换报告（包含统计信息）

## 示例输出

### TypeScript 文件格式

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
```

### 在 React 中使用

```tsx
import { global, scrollbarHidden } from './global';

function MyComponent() {
  return (
    <div
      style={{
        color: global['--gray-text'],
        ...scrollbarHidden(),
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
  color: var(--gray-text);
  margin: var(--margin-component-base);
}
```

## 注意事项

1. **文件路径**: 默认从 `src/token/global.less` 读取
2. **变量格式**: 只解析 `@variable: value;` 格式
3. **Mixin 格式**: 只解析 `.mixinName() { ... }` 格式
4. **引用解析**: 自动解析变量引用关系
5. **CSS 变量**: 自动转换为 CSS 自定义属性格式
6. **颜色值**: 自动标准化颜色值（3 位转 6 位十六进制）
7. **Mixin 转换**: 自动将 kebab-case 属性名转换为 camelCase
