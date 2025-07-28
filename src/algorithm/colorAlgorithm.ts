/**
 * 使用 CSS 变量计算带透明度的颜色
 * @param baseColor 基础颜色（CSS 变量名或颜色值）
 * @param alpha 透明度 (0-1)
 * @returns 带透明度的颜色值
 */
export const getAlphaColor = (baseColor: string, alpha: number): string => {
  // 如果是 CSS 变量，直接使用
  if (baseColor.startsWith('var(--')) {
    return baseColor;
  }

  // 如果是颜色值，转换为 rgba
  if (baseColor.startsWith('#')) {
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // 如果是 rgb 格式，转换为 rgba
  if (baseColor.startsWith('rgb(')) {
    return baseColor.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
  }

  // 其他情况直接返回
  return baseColor;
};

/**
 * 使用 CSS 变量计算实心颜色
 * @param baseColor 基础颜色（CSS 变量名或颜色值）
 * @param brightness 亮度调整 (-1 到 1)
 * @returns 调整后的颜色值
 */
export const getSolidColor = (
  baseColor: string,
  brightness: number,
): string => {
  // 如果是 CSS 变量，直接使用
  if (baseColor.startsWith('var(--')) {
    return baseColor;
  }

  // 如果是颜色值，进行亮度调整
  if (baseColor.startsWith('#')) {
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    const factor = 1 + brightness;
    const newR = Math.min(255, Math.max(0, Math.round(r * factor)));
    const newG = Math.min(255, Math.max(0, Math.round(g * factor)));
    const newB = Math.min(255, Math.max(0, Math.round(b * factor)));

    return `#${newR.toString(16).padStart(2, '0')}${newG
      .toString(16)
      .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  }

  // 其他情况直接返回
  return baseColor;
};
