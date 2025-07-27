const { EnhancedLessASTParser, convertLessToTs } = require('../scripts/less-converter.js');

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
      'color-transparent': 'transparent'
    }
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
      'color-gray-text-secondary': '@color-gray-a11'
    }
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
      'color-gray-bg-page-light': '@color-gray-1'
    }
  },
  {
    name: '颜色值标准化测试',
    input: `
      @color-primary: #f0f;
      @color-secondary: #123456;
      @color-tertiary: #abc;
    `,
    expected: {
      'color-primary': '#f0f',
      'color-secondary': '#123456',
      'color-tertiary': '#abc'
    }
  },
  {
    name: 'Mixin 解析测试',
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
      // 主要测试 mixin 解析功能
    }
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
      'margin-component-base': '8px'
    }
  }
];

describe('LESS 转换器测试', () => {
  describe('变量解析测试', () => {
    testCases.forEach(testCase => {
      it(`应该正确解析 ${testCase.name}`, () => {
        const parser = new EnhancedLessASTParser();
        const result = parser.parse(testCase.input);
        
        // 验证结果
        for (const [expectedKey, expectedValue] of Object.entries(testCase.expected)) {
          expect(result.has(expectedKey)).toBe(true);
          expect(result.get(expectedKey).value).toBe(expectedValue);
        }
      });
    });
  });

  describe('CSS变量转换测试', () => {
    it('应该正确转换变量为CSS变量格式', () => {
      const parser = new EnhancedLessASTParser();
      const testInput = `
        @color-gray-text: #343A45;
        @margin-component-base: 8px;
      `;
      parser.parse(testInput);
      
      const tsOutput = parser.generateTypeScriptObject();
      expect(tsOutput).toContain('--gray-text');
      expect(tsOutput).toContain('--margin-component-base');
    });
  });

  describe('颜色值标准化测试', () => {
    it('应该正确标准化3位十六进制颜色值', () => {
      const parser = new EnhancedLessASTParser();
      const normalized = parser.normalizeColorValue('#abc');
      expect(normalized).toBe('#AABBCC');
    });

    it('应该保持6位十六进制颜色值不变', () => {
      const parser = new EnhancedLessASTParser();
      const normalized = parser.normalizeColorValue('#123456');
      expect(normalized).toBe('#123456');
    });

    it('应该保持非十六进制颜色值不变', () => {
      const parser = new EnhancedLessASTParser();
      const normalized = parser.normalizeColorValue('transparent');
      expect(normalized).toBe('transparent');
    });
  });

  describe('Mixin 解析测试', () => {
    it('应该正确解析 mixin 定义', () => {
      const parser = new EnhancedLessASTParser();
      const testMixin = `
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
      `;
      
      const mixins = parser.parseMixins(testMixin);
      expect(mixins.size).toBeGreaterThanOrEqual(2);
      expect(mixins.has('scrollbar-hidden')).toBe(true);
      expect(mixins.has('showScrollLine')).toBe(true);
    });
  });

  describe('Mixin 函数生成测试', () => {
    it('应该正确生成 mixin 函数', () => {
      const parser = new EnhancedLessASTParser();
      const testMixin = `
        .testMixin() {
          background-color: #f0f0f0;
          border-radius: 4px;
          padding: 8px;
        }
      `;
      
      const mixins = parser.parseMixins(testMixin);
      expect(mixins.size).toBeGreaterThan(0);
      
      // 设置 mixins 到 parser 实例
      parser.mixins = mixins;
      const mixinFunctions = parser.generateAllMixinsFunctions();
      expect(mixinFunctions).toContain('export const testMixin');
    });
  });

  describe('注释保留测试', () => {
    it('应该正确保留单行注释', () => {
      const parser = new EnhancedLessASTParser();
      const testInput = `
        // 主要文本颜色
        @color-gray-text: #343A45;
      `;
      
      parser.parse(testInput);
      const tsOutput = parser.generateTypeScriptObject();
      expect(tsOutput).toContain('/** 主要文本颜色 */');
    });

    it('应该正确保留多行注释', () => {
      const parser = new EnhancedLessASTParser();
      const testInput = `
        /* 次要文本颜色 */
        @color-gray-text-secondary: #767E8B;
      `;
      
      parser.parse(testInput);
      const tsOutput = parser.generateTypeScriptObject();
      expect(tsOutput).toContain('/** 次要文本颜色 */');
    });

    it('应该正确保留混合注释', () => {
      const parser = new EnhancedLessASTParser();
      const testInput = `
        // 主要文本颜色
        @color-gray-text: #343A45;
        
        /* 次要文本颜色 */
        @color-gray-text-secondary: #767E8B;
        
        // 基础间距
        @margin-component-base: 8px;
      `;
      
      parser.parse(testInput);
      const tsOutput = parser.generateTypeScriptObject();
      
      expect(tsOutput).toContain('/** 主要文本颜色 */');
      expect(tsOutput).toContain('/** 次要文本颜色 */');
      expect(tsOutput).toContain('/** 基础间距 */');
    });
  });

  describe('完整转换流程测试', () => {
    it('应该完成从LESS到TypeScript的完整转换', () => {
      const testInput = `
        // 主要文本颜色
        @color-gray-text: #343A45;
        
        /* 次要文本颜色 */
        @color-gray-text-secondary: #767E8B;
        
        .scrollbar-hidden() {
          overflow-y: auto;
          scrollbar-width: none;
          
          &::-webkit-scrollbar {
            display: none;
          }
        }
      `;
      
      const parser = new EnhancedLessASTParser();
      parser.parse(testInput);
      const result = parser.generateTypeScriptObject();
      
      // 检查生成的TypeScript代码
      expect(result).toContain('export const global');
      expect(result).toContain('--gray-text');
      expect(result).toContain('--gray-text-secondary');
      expect(result).toContain('/** 主要文本颜色 */');
      expect(result).toContain('/** 次要文本颜色 */');
      expect(result).toContain('export const scrollbarHidden');
    });
  });
});

// 保持向后兼容性
function runTests() {
  console.log('🧪 开始运行 LESS 转换器测试...\n');
  
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
      
      for (const [expectedKey, expectedValue] of Object.entries(testCase.expected)) {
        if (!result.has(expectedKey)) {
          errors.push(`缺少变量: ${expectedKey}`);
          testPassed = false;
        } else if (result.get(expectedKey).value !== expectedValue) {
          errors.push(`变量 ${expectedKey} 值不匹配: 期望 "${expectedValue}", 实际 "${result.get(expectedKey).value}"`);
          testPassed = false;
        }
      }
      
      if (testPassed) {
        console.log('✅ 通过');
        passed++;
        
        // 如果是 mixin 测试，额外检查 mixin 解析
        if (testCase.name === 'Mixin 解析测试') {
          const mixins = parser.parseMixins(testCase.input);
          if (mixins.size >= 2) {
            console.log(`   ✅ 解析了 ${mixins.size} 个 mixins`);
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
  
  // 测试CSS变量转换
  console.log('📋 测试: CSS变量转换');
  try {
    const parser = new EnhancedLessASTParser();
    const testInput = `
      @color-gray-text: #343A45;
      @margin-component-base: 8px;
    `;
    parser.parse(testInput);
    
    const tsOutput = parser.generateTypeScriptObject();
    const hasCSSVars = tsOutput.includes('--gray-text') && tsOutput.includes('--margin-component-base');
    
    if (hasCSSVars) {
      console.log('✅ 通过');
      passed++;
    } else {
      console.log('❌ 失败');
      console.log('   错误: CSS变量转换不正确');
      failed++;
    }
    
  } catch (error) {
    console.log('❌ 失败');
    console.log('   错误:', error.message);
    failed++;
  }
  
  // 测试颜色值标准化
  console.log('📋 测试: 颜色值标准化');
  try {
    const parser = new EnhancedLessASTParser();
    
    // 测试3位十六进制转换
    const normalized = parser.normalizeColorValue('#abc');
    if (normalized === '#AABBCC') {
      console.log('✅ 通过');
      passed++;
    } else {
      console.log('❌ 失败');
      console.log(`   错误: 期望 "#AABBCC", 实际 "${normalized}"`);
      failed++;
    }
    
  } catch (error) {
    console.log('❌ 失败');
    console.log('   错误:', error.message);
    failed++;
  }
  
  // 测试 mixin 函数生成
  console.log('📋 测试: Mixin 函数生成');
  try {
    const parser = new EnhancedLessASTParser();
    const testMixin = `
      .testMixin() {
        background-color: #f0f0f0;
        border-radius: 4px;
        padding: 8px;
      }
    `;
    
    const mixins = parser.parseMixins(testMixin);
    
    if (mixins.size > 0) {
      // 设置 mixins 到 parser 实例
      parser.mixins = mixins;
      const mixinFunctions = parser.generateAllMixinsFunctions();
      if (mixinFunctions.includes('export const testMixin')) {
        console.log('✅ 通过');
        passed++;
      } else {
        console.log('❌ 失败');
        console.log('   错误: mixin 函数生成不正确');
        console.log('   生成的函数:', mixinFunctions.substring(0, 200));
        failed++;
      }
    } else {
      console.log('❌ 失败');
      console.log('   错误: 无法解析 mixin');
      failed++;
    }
    
  } catch (error) {
    console.log('❌ 失败');
    console.log('   错误:', error.message);
    failed++;
  }
  
  // 测试注释保留
  console.log('📋 测试: 注释保留');
  try {
    const parser = new EnhancedLessASTParser();
    const testInput = `
      // 主要文本颜色
      @color-gray-text: #343A45;
      
      /* 次要文本颜色 */
      @color-gray-text-secondary: #767E8B;
    `;
    
    parser.parse(testInput);
    const tsOutput = parser.generateTypeScriptObject();
    
    // 检查是否包含注释
    const hasComments = tsOutput.includes('/** 主要文本颜色 */') && 
                       tsOutput.includes('/** 次要文本颜色 */');
    
    if (hasComments) {
      console.log('✅ 通过');
      passed++;
    } else {
      console.log('❌ 失败');
      console.log('   错误: 注释没有正确保留');
      console.log('   生成的代码片段:', tsOutput.substring(0, 300));
      failed++;
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

// 如果直接运行此脚本
if (require.main === module) {
  runTests();
}

module.exports = { runTests }; 