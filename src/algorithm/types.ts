// 颜色映射生成器类型
export type GenerateColorMap = (baseColor: string) => Record<string, string>;

// 中性色映射生成器类型
export type GenerateNeutralColorMap = (
  bgBaseColor: string,
  textBaseColor: string,
) => Record<string, string>;

// 种子令牌类型
export interface SeedToken {
  [key: string]: any;
}

// 映射令牌类型
export interface MapToken {
  [key: string]: any;
}

// 预设颜色类型
export interface PresetColorType {
  [key: string]: string;
}
