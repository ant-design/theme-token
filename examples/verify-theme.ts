import { theme } from '../src';

// 验证 theme 对象的基本功能
console.log('Theme 对象验证:');
console.log('================');

// 检查基本属性
console.log('marginNone:', theme.marginNone);
console.log('marginComponentXs:', theme.marginComponentXs);
console.log('colorGrayText:', theme.colorGrayText);
console.log('colorBlueText:', theme.colorBlueText);

// 检查属性数量
const propertyCount = Object.keys(theme).length;
console.log(`\nTheme 对象包含 ${propertyCount} 个属性`);

// 检查一些关键属性是否存在
const keyProperties = [
  'marginNone',
  'marginComponentXs',
  'marginComponentSm',
  'marginComponentBase',
  'marginComponentLg',
  'colorGrayText',
  'colorBlueText',
  'colorBlueControlFillPrimary',
];

console.log('\n关键属性检查:');
keyProperties.forEach((prop) => {
  const exists = prop in theme;
  const value = theme[prop as keyof typeof theme];
  console.log(`${prop}: ${exists ? '✅' : '❌'} ${value}`);
});

// 验证所有值都是 CSS 变量格式
console.log('\nCSS 变量格式验证:');
const cssVarPattern = /^var\(--[a-z0-9-]+\)$/;
const invalidValues = Object.entries(theme).filter(([, value]) => {
  return typeof value !== 'string' || !cssVarPattern.test(value);
});

if (invalidValues.length === 0) {
  console.log('✅ 所有属性值都是正确的 CSS 变量格式');
} else {
  console.log('❌ 发现无效的 CSS 变量格式:');
  invalidValues.forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });
}

console.log('\n验证完成！');
