import { getAlphaColor, getSolidColor } from './colorAlgorithm';
import type { GenerateColorMap, GenerateNeutralColorMap } from './types';

/**
 * 生成颜色调色板
 * 使用 CSS 变量和基础颜色值
 */
export const generateColorPalettes: GenerateColorMap = (baseColor: string) => {
  // 如果是 CSS 变量，直接使用
  if (baseColor.startsWith('var(--')) {
    return {
      1: baseColor,
      2: baseColor,
      3: baseColor,
      4: baseColor,
      5: baseColor,
      6: baseColor,
      7: baseColor,
      8: baseColor,
      9: baseColor,
      10: baseColor,
    };
  }

  // 如果是颜色值，生成调色板
  if (baseColor.startsWith('#')) {
    const colors = [];
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    // 生成 10 个色阶
    for (let i = 0; i < 10; i++) {
      const factor = 1 + (i - 4) * 0.1; // 以第5个色阶为基准
      const newR = Math.min(255, Math.max(0, Math.round(r * factor)));
      const newG = Math.min(255, Math.max(0, Math.round(g * factor)));
      const newB = Math.min(255, Math.max(0, Math.round(b * factor)));

      colors.push(
        `#${newR.toString(16).padStart(2, '0')}${newG
          .toString(16)
          .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`,
      );
    }

    return {
      1: colors[0],
      2: colors[1],
      3: colors[2],
      4: colors[3],
      5: colors[4],
      6: colors[5],
      7: colors[6],
      8: colors[4],
      9: colors[5],
      10: colors[6],
    };
  }

  // 其他情况直接返回
  return {
    1: baseColor,
    2: baseColor,
    3: baseColor,
    4: baseColor,
    5: baseColor,
    6: baseColor,
    7: baseColor,
    8: baseColor,
    9: baseColor,
    10: baseColor,
  };
};

/**
 * 生成中性色调色板
 * 使用 CSS 变量和基础颜色值
 */
export const generateNeutralColorPalettes: GenerateNeutralColorMap = (
  bgBaseColor: string,
  textBaseColor: string,
) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#000';

  return {
    colorBgBase,
    colorTextBase,

    colorText: getAlphaColor(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),

    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),

    colorBgSolid: getAlphaColor(colorTextBase, 1),
    colorBgSolidHover: getAlphaColor(colorTextBase, 0.75),
    colorBgSolidActive: getAlphaColor(colorTextBase, 0.95),

    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBgBlur: 'transparent',

    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6),
  };
};
