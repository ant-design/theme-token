# 测试文档

本项目参考 [ant-design/md-editor](https://github.com/ant-design/md-editor) 的项目结构，为 `@ant-desgin/theme-token` 库添加了完整的测试套件。

## 测试结构

```
tests/
├── setup.ts                    # 测试环境设置
├── utils/
│   └── test-utils.tsx         # 测试工具函数
├── createStyleRegister.test.ts # createStyleRegister 函数测试
├── cssVariables.test.ts        # CSS变量注入功能测试
├── types.test.ts              # 类型定义测试
└── index.test.ts              # 测试索引文件
```

## 测试覆盖范围

### 1. createStyleRegister.test.ts

测试 `createStyleRegister` 函数的各种参数组合：

- 基础参数测试
- 默认参数测试
- 空参数测试
- 复杂对象参数测试
- 错误处理测试

### 2. cssVariables.test.ts

测试 CSS 变量注入功能：

- CSS 变量对象处理
- 空 CSS 变量处理
- 复杂 CSS 变量值处理
- 特殊字符处理

### 3. types.test.ts

测试类型定义的正确性：

- BaseToken 类型测试
- ComponentToken 类型测试
- CSSVariables 类型测试
- UseStyleResult 类型测试

## 运行测试

### 安装依赖

```bash
pnpm install
```

### 运行所有测试

```bash
pnpm test
```

### 运行测试并生成覆盖率报告

```bash
pnpm test:coverage
```

### 监听模式运行测试

```bash
pnpm test:watch
```

## 测试工具

### test-utils.tsx

提供了以下测试工具：

- `render`: 自定义渲染函数，包含必要的 Provider
- `mockToken`: 模拟的 token 对象
- `mockTheme`: 模拟的主题对象
- `mockCssVariables`: 模拟的 CSS 变量对象
- `cleanupDOM`: DOM 清理函数

### setup.ts

测试环境设置：

- 导入 `@testing-library/jest-dom`
- Mock DOM API
- Mock 浏览器 API

## 测试策略

由于 `createStyleRegister` 返回的函数内部使用了 React hooks，我们采用了以下测试策略：

1. **函数创建测试**: 只测试 `createStyleRegister` 函数是否能正确创建返回函数
2. **参数处理测试**: 测试各种参数组合的处理
3. **类型安全测试**: 确保类型定义的正确性
4. **CSS 变量测试**: 测试 CSS 变量注入逻辑

## 覆盖率

当前测试覆盖率为 20.83%，主要覆盖了：

- 函数创建逻辑
- 参数处理逻辑
- 类型定义
- CSS 变量处理

未覆盖的代码主要是 React hooks 相关的逻辑，这些需要在 React 组件环境中测试。

## 最佳实践

1. **测试隔离**: 每个测试都是独立的，不依赖其他测试
2. **清理资源**: 使用 `cleanupDOM` 确保测试间不相互影响
3. **类型安全**: 所有测试都使用 TypeScript 确保类型安全
4. **模拟数据**: 使用统一的模拟数据确保测试一致性

## 参考项目

本测试套件参考了以下项目的测试结构：

- [ant-design/md-editor](https://github.com/ant-design/md-editor)
- Jest 官方文档
- React Testing Library 最佳实践
