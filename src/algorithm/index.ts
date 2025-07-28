import { generateColorPalettes, generateNeutralColorPalettes } from './colors';
import type { MapToken, PresetColorType, SeedToken } from './types';

// 预设颜色映射
const presetPrimaryColors: Record<string, string> = {
  blue: '#1890ff',
  purple: '#722ed1',
  cyan: '#13c2c2',
  green: '#52c41a',
  magenta: '#eb2f96',
  pink: '#eb2f96',
  red: '#f5222d',
  orange: '#fa8c16',
  yellow: '#fadb14',
  volcano: '#fa541c',
  geekblue: '#2f54eb',
  lime: '#a0d911',
  gold: '#faad14',
};

// 预设调色板
const presetPalettes: Record<string, string[]> = {
  blue: [
    '#e6f7ff',
    '#bae7ff',
    '#91d5ff',
    '#69c0ff',
    '#40a9ff',
    '#1890ff',
    '#096dd9',
    '#0050b3',
    '#003a8c',
    '#002766',
  ],
  purple: [
    '#f9f0ff',
    '#efdbff',
    '#d3adf7',
    '#b37feb',
    '#9254de',
    '#722ed1',
    '#531dab',
    '#391085',
    '#22075e',
    '#120338',
  ],
  cyan: [
    '#e6fffb',
    '#b5f5ec',
    '#87e8de',
    '#5cdbd3',
    '#36cfc9',
    '#13c2c2',
    '#08979c',
    '#006d75',
    '#00474f',
    '#002329',
  ],
  green: [
    '#f6ffed',
    '#d9f7be',
    '#b7eb8f',
    '#95de64',
    '#73d13d',
    '#52c41a',
    '#389e0d',
    '#237804',
    '#135200',
    '#092b00',
  ],
  magenta: [
    '#fff0f6',
    '#ffd6e7',
    '#ffadd2',
    '#ff85c0',
    '#f759ab',
    '#eb2f96',
    '#c41d7f',
    '#9c1068',
    '#780650',
    '#520339',
  ],
  pink: [
    '#fff0f6',
    '#ffd6e7',
    '#ffadd2',
    '#ff85c0',
    '#f759ab',
    '#eb2f96',
    '#c41d7f',
    '#9c1068',
    '#780650',
    '#520339',
  ],
  red: [
    '#fff1f0',
    '#ffccc7',
    '#ffa39e',
    '#ff7875',
    '#ff4d4f',
    '#f5222d',
    '#cf1322',
    '#a8071a',
    '#820014',
    '#5c0011',
  ],
  orange: [
    '#fff7e6',
    '#ffe7ba',
    '#ffd591',
    '#ffc53d',
    '#ffa940',
    '#fa8c16',
    '#d46b08',
    '#ad4e00',
    '#873800',
    '#612500',
  ],
  yellow: [
    '#feffe6',
    '#ffffb8',
    '#fffb8f',
    '#fff566',
    '#ffec3d',
    '#fadb14',
    '#d4b106',
    '#ad8b00',
    '#876800',
    '#614700',
  ],
  volcano: [
    '#fff2e8',
    '#ffd8bf',
    '#ffbb96',
    '#ff9c6e',
    '#ff7a45',
    '#fa541c',
    '#d4380d',
    '#ad2102',
    '#871400',
    '#610b00',
  ],
  geekblue: [
    '#f0f5ff',
    '#d6e4ff',
    '#adc6ff',
    '#85a5ff',
    '#597ef7',
    '#2f54eb',
    '#1d39c4',
    '#10239e',
    '#061178',
    '#030852',
  ],
  lime: [
    '#fcffe6',
    '#f4ffb8',
    '#eaff8f',
    '#d3f261',
    '#bae637',
    '#a0d911',
    '#7cb305',
    '#5b8c00',
    '#3f6600',
    '#254000',
  ],
  gold: [
    '#fffbe6',
    '#fff1b8',
    '#ffe58f',
    '#ffd666',
    '#ffc53d',
    '#faad14',
    '#d48806',
    '#ad6800',
    '#874d00',
    '#613400',
  ],
};

// 默认预设颜色
const defaultPresetColors: Record<string, string> = {
  blue: '#1890ff',
  purple: '#722ed1',
  cyan: '#13c2c2',
  green: '#52c41a',
  magenta: '#eb2f96',
  pink: '#eb2f96',
  red: '#f5222d',
  orange: '#fa8c16',
  yellow: '#fadb14',
  volcano: '#fa541c',
  geekblue: '#2f54eb',
  lime: '#a0d911',
  gold: '#faad14',
};

/**
 * 生成颜色映射令牌
 */
function genColorMapToken(
  token: SeedToken,
  options: {
    generateColorPalettes: (color: string) => Record<string, string>;
    generateNeutralColorPalettes: (
      bgColor: string,
      textColor: string,
    ) => Record<string, string>;
  },
) {
  const { generateColorPalettes, generateNeutralColorPalettes } = options;

  // 生成主色调色板
  const primaryColor = token.colorPrimary || '#1890ff';
  const primaryPalettes = generateColorPalettes(primaryColor);

  // 生成中性色调色板
  const neutralPalettes = generateNeutralColorPalettes(
    token.colorBgBase || '#ffffff',
    token.colorTextBase || '#000000',
  );

  return {
    ...primaryPalettes,
    ...neutralPalettes,
  };
}

/**
 * 生成字体映射令牌
 */
function genFontMapToken(fontSize: any) {
  return {
    fontSize: fontSize || 14,
    fontSizeSM: 12,
    fontSizeLG: 16,
    fontSizeXL: 20,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
  };
}

/**
 * 生成尺寸映射令牌
 */
function genSizeMapToken() {
  return {
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,
    borderRadius: 6,
    borderRadiusSM: 4,
    borderRadiusLG: 8,
    borderRadiusXL: 12,
    borderRadiusOuter: 4,
  };
}

/**
 * 生成控件高度映射令牌
 */
function genControlHeight() {
  return {
    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,
  };
}

/**
 * 生成通用映射令牌
 */
function genCommonMapToken() {
  return {
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    motionEaseInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    motionEaseOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };
}

export default function derivative(token: SeedToken): MapToken {
  // pink 是 magenta 的已弃用名称，保持向后兼容性
  presetPrimaryColors.pink = presetPrimaryColors.magenta;
  presetPalettes.pink = presetPalettes.magenta;

  const colorPalettes = Object.keys(defaultPresetColors)
    .map((colorKey) => {
      const colors =
        token[colorKey as keyof PresetColorType] ===
        presetPrimaryColors[colorKey]
          ? presetPalettes[colorKey]
          : generateColorPalettes(
              token[colorKey as keyof PresetColorType] ||
                presetPrimaryColors[colorKey],
            );
      return Array.from({ length: 10 }, () => 1).reduce<Record<string, string>>(
        (prev, _, i) => {
          const colorArray = Array.isArray(colors)
            ? colors
            : Object.values(colors);
          const colorValue =
            colorArray[i] ||
            (typeof colors === 'string'
              ? colors
              : Object.values(colors)[0] || '#000000');
          prev[`${colorKey}-${i + 1}`] = colorValue;
          prev[`${colorKey}${i + 1}`] = colorValue;
          return prev;
        },
        {},
      );
    })
    .reduce<MapToken>((prev, cur) => {
      return { ...prev, ...cur };
    }, {} as MapToken);

  return {
    ...token,
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes,
    }),
    // Font
    ...genFontMapToken(token.fontSize),
    // Size
    ...genSizeMapToken(),
    // Height
    ...genControlHeight(),
    // Others
    ...genCommonMapToken(),
  };
}
