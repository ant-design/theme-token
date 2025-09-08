# 快速使用指南

## 生成 global.ts

运行以下命令根据 `tokenAndCNName.json` 和 `tokenAndValue.json` 自动生成 `global.ts`：

```bash
# 使用 npm
npm run generate:global

# 使用 pnpm  
pnpm generate:global

# 直接运行脚本
node scripts/generate-global.js
```

## 工作流程

1. 修改 `src/token/tokenAndCNName.json` - 添加新的 token 中文名称映射
2. 修改 `src/token/tokenAndValue.json` - 添加新的 token 值映射  
3. 运行 `npm run generate:global` - 自动生成新的 `global.ts`
4. 检查生成的文件确保正确

⚠️ **注意**：运行脚本会完全重写 `global.ts` 文件，请确保在运行前备份任何手动修改的内容。
