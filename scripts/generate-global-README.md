# Global.ts 生成脚本

这是一个自动生成 `src/token/global.ts` 文件的脚本，它会根据 `tokenAndCNName.json` 和 `tokenAndValue.json` 这两个配置文件来生成完整的 global 对象。

## 文件说明

- `tokenAndCNName.json`: 包含 token 键名和对应的中文名称映射
- `tokenAndValue.json`: 包含 token 键名和对应的值映射
- `global.ts`: 最终生成的 TypeScript 文件，包含完整的 global 对象

## 使用方法

### 直接运行脚本

```bash
node scripts/generate-global.js
```

### 在 package.json 中添加脚本

可以在 `package.json` 的 `scripts` 字段中添加：

```json
{
  "scripts": {
    "generate:global": "node scripts/generate-global.js"
  }
}
```

然后运行：

```bash
npm run generate:global
# 或
pnpm generate:global
```

## 生成规则

1. **基础结构**：生成的文件以 `/* eslint-disable */` 开头，并包含 `export const global = {`
2. **特殊字段**：自动添加 `'--name': 'text-code-s'`
3. **预定义边距**：包含手动定义的边距相关字段（margin-none, margin-component-* 等）
4. **分类组织**：将其他 token 按类别分组（颜色、字体、圆角、高度等）
5. **注释生成**：根据 `tokenAndCNName.json` 中的中文名称自动生成 JSDoc 注释
6. **值映射**：使用 `tokenAndValue.json` 中的值作为 token 的实际值
7. **未分类处理**：对于在 `tokenAndValue.json` 中存在但在 `tokenAndCNName.json` 中不存在的 token，会归类到"其他未分类"部分

## 输出示例

生成的文件结构如下：

```typescript
/* eslint-disable */
export const global = {
  '--name': 'text-code-s',
  /** 无间距-none 0 */
  '--margin-none': '0',
  // ... 更多预定义边距

  // 颜色相关
  /** blue/blue-背景-页面 */
  '--color-blue-bg-page': 'var(--color-blue-2)',
  // ... 更多颜色 token

  // 字体相关
  /** 标题/H1 */
  '--font-text-h1-base': 'var(--font-family-base)',
  // ... 更多字体 token
};

export default global;
```

## 注意事项

1. 运行脚本会完全覆盖现有的 `global.ts` 文件
2. 如果需要保留手动添加的内容，请在运行脚本前备份
3. 脚本会自动读取最新的 JSON 配置文件，确保它们是最新的
4. 生成的文件会自动按字母顺序对 token 进行排序

## 错误处理

如果脚本运行失败，请检查：

1. JSON 文件是否存在且格式正确
2. 是否有足够的文件写入权限
3. Node.js 版本是否支持所使用的语法

脚本会输出详细的错误信息帮助定位问题。
