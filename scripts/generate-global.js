#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 根据 tokenAndCNName.json 和 tokenAndValue.json 生成 global.ts 中的 global 对象
 */

function generateGlobalTS() {
  try {
    // 读取 JSON 文件
    const tokenAndCNNamePath = path.join(__dirname, '../src/token/tokenAndCNName.json');
    const tokenAndValuePath = path.join(__dirname, '../src/token/tokenAndValue.json');
    const globalTSPath = path.join(__dirname, '../src/token/global.ts');

    console.log('📖 正在读取配置文件...');
    
    const tokenAndCNName = JSON.parse(fs.readFileSync(tokenAndCNNamePath, 'utf8'));
    const tokenAndValue = JSON.parse(fs.readFileSync(tokenAndValuePath, 'utf8'));

    console.log(`✅ 读取到 ${Object.keys(tokenAndCNName).length} 个中文名称映射`);
    console.log(`✅ 读取到 ${Object.keys(tokenAndValue).length} 个值映射`);

    // 生成完整的 TypeScript 代码
    const tsContent = generateTSContent(tokenAndCNName, tokenAndValue);

    // 写入文件
    fs.writeFileSync(globalTSPath, tsContent, 'utf8');
    
    console.log(`🎉 成功生成 global.ts`);
    console.log(`📝 文件路径: ${globalTSPath}`);

  } catch (error) {
    console.error('❌ 生成失败:', error.message);
    process.exit(1);
  }
}

/**
 * 格式化值，正确处理包含引号的字符串
 */
function formatValue(value) {
  if (typeof value !== 'string') {
    return `'${value}'`;
  }
  
  // 转义字符串中的单引号
  const escapedValue = value.replace(/'/g, "\\'");
  return `'${escapedValue}'`;
}

/**
 * 生成 TypeScript 文件内容
 */
function generateTSContent(tokenAndCNName, tokenAndValue) {
  let content = '/* eslint-disable */\n';
  content += 'export const global = {\n';

  // 处理 --name 特殊字段
  content += "  '--name': 'text-code-s',\n";

  // 首先处理一些预定义的 margin 字段（这些在原始文件中手动定义）
  const predefinedMargins = [
   
  ];

  predefinedMargins.forEach(margin => {
    content += `  /** ${margin.comment} */\n`;
    content += `  '${margin.key}': ${formatValue(margin.value)},\n`;
  });

  // 按类别分组处理 tokenAndCNName 中的字段
  const categories = groupTokensByCategory(tokenAndCNName);
  
  Object.keys(categories).forEach(category => {
    if (categories[category].length === 0) return;
    
    content += `\n  // ${getCategoryComment(category)}\n`;
    
    categories[category].forEach(tokenKey => {
      const cnName = tokenAndCNName[tokenKey];
      const tokenValue = tokenAndValue[tokenKey];
      
      if (cnName && tokenValue) {
        content += `  /** ${cnName} */\n`;
        content += `  '${tokenKey}': ${formatValue(tokenValue)},\n`;
      } else if (tokenValue) {
        // 如果没有中文名但有值，也添加进去
        content += `  '${tokenKey}': ${formatValue(tokenValue)},\n`;
      }
    });
  });

  // 处理在 tokenAndValue 中但不在 tokenAndCNName 中的字段
  const unmappedTokens = Object.keys(tokenAndValue).filter(key => !tokenAndCNName[key]);
  if (unmappedTokens.length > 0) {
    content += '\n  // 其他未分类的 token\n';
    unmappedTokens.forEach(tokenKey => {
      const tokenValue = tokenAndValue[tokenKey];
      content += `  '${tokenKey}': ${formatValue(tokenValue)},\n`;
    });
  }

  content += '};\n\n';
  content += 'export default global;\n';

  return content;
}

/**
 * 按类别分组 token
 */
function groupTokensByCategory(tokenAndCNName) {
  const categories = {
    color: [],
    font: [],
    radius: [],
    height: [],
    width: [],
    size: [],
    shadow: [],
    border: [],
    opacity: [],
    other: []
  };

  Object.keys(tokenAndCNName).forEach(key => {
    if (key.includes('color')) {
      categories.color.push(key);
    } else if (key.includes('font') || key.includes('letter-spacing')) {
      categories.font.push(key);
    } else if (key.includes('radius')) {
      categories.radius.push(key);
    } else if (key.includes('height')) {
      categories.height.push(key);
    } else if (key.includes('width')) {
      categories.width.push(key);
    } else if (key.includes('size')) {
      categories.size.push(key);
    } else if (key.includes('shadow')) {
      categories.shadow.push(key);
    } else if (key.includes('border')) {
      categories.border.push(key);
    } else if (key.includes('opacity')) {
      categories.opacity.push(key);
    } else {
      categories.other.push(key);
    }
  });

  // 对每个类别内的键进行排序
  Object.keys(categories).forEach(category => {
    categories[category].sort();
  });

  return categories;
}

/**
 * 获取类别注释
 */
function getCategoryComment(category) {
  const comments = {
    color: '颜色相关',
    font: '字体相关',
    radius: '圆角相关',
    height: '高度相关',
    width: '宽度相关',
    size: '尺寸相关',
    shadow: '阴影相关',
    border: '边框相关',
    opacity: '透明度相关',
    other: '其他'
  };
  
  return comments[category] || category;
}

// 如果直接运行此脚本
if (require.main === module) {
  generateGlobalTS();
}

module.exports = {
  generateGlobalTS,
  generateTSContent
};
