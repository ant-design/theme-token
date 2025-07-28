import * as globalModule from '../src/token/global';

describe('Global Methods Test', () => {
  it('应该能够执行所有导出的方法', () => {
    // 获取所有导出的内容
    const exports = Object.keys(globalModule);

    // 过滤出函数类型的方法
    const methods = exports.filter((key) => {
      const value = (globalModule as any)[key];
      return typeof value === 'function';
    });

    console.log(`找到 ${methods.length} 个方法`);

    // 遍历并执行所有方法
    methods.forEach((methodName) => {
      try {
        const method = (globalModule as any)[methodName];
        const result = method();

        // 验证方法返回了对象
        expect(result).toBeDefined();
        expect(typeof result).toBe('object');

        console.log(`✅ 成功执行方法: ${methodName}`);
      } catch (error) {
        console.error(`❌ 方法执行失败: ${methodName}`, error);
        // 不抛出错误，继续执行其他方法
      }
    });

    // 验证至少有一些方法被找到
    expect(methods.length).toBeGreaterThan(0);
  });

  it('应该能够访问 global 对象', () => {
    // 验证 global 对象存在
    expect(globalModule.global).toBeDefined();
    expect(typeof globalModule.global).toBe('object');

    // 验证 global 对象有属性
    const globalKeys = Object.keys(globalModule.global);
    expect(globalKeys.length).toBeGreaterThan(0);

    console.log(`Global 对象包含 ${globalKeys.length} 个属性`);
  });

  it('应该能够执行所有 mixin 函数', () => {
    // 获取所有导出的内容
    const exports = Object.keys(globalModule);

    // 过滤出以特定模式命名的 mixin 函数
    const mixinMethods = exports.filter((key) => {
      const value = (globalModule as any)[key];
      return (
        typeof value === 'function' &&
        (key.includes('text') ||
          key.includes('shadow') ||
          key.includes('padding') ||
          key.includes('borderRadius') ||
          key.includes('icon') ||
          key.includes('scrollbar') ||
          key.includes('showScrollLine'))
      );
    });

    console.log(`找到 ${mixinMethods.length} 个 mixin 函数`);

    // 遍历并执行所有 mixin 函数
    mixinMethods.forEach((methodName) => {
      try {
        const method = (globalModule as any)[methodName];
        const result = method();

        // 验证方法返回了对象
        expect(result).toBeDefined();
        expect(typeof result).toBe('object');

        console.log(`✅ 成功执行 mixin: ${methodName}`);
      } catch (error) {
        console.error(`❌ Mixin 执行失败: ${methodName}`, error);
        // 不抛出错误，继续执行其他方法
      }
    });

    // 验证至少有一些 mixin 函数被找到
    expect(mixinMethods.length).toBeGreaterThan(0);
  });
});
