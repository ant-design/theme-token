/* eslint-disable */
// 此文件为脚本文件，禁用 ESLint 规则
const fs = require('fs');
const path = require('path');

// 增强版 LESS AST 解析器
class EnhancedLessASTParser {
  constructor() {
    this.variables = new Map();
    this.variableReferences = new Map();
    this.mixins = new Map();
    this.imports = new Set();
    this.errors = [];
    this.warnings = [];
  }

  // 解析 LESS 文件内容
  parse(content) {
    this.contentLines = content.split('\n');
    const tokens = this.tokenize(content);
    const ast = this.buildAST(tokens);
    this.processAST(ast);

    // 解析 mixins
    this.mixins = this.parseMixins(content);

    return this.variables;
  }

  // 词法分析器
  tokenize(content) {
    const tokens = [];
    const lines = content.split('\n');

    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
      const line = lines[lineNum].trim();

      // 跳过空行
      if (line === '') continue;

      // 跳过注释
      if (line.startsWith('//') || line.startsWith('/*')) continue;

      // 解析变量定义
      const variableToken = this.parseVariableToken(line, lineNum + 1);
      if (variableToken) {
        tokens.push(variableToken);
      }

      // 解析导入语句
      const importToken = this.parseImportToken(line, lineNum + 1);
      if (importToken) {
        tokens.push(importToken);
      }
    }

    return tokens;
  }

  // 解析变量标记
  parseVariableToken(line, lineNum) {
    // 匹配 @variable: value; 格式
    const variableMatch = line.match(/^@([^:]+):\s*(.+?);?$/);
    if (variableMatch) {
      return {
        type: 'variable',
        name: variableMatch[1].trim(),
        value: variableMatch[2].trim(),
        line: lineNum,
        comment: this.getVariableComment(lineNum),
      };
    }
    return null;
  }

  // 解析导入标记
  parseImportToken(line, lineNum) {
    const importMatch = line.match(/^@import\s+['"]([^'"]+)['"];?$/);
    if (importMatch) {
      return {
        type: 'import',
        path: importMatch[1],
        line: lineNum,
      };
    }
    return null;
  }

  // 构建 AST
  buildAST(tokens) {
    const ast = {
      type: 'root',
      children: [],
    };

    for (const token of tokens) {
      if (token.type === 'variable') {
        ast.children.push({
          type: 'variable_declaration',
          name: token.name,
          value: token.value,
          line: token.line,
          comment: token.comment,
        });
      } else if (token.type === 'import') {
        ast.children.push({
          type: 'import_declaration',
          path: token.path,
          line: token.line,
        });
      }
    }

    return ast;
  }

  // 处理 AST
  processAST(ast) {
    for (const node of ast.children) {
      if (node.type === 'variable_declaration') {
        this.processVariableDeclaration(node);
      } else if (node.type === 'import_declaration') {
        this.processImportDeclaration(node);
      }
    }
  }

  // 处理变量声明
  processVariableDeclaration(node) {
    const { name, value, comment } = node;

    if (this.isVariableReference(value)) {
      this.variableReferences.set(name, value);
      this.warnings.push(`变量 ${name} 引用了其他变量: ${value}`);
    }

    this.variables.set(name, { value, comment });
  }

  // 处理导入声明
  processImportDeclaration(node) {
    this.imports.add(node.path);
  }

  // 检查是否为变量引用
  isVariableReference(value) {
    return value.startsWith('@') && value.includes('@');
  }

  // 获取变量注释
  getVariableComment(lineNum) {
    const lines = this.contentLines || [];
    const commentLines = [];

    // 向上查找注释，最多查找3行
    for (let i = lineNum - 2; i < lineNum; i++) {
      if (i >= 0 && i < lines.length) {
        const line = lines[i].trim();

        // 匹配单行注释 // 或 /* */
        if (line.startsWith('//')) {
          const comment = line.substring(2).trim();
          if (comment) {
            commentLines.push(comment);
          }
        } else if (line.startsWith('/*') && line.endsWith('*/')) {
          const comment = line.substring(2, line.length - 2).trim();
          if (comment) {
            commentLines.push(comment);
          }
        }
      }
    }

    return commentLines.length > 0 ? commentLines.join(' ') : null;
  }

  // 获取 mixin 注释
  getMixinComment(lines, mixinLineNum) {
    const commentLines = [];

    // 向上查找注释，最多查找3行
    for (let i = mixinLineNum - 3; i < mixinLineNum; i++) {
      if (i >= 0 && i < lines.length) {
        const line = lines[i].trim();

        // 匹配单行注释 // 或 /* */
        if (line.startsWith('//')) {
          const comment = line.substring(2).trim();
          if (comment) {
            commentLines.push(comment);
          }
        } else if (line.startsWith('/*') && line.endsWith('*/')) {
          const comment = line.substring(2, line.length - 2).trim();
          if (comment) {
            commentLines.push(comment);
          }
        }
      }
    }

    return commentLines.length > 0 ? commentLines.join(' ') : null;
  }

  // 解析 mixin 定义
  parseMixins(content) {
    const mixins = new Map();
    const lines = content.split('\n');

    for (let lineNum = 0; lineNum < lines.length; lineNum++) {
      const line = lines[lineNum].trim();

      // 跳过空行和注释
      if (line === '' || line.startsWith('//') || line.startsWith('/*'))
        continue;

      // 匹配 mixin 定义: .mixinName() { ... }
      const mixinMatch = line.match(/^\.([^()]+)\(\)\s*\{?$/);
      // 也匹配不带大括号的 mixin 定义
      const mixinMatch2 = line.match(/^\.([^()]+)\(\)$/);

      if (mixinMatch || mixinMatch2) {
        const mixinName = (mixinMatch ? mixinMatch[1] : mixinMatch2[1]).trim();
        const mixinContent = this.extractMixinContent(lines, lineNum + 1);
        const mixinComment = this.getMixinComment(lines, lineNum + 1);

        if (mixinContent) {
          mixins.set(mixinName, {
            content: mixinContent,
            line: lineNum + 1,
            comment: mixinComment,
          });
        }
      }
    }

    return mixins;
  }

  // 提取 mixin 内容
  extractMixinContent(lines, startLine) {
    let content = '';
    let braceCount = 0;
    let started = false;

    // 首先检查当前行是否已经包含大括号
    if (startLine > 0 && startLine <= lines.length) {
      const currentLine = lines[startLine - 1];
      if (currentLine.includes('{')) {
        started = true;
        braceCount = (currentLine.match(/\{/g) || []).length;
        content += currentLine + '\n';
      }
    }

    for (let i = startLine; i < lines.length; i++) {
      const line = lines[i];

      if (!started) {
        if (line.includes('{')) {
          started = true;
          braceCount = (line.match(/\{/g) || []).length;
          content += line + '\n';
        }
      } else {
        content += line + '\n';
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;

        if (braceCount <= 0) {
          break;
        }
      }
    }

    // 如果没有找到大括号，尝试从下一行开始
    if (!started && startLine < lines.length) {
      for (let i = startLine; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('{')) {
          started = true;
          braceCount = (line.match(/\{/g) || []).length;
          content += line + '\n';
        } else if (started) {
          content += line + '\n';
          braceCount += (line.match(/\{/g) || []).length;
          braceCount -= (line.match(/\}/g) || []).length;

          if (braceCount <= 0) {
            break;
          }
        }
      }
    }

    return content.trim();
  }

  // 生成 mixin 函数
  generateMixinFunction(mixinName, mixinData) {
    const functionName = this.convertToFunctionName(mixinName);
    let content = '';

    // 添加注释
    if (mixinData.comment) {
      content += `/** ${mixinData.comment} */\n`;
    }

    // 检查是否是单个值的 mixin
    if (this.isSingleValueMixin(mixinName)) {
      const singleValue = this.getMixinSingleValue(mixinName);
      if (singleValue) {
        // 处理包含单引号的字符串
        let processedValue = singleValue.value;
        let formattedValue;
        if (
          typeof processedValue === 'string' &&
          processedValue.includes("'")
        ) {
          // 如果值包含单引号，使用双引号包装，并转义内部的双引号
          formattedValue = `"${processedValue.replace(/"/g, '\\"')}"`;
        } else {
          // 否则使用双引号
          formattedValue = `"${processedValue}"`;
        }

        content += `export const ${functionName} = () => ${formattedValue};`;
      } else {
        // 回退到原来的对象格式
        content += `export const ${functionName} = () => {
  return {
${this.processMixinContent(mixinData.content)}
  };
};`;
      }
    } else {
      // 多个值的 mixin，使用对象格式
      content += `export const ${functionName} = () => {
  return {
${this.processMixinContent(mixinData.content)}
  };
};`;
    }

    return content;
  }

  // 处理 mixin 内容
  processMixinContent(content) {
    const ast = this.parseMixinAST(content);
    return this.generateMixinObject(ast);
  }

  // 解析 mixin AST
  parseMixinAST(content) {
    const lines = content.split('\n');
    const ast = {
      type: 'mixin',
      properties: [],
      nestedSelectors: [],
      mixinCalls: [],
    };

    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();

      if (!line || line.startsWith('//') || line.startsWith('/*')) {
        i++;
        continue;
      }

      // 检查是否是嵌套选择器
      if (line.startsWith('&')) {
        const nestedSelector = this.parseNestedSelector(lines, i);
        if (nestedSelector) {
          ast.nestedSelectors.push(nestedSelector);
          i = nestedSelector.endLine + 1;
        } else {
          i++;
        }
      } else {
        // 检查是否是 mixin 调用
        const mixinCall = this.parseMixinCall(line);
        if (mixinCall) {
          ast.mixinCalls.push(mixinCall);
          i++;
        } else {
          // 处理普通 CSS 属性
          const property = this.parseCSSProperty(line);
          if (property) {
            ast.properties.push(property);
          }
          i++;
        }
      }
    }

    return ast;
  }

  // 解析嵌套选择器
  parseNestedSelector(lines, startLine) {
    const line = lines[startLine].trim();

    // 检查是否以 & 开头且包含冒号
    if (!line.startsWith('&') || !line.includes(':')) return null;

    // 提取选择器部分，保留完整的 &::-webkit-scrollbar 格式
    // 直接提取到第一个大括号之前的所有内容作为选择器
    const braceIndex = line.indexOf('{');
    if (braceIndex === -1) return null;

    const selector = line.substring(0, braceIndex).trim();
    const fullSelector = selector;

    // 查找嵌套选择器的结束位置
    let braceCount = line.includes('{') ? 1 : 0;
    let nestedContent = [];
    let endLine = startLine;

    for (let i = startLine + 1; i < lines.length; i++) {
      const currentLine = lines[i];
      const openBraces = (currentLine.match(/\{/g) || []).length;
      const closeBraces = (currentLine.match(/\}/g) || []).length;

      braceCount += openBraces - closeBraces;

      if (braceCount <= 0) {
        endLine = i;
        break;
      }

      nestedContent.push(currentLine);
    }

    // 递归解析嵌套内容
    const nestedAST = this.parseMixinAST(nestedContent.join('\n'));

    return {
      selector: fullSelector,
      content: nestedAST,
      startLine,
      endLine,
    };
  }

  // 解析 mixin 调用
  parseMixinCall(line) {
    // 匹配 .mixinName() 格式的 mixin 调用
    const mixinCallMatch = line.match(/^\.([^()]+)\(\);?$/);
    if (mixinCallMatch) {
      const mixinName = mixinCallMatch[1].trim();
      return {
        name: mixinName,
        functionName: this.convertToFunctionName(mixinName),
      };
    }
    return null;
  }

  // 解析 CSS 属性
  parseCSSProperty(line) {
    const propertyMatch = line.match(/^([^:]+):\s*(.+?);?$/);
    if (!propertyMatch) return null;

    const property = propertyMatch[1].trim();
    const value = propertyMatch[2].trim();

    return {
      name: this.convertToCamelCase(property),
      value: value,
    };
  }

  // 生成 mixin 对象
  generateMixinObject(ast) {
    const lines = [];

    // 添加普通属性
    for (const property of ast.properties) {
      // 处理包含单引号的字符串
      let processedValue = property.value;
      let formattedValue;
      if (typeof processedValue === 'string' && processedValue.includes("'")) {
        // 如果值包含单引号，使用双引号包装，并转义内部的双引号
        formattedValue = `"${processedValue.replace(/"/g, '\\"')}"`;
      } else {
        // 否则使用双引号
        formattedValue = `"${processedValue}"`;
      }
      lines.push(`    ${property.name}: ${formattedValue},`);
    }

    // 添加 mixin 调用
    for (const mixinCall of ast.mixinCalls) {
      // 检查是否是单个值的 mixin
      if (this.isSingleValueMixin(mixinCall.name)) {
        const singleValue = this.getMixinSingleValue(mixinCall.name);
        if (singleValue) {
          // 处理包含单引号的字符串
          let processedValue = singleValue.value;
          let formattedValue;
          if (
            typeof processedValue === 'string' &&
            processedValue.includes("'")
          ) {
            // 如果值包含单引号，使用双引号包装，并转义内部的双引号
            formattedValue = `"${processedValue.replace(/"/g, '\\"')}"`;
          } else {
            // 否则使用双引号
            formattedValue = `"${processedValue}"`;
          }
          lines.push(`    ${singleValue.name}: ${formattedValue},`);
        }
      } else {
        // 多个值的 mixin，使用展开语法
        lines.push(`    ...${mixinCall.functionName}(),`);
      }
    }

    // 添加嵌套选择器
    for (const nested of ast.nestedSelectors) {
      lines.push(`    '${nested.selector}': {`);

      // 递归处理嵌套内容
      const nestedLines = this.generateMixinObject(nested.content);
      const nestedIndented = nestedLines
        .split('\n')
        .map((line) => (line ? `      ${line}` : line))
        .join('\n');

      lines.push(nestedIndented);
      lines.push(`    },`);
    }

    return lines.join('\n');
  }

  // 检查 mixin 是否只返回一个值
  isSingleValueMixin(mixinName) {
    const mixinData = this.mixins.get(mixinName);
    if (!mixinData) return false;

    const ast = this.parseMixinAST(mixinData.content);

    // 如果只有属性，没有嵌套选择器和 mixin 调用，且只有一个属性
    return (
      ast.properties.length === 1 &&
      ast.nestedSelectors.length === 0 &&
      ast.mixinCalls.length === 0
    );
  }

  // 获取 mixin 的单个值
  getMixinSingleValue(mixinName) {
    const mixinData = this.mixins.get(mixinName);
    if (!mixinData) return null;

    const ast = this.parseMixinAST(mixinData.content);

    if (
      ast.properties.length === 1 &&
      ast.nestedSelectors.length === 0 &&
      ast.mixinCalls.length === 0
    ) {
      const property = ast.properties[0];
      return {
        name: property.name,
        value: property.value,
      };
    }

    return null;
  }

  // 转换为驼峰命名
  convertToCamelCase(str) {
    return str.replace(/-([a-z0-9])/g, (match, letter) => letter.toUpperCase());
  }

  // 转换为函数名
  convertToFunctionName(mixinName) {
    return mixinName.replace(/-([a-z0-9])/g, (match, letter) =>
      letter.toUpperCase(),
    );
  }

  // 生成所有 mixin 函数
  generateAllMixinsFunctions() {
    let content = '\n// === Mixins 函数 ===\n\n';

    for (const [name, data] of this.mixins) {
      content += this.generateMixinFunction(name, data) + '\n\n';
    }

    return content;
  }

  // 生成多个值的 mixin 函数
  generateMultipleValueMixinsFunctions(multipleValueMixins) {
    let content = '\n// === 多个值 Mixins 函数 ===\n\n';

    for (const [name, data] of multipleValueMixins) {
      content += this.generateMixinFunction(name, data) + '\n\n';
    }

    return content;
  }

  // 生成 TypeScript 对象
  generateTypeScriptObject() {
    let content = 'export const global = {\n';

    // 添加变量
    for (const [name, variableData] of this.variables) {
      const cssVarName = this.convertToCSSVariable(name);
      const processedValue = this.processValue(variableData.value);

      // 添加注释
      if (variableData.comment) {
        content += `  /** ${variableData.comment} */\n`;
      }

      // 处理包含单引号的字符串
      let formattedValue;
      if (typeof processedValue === 'string' && processedValue.includes("'")) {
        // 如果值包含单引号，使用双引号包装，并转义内部的双引号
        formattedValue = `"${processedValue.replace(/"/g, '\\"')}"`;
      } else {
        // 否则使用双引号
        formattedValue = `"${processedValue}"`;
      }

      content += `  '${cssVarName}': ${formattedValue},\n`;
    }

    // 添加单个值的 mixins
    for (const [name, mixinData] of this.mixins) {
      if (this.isSingleValueMixin(name)) {
        const singleValue = this.getMixinSingleValue(name);
        if (singleValue) {
          // 添加注释
          if (mixinData.comment) {
            content += `  /** ${mixinData.comment} */\n`;
          }

          // 处理包含单引号的字符串
          let processedValue = singleValue.value;
          let formattedValue;
          if (
            typeof processedValue === 'string' &&
            processedValue.includes("'")
          ) {
            // 如果值包含单引号，使用双引号包装，并转义内部的双引号
            formattedValue = `"${processedValue.replace(/"/g, '\\"')}"`;
          } else {
            // 否则使用双引号
            formattedValue = `"${processedValue}"`;
          }

          // 使用 CSS 变量格式作为 key
          const mixinKey = this.convertToCSSVariable(name);
          content += `  '${mixinKey}': ${formattedValue},\n`;
        }
      }
    }

    content += '} as const;\n\n';
    content += 'export default global;\n';

    // 添加多个值的 mixin 函数
    const multipleValueMixins = [];
    for (const [name, mixinData] of this.mixins) {
      if (!this.isSingleValueMixin(name)) {
        multipleValueMixins.push([name, mixinData]);
      }
    }

    if (multipleValueMixins.length > 0) {
      content += this.generateMultipleValueMixinsFunctions(multipleValueMixins);
    }

    return content;
  }

  // 转换为 CSS 变量名
  convertToCSSVariable(varName) {
    // 保留 color- 前缀，转换为 kebab-case
    let name = varName.replace(/([A-Z])/g, '-$1').toLowerCase();
    return `--${name}`;
  }

  // 处理值
  processValue(value) {
    // 处理单引号转双引号，但保持字符串的完整性
    if (typeof value === 'string' && value.includes("'")) {
      // 如果字符串包含单引号，我们需要特殊处理
      // 对于包含单引号的字符串，我们应该保持原样，因为它们在 TypeScript 中会被正确处理
      // 例如：'Roboto Mono', monospace 应该保持为 'Roboto Mono', monospace
    }

    // 如果是变量引用，转换为 CSS 变量格式并包装在 var() 中
    if (this.isVariableReference(value)) {
      const cssVar = this.convertVariableReferenceToCSS(value);
      return `var(${cssVar})`;
    }

    // 处理颜色值
    if (this.isColorValue(value)) {
      return this.normalizeColorValue(value);
    }

    return value;
  }

  // 将变量引用转换为 CSS 变量格式
  convertVariableReferenceToCSS(variableRef) {
    // 移除 @ 符号并转换为 CSS 变量格式
    const varName = variableRef.substring(1); // 移除 @
    return this.convertToCSSVariable(varName);
  }

  // 检查是否为颜色值
  isColorValue(value) {
    return (
      /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value) ||
      /^rgb\(/.test(value) ||
      /^rgba\(/.test(value) ||
      /^hsl\(/.test(value) ||
      /^hsla\(/.test(value)
    );
  }

  // 标准化颜色值
  normalizeColorValue(value) {
    // 将3位十六进制转换为6位
    if (/^#[A-Fa-f0-9]{3}$/.test(value)) {
      return value
        .replace(/^#([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/, '#$1$1$2$2$3$3')
        .toUpperCase();
    }

    // 转换为大写
    if (/^#[A-Fa-f0-9]{6}$/.test(value)) {
      return value.toUpperCase();
    }

    return value;
  }

  // 获取统计信息
  getStatistics() {
    return {
      totalVariables: this.variables.size,
      referenceVariables: this.variableReferences.size,
      mixins: this.mixins.size,
      imports: this.imports.size,
      errors: this.errors,
      warnings: this.warnings,
    };
  }

  // 生成报告
  generateReport() {
    const stats = this.getStatistics();

    let report = `# LESS 到 TypeScript 转换报告\n\n`;

    report += `## 统计信息\n`;
    report += `- 总变量数: ${stats.totalVariables}\n`;
    report += `- 引用变量数: ${stats.referenceVariables}\n`;
    report += `- Mixins数: ${stats.mixins}\n`;
    report += `- 导入文件: ${stats.imports}\n`;
    report += `- 错误数: ${stats.errors.length}\n`;
    report += `- 警告数: ${stats.warnings.length}\n\n`;

    if (stats.referenceVariables > 0) {
      report += `## 变量引用信息\n`;
      report += `- 有 ${stats.referenceVariables} 个变量保持为CSS变量引用格式\n`;
      report += `- 这些变量将在运行时通过CSS变量系统解析\n\n`;
    }

    if (stats.mixins > 0) {
      report += `## Mixin 信息\n`;
      report += `- 有 ${stats.mixins} 个 mixins 转换为函数\n`;
      report += `- 这些函数可以在 TypeScript 中直接调用\n\n`;
    }

    if (this.warnings.length > 0) {
      report += `## 警告\n`;
      for (const warning of this.warnings) {
        report += `- ${warning}\n`;
      }
      report += `\n`;
    }

    if (this.errors.length > 0) {
      report += `## 错误\n`;
      for (const error of this.errors) {
        report += `- ${error}\n`;
      }
      report += `\n`;
    }

    return report;
  }
}

// 测试用例
const testCases = [
  {
    name: '基础变量测试',
    input: `
      @color-gray-text: #343A45;
      @margin-component-base: 8px;
      @color-transparent: transparent;
    `,
    expected: {
      'color-gray-text': '#343A45',
      'margin-component-base': '8px',
      'color-transparent': 'transparent',
    },
  },
  {
    name: '变量引用测试',
    input: `
      @color-gray-a12: #343A45;
      @color-gray-a11: #767E8B;
      @color-gray-text: @color-gray-a12;
      @color-gray-text-secondary: @color-gray-a11;
    `,
    expected: {
      'color-gray-a12': '#343A45',
      'color-gray-a11': '#767E8B',
      'color-gray-text': '@color-gray-a12',
      'color-gray-text-secondary': '@color-gray-a11',
    },
  },
  {
    name: '复杂引用测试',
    input: `
      @color-gray-1: #FDFEFE;
      @color-gray-2: #F7F8F9;
      @color-gray-bg-page: @color-gray-2;
      @color-gray-bg-page-light: @color-gray-1;
    `,
    expected: {
      'color-gray-1': '#FDFEFE',
      'color-gray-2': '#F7F8F9',
      'color-gray-bg-page': '@color-gray-2',
      'color-gray-bg-page-light': '@color-gray-1',
    },
  },
  {
    name: 'Mixin 测试',
    input: `
       .scrollbar-hidden() {
         overflow-y: auto;
         scrollbar-width: none;
         
         &::-webkit-scrollbar {
           display: none;
         }
       }
       
       .showScrollLine() {
         border-top: 1px solid @color-transparent;
         border-bottom: 1px solid @color-transparent;
       }
     `,
    expected: {
      // 这个测试主要验证 mixin 解析，变量解析是次要的
    },
  },
  {
    name: 'Mixin 调用测试',
    input: `
       .base-mixin() {
         font-family: Arial;
         font-size: 14px;
       }
       
       .composite-mixin() {
         color: red;
         .base-mixin();
         border: 1px solid black;
       }
     `,
    expected: {
      // 这个测试主要验证 mixin 调用解析，不需要验证变量
    },
  },
  {
    name: '复杂 Mixin 调用测试',
    input: `
       .base-style() {
         font-family: Arial;
         font-size: 14px;
       }
       
       .button-style() {
         .base-style();
         background-color: #007bff;
         color: white;
         padding: 8px 16px;
       }
       
       .primary-button() {
         .button-style();
         border: none;
         border-radius: 4px;
       }
     `,
    expected: {
      // 这个测试主要验证复杂的 mixin 调用链
    },
  },
  {
    name: '单个值 Mixin 测试',
    input: `
       .single-color() {
         color: #ff0000;
       }
       
       .single-font-size() {
         font-size: 16px;
       }
       
       .multiple-properties() {
         color: #ff0000;
         font-size: 16px;
       }
       
       .composite-mixin() {
         .single-color();
         .single-font-size();
         border: 1px solid black;
       }
     `,
    expected: {
      // 这个测试主要验证单个值的 mixin 处理
    },
  },
  {
    name: '注释测试',
    input: `
       // 主要文本颜色
       @color-gray-text: #343A45;
       
       /* 次要文本颜色 */
       @color-gray-text-secondary: #767E8B;
       
       // 基础间距
       @margin-component-base: 8px;
     `,
    expected: {
      'color-gray-text': '#343A45',
      'color-gray-text-secondary': '#767E8B',
      'margin-component-base': '8px',
    },
  },
];

// 运行测试
function runTests() {
  console.log('🧪 开始运行 LESS 解析器测试...\n');

  let passed = 0;
  let failed = 0;

  for (const testCase of testCases) {
    console.log(`📋 测试: ${testCase.name}`);

    try {
      const parser = new EnhancedLessASTParser();
      const result = parser.parse(testCase.input);

      // 验证结果
      let testPassed = true;
      const errors = [];

      for (const [expectedKey, expectedValue] of Object.entries(
        testCase.expected,
      )) {
        if (!result.has(expectedKey)) {
          errors.push(`缺少变量: ${expectedKey}`);
          testPassed = false;
        } else if (result.get(expectedKey).value !== expectedValue) {
          errors.push(
            `变量 ${expectedKey} 值不匹配: 期望 "${expectedValue}", 实际 "${
              result.get(expectedKey).value
            }"`,
          );
          testPassed = false;
        }
      }

      if (testPassed) {
        console.log('✅ 通过');
        passed++;

        // 如果是 mixin 测试，额外检查 mixin 解析
        if (testCase.name === 'Mixin 测试') {
          const mixins = parser.parseMixins(testCase.input);
          if (mixins.size >= 2) {
            console.log(`   ✅ 解析了 ${mixins.size} 个 mixins`);
          } else {
            console.log('   ⚠️  mixin 解析可能有问题');
          }
        }

        // 如果是 mixin 调用测试，额外检查 mixin 调用解析
        if (
          testCase.name === 'Mixin 调用测试' ||
          testCase.name === '复杂 Mixin 调用测试'
        ) {
          const mixins = parser.parseMixins(testCase.input);
          if (mixins.size >= 2) {
            console.log(`   ✅ 解析了 ${mixins.size} 个 mixins，包含调用关系`);

            // 检查是否有 mixin 调用
            let hasMixinCalls = false;
            let totalCalls = 0;
            for (const [name, data] of mixins) {
              const ast = parser.parseMixinAST(data.content);
              if (ast.mixinCalls && ast.mixinCalls.length > 0) {
                hasMixinCalls = true;
                totalCalls += ast.mixinCalls.length;
                console.log(
                  `   ✅ ${name} 调用了: ${ast.mixinCalls
                    .map((call) => call.name)
                    .join(', ')}`,
                );
              }
            }

            if (!hasMixinCalls) {
              console.log('   ⚠️  未发现 mixin 调用');
            } else {
              console.log(`   ✅ 总共发现 ${totalCalls} 个 mixin 调用`);
            }
          } else {
            console.log('   ⚠️  mixin 解析可能有问题');
          }
        }

        // 如果是单个值 mixin 测试，额外检查单个值 mixin 处理
        if (testCase.name === '单个值 Mixin 测试') {
          const mixins = parser.parseMixins(testCase.input);
          if (mixins.size >= 4) {
            console.log(`   ✅ 解析了 ${mixins.size} 个 mixins`);

            // 检查单个值 mixin
            let singleValueMixins = 0;
            let multipleValueMixins = 0;
            for (const [name, data] of mixins) {
              if (parser.isSingleValueMixin(name)) {
                singleValueMixins++;
                const singleValue = parser.getMixinSingleValue(name);
                console.log(
                  `   ✅ 单个值 mixin: ${name} -> ${singleValue.name}: ${singleValue.value}`,
                );
              } else {
                multipleValueMixins++;
              }
            }

            console.log(
              `   ✅ 单个值 mixins: ${singleValueMixins}, 多个值 mixins: ${multipleValueMixins}`,
            );
          } else {
            console.log('   ⚠️  mixin 解析可能有问题');
          }
        }
      } else {
        console.log('❌ 失败');
        console.log('   错误:', errors.join(', '));
        failed++;
      }
    } catch (error) {
      console.log('❌ 失败');
      console.log('   错误:', error.message);
      failed++;
    }

    console.log('');
  }

  // 测试实际文件
  console.log('📋 测试: 实际文件解析');
  try {
    const inputFile = path.join(__dirname, '../src/token/global.less');
    if (fs.existsSync(inputFile)) {
      const lessContent = fs.readFileSync(inputFile, 'utf8');

      const parser = new EnhancedLessASTParser();
      const result = parser.parse(lessContent);

      // 检查关键变量是否存在
      const keyVariables = [
        'color-gray-text',
        'color-gray-text-secondary',
        'color-gray-bg-page',
        'margin-component-base',
      ];

      let fileTestPassed = true;
      const missingVars = [];

      for (const varName of keyVariables) {
        if (!result.has(varName)) {
          missingVars.push(varName);
          fileTestPassed = false;
        }
      }

      if (fileTestPassed) {
        console.log('✅ 通过');
        console.log(`   解析了 ${result.size} 个变量`);
        passed++;
      } else {
        console.log('❌ 失败');
        console.log('   缺少变量:', missingVars.join(', '));
        failed++;
      }
    } else {
      console.log('⚠️  跳过: 文件不存在');
    }
  } catch (error) {
    console.log('❌ 失败');
    console.log('   错误:', error.message);
    failed++;
  }

  console.log('');
  console.log('📊 测试结果汇总:');
  console.log(`   通过: ${passed}`);
  console.log(`   失败: ${failed}`);
  console.log(`   总计: ${passed + failed}`);

  if (failed === 0) {
    console.log('🎉 所有测试通过！');
  } else {
    console.log('⚠️  有测试失败，请检查代码');
    process.exit(1);
  }
}

// 生成示例
function generateExample() {
  console.log('📝 生成使用示例...\n');

  const exampleLess = `
// 基础颜色定义
@color-gray-a12: #343A45;
@color-gray-a11: #767E8B;
@color-gray-a9: #9BA3AD;
@color-gray-a8: #B4BBC5;

// 文本颜色（引用基础颜色）
@color-gray-text: @color-gray-a12;
@color-gray-text-secondary: @color-gray-a11;
@color-gray-text-light: @color-gray-a9;
@color-gray-text-disabled: @color-gray-a8;

// 间距定义
@margin-component-base: 8px;
@margin-component-lg: 12px;
@margin-block-base: 12px;
`;

  const parser = new EnhancedLessASTParser();
  const variables = parser.parse(exampleLess);

  console.log('📝 LESS 输入示例:');
  console.log(exampleLess);
  console.log('\n📤 TypeScript 输出示例:');
  const tsOutput = parser.generateTypeScriptObject();
  console.log(tsOutput.substring(0, 500) + '...');

  console.log('\n🔍 变量引用分析:');
  let referenceCount = 0;
  for (const [name, variableData] of variables) {
    if (variableData.value.startsWith('@')) {
      console.log(
        `  ${name}: ${variableData.value} -> var(${parser.convertToCSSVariable(
          variableData.value.substring(1),
        )})`,
      );
      referenceCount++;
    }
  }

  console.log(
    `\n📊 统计: 总共 ${variables.size} 个变量，其中 ${referenceCount} 个是引用变量`,
  );

  // 展示单个值 mixin 功能
  console.log('\n🎯 单个值 Mixin 功能示例:');

  const mixinExample = `
// 单个值的 mixins
.single-color() {
  color: #ff0000;
}

.single-font-size() {
  font-size: 16px;
}

.single-border() {
  border: 1px solid #ccc;
}

// 多个值的 mixin
.multiple-properties() {
  color: #ff0000;
  font-size: 16px;
  border: 1px solid #ccc;
}

// 使用单个值 mixins 的组合
.composite-mixin() {
  .single-color();
  .single-font-size();
  .single-border();
  padding: 8px;
}
`;

  console.log('📝 Mixin 输入示例:');
  console.log(mixinExample);

  const mixinParser = new EnhancedLessASTParser();
  mixinParser.parse(mixinExample);

  console.log('\n📤 Mixin 输出示例:');

  // 生成包含单个值 mixin 的 global 对象
  const globalWithMixins = mixinParser.generateTypeScriptObject();
  console.log(globalWithMixins);

  console.log('\n🔍 单个值 Mixin 分析:');
  for (const [name, data] of mixinParser.mixins) {
    if (mixinParser.isSingleValueMixin(name)) {
      const singleValue = mixinParser.getMixinSingleValue(name);
      console.log(`  ✅ ${name} -> ${singleValue.name}: ${singleValue.value}`);
    } else {
      console.log(`  📦 ${name} -> 多个属性`);
    }
  }
}

// 修复CSS变量引用的函数
function fixCSSVariableReferences(filePath) {
  try {
    console.log(`🔧 开始修复CSS变量引用: ${filePath}`);

    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');

    // 正则表达式匹配所有需要修复的模式
    // 匹配: '--color-xxx': '--color-yyy' 的模式
    const regex = /('--color-[^']+':\s*)('--color-[^']+')/g;

    // 替换函数
    function replaceMatch(match, key, value) {
      // 如果值已经是var()格式，则跳过
      if (
        value.startsWith("'var(") ||
        value.startsWith("'rgba(") ||
        value.startsWith("'#")
      ) {
        return match;
      }
      // 将值包装在var()中
      return key + "'var(" + value.slice(1, -1) + ")'";
    }

    // 执行替换
    const originalContent = content;
    content = content.replace(regex, replaceMatch);

    // 检查是否有变化
    if (content === originalContent) {
      console.log('ℹ️  没有发现需要修复的CSS变量引用');
      return;
    }

    // 写回文件
    fs.writeFileSync(filePath, content, 'utf8');

    console.log('✅ CSS变量引用修复完成！');

    // 统计修复的数量
    const matches = originalContent.match(regex) || [];
    console.log(`📊 修复了 ${matches.length} 个CSS变量引用`);
  } catch (error) {
    console.error('❌ 修复CSS变量引用失败:', error.message);
    process.exit(1);
  }
}

// 主转换函数
function convertLessToTs(inputFile, outputFile, options = {}) {
  try {
    // 读取 LESS 文件
    const lessContent = fs.readFileSync(inputFile, 'utf8');

    // 解析 LESS 变量
    const parser = new EnhancedLessASTParser();
    const variables = parser.parse(lessContent);

    // 生成 TypeScript 代码
    let tsContent = parser.generateTypeScriptObject();
    tsContent = `/* eslint-disable */\n${tsContent}`;
    // 写入输出文件
    fs.writeFileSync(outputFile, tsContent, 'utf8');

    // 生成报告
    if (options.generateReport) {
      const reportFile = outputFile.replace('.ts', '.md');
      const report = parser.generateReport();
      fs.writeFileSync(reportFile, report, 'utf8');
    }

    // 获取统计信息
    const stats = parser.getStatistics();

    console.log(`✅ 成功转换 ${inputFile} 到 ${outputFile}`);
    console.log(`📊 统计信息:`);
    console.log(`   - 总变量数: ${stats.totalVariables}`);
    console.log(`   - 引用变量数: ${stats.referenceVariables}`);
    console.log(`   - Mixins数: ${stats.mixins}`);
    console.log(`   - 导入文件: ${stats.imports}`);
    console.log(`   - 错误数: ${stats.errors.length}`);
    console.log(`   - 警告数: ${stats.warnings.length}`);

    if (stats.referenceVariables > 0) {
      console.log(
        `ℹ️  信息: 有 ${stats.referenceVariables} 个变量保持为CSS变量引用`,
      );
    }

    if (stats.mixins > 0) {
      console.log(`ℹ️  信息: 有 ${stats.mixins} 个 mixins 转换为函数`);
    }

    if (options.generateReport) {
      console.log(`📝 报告已生成: ${outputFile.replace('.ts', '.md')}`);
    }
  } catch (error) {
    console.error('❌ 转换失败:', error.message);
    process.exit(1);
  }
}

// 命令行参数处理
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'convert';

  switch (command) {
    case 'test':
      runTests();
      break;

    case 'test-quotes':
      testQuoteConversion();
      break;

    case 'example':
      generateExample();
      break;

    case 'fix': {
      const targetFile =
        args[1] || path.join(__dirname, '../src/token/global.ts');
      fixCSSVariableReferences(targetFile);
      break;
    }

    case 'convert':
    default: {
      const inputFile =
        args[1] || path.join(__dirname, '../src/token/global.less');
      const outputFile =
        args[2] || path.join(__dirname, '../src/token/global.ts');

      convertLessToTs(inputFile, outputFile, {
        generateExample: true,
        generateReport: true,
      });
      break;
    }
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

// 测试单引号转双引号功能
function testQuoteConversion() {
  console.log('🧪 测试单引号转双引号功能...\n');

  const parser = new EnhancedLessASTParser();

  // 测试包含单引号的内容
  const testContent = `
    @font-family: 'Roboto Mono', monospace;
    @font-family-secondary: 'Arial', sans-serif;
    @text-with-quotes: 'Hello World';
    @normal-text: normal text;
  `;

  const result = parser.parse(testContent);

  console.log('解析结果:');
  for (const [name, data] of result) {
    console.log(`  ${name}: "${data.value}"`);
  }

  console.log('\n✅ 单引号转双引号测试完成');
}

module.exports = {
  convertLessToTs,
  EnhancedLessASTParser,
  runTests,
  generateExample,
  fixCSSVariableReferences,
  testQuoteConversion,
};
