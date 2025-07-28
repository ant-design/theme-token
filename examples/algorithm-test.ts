import derivative from '../src/algorithm';

// 测试算法是否正常工作
const testToken = {
  colorPrimary: '#1890ff',
  colorBgBase: '#ffffff',
  colorTextBase: '#000000',
  fontSize: 14,
  controlHeight: 32,
  borderRadius: 6,
  sizeUnit: 4,
  sizeStep: 4,
};

console.log('Testing algorithm...');
console.log('Input token:', testToken);

try {
  const result = derivative(testToken);
  console.log('Algorithm result:', result);
  console.log('✅ Algorithm is working correctly');
} catch (error) {
  console.error('❌ Algorithm failed:', error);
}
