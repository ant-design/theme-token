import { global } from '../src/token/global';

describe('Global Methods', () => {
  describe('导出检查', () => {
    it('应该导出 global 对象', () => {
      expect(global).toBeDefined();
      expect(typeof global).toBe('object');
    });

    it('应该包含 CSS 变量', () => {
      const keys = Object.keys(global);
      expect(keys.length).toBeGreaterThan(0);

      // 检查所有键都是 CSS 变量格式
      keys.forEach((key) => {
        expect(key).toMatch(/^--/);
      });
    });
  });

  describe('模块导出', () => {
    it('应该正确导出 global 模块', () => {
      expect(global).toBeDefined();
      expect(typeof global).toBe('object');

      const globalKeys = Object.keys(global);
      expect(globalKeys.length).toBeGreaterThan(0);
    });
  });
});
