// 导入所有测试文件
import './createStyleRegister.test';
import './cssVariables.test';
import './example.test';
import './types.test';

// 这个文件用于确保所有测试都被执行
describe('测试套件', () => {
  it('应该加载所有测试文件', () => {
    expect(true).toBe(true);
  });
});
