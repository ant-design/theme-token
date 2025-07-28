// 基础类型定义
export interface SeedToken {
  colorPrimary?: string;
  colorBgBase?: string;
  colorTextBase?: string;
  fontSize?: number;
  controlHeight?: number;
  controlHeightSM?: number;
  controlHeightLG?: number;
  borderRadius?: number;
  borderRadiusSM?: number;
  borderRadiusLG?: number;
  borderRadiusXL?: number;
  borderRadiusOuter?: number;
  sizeUnit?: number;
  sizeStep?: number;
  motionDurationFast?: string;
  motionDurationMid?: string;
  motionDurationSlow?: string;
  motionEaseInOut?: string;
  motionEaseOut?: string;
  motionEaseIn?: string;
  motionEaseInBack?: string;
  motionEaseOutBack?: string;
  [key: string]: any;
}

export interface MapToken extends SeedToken {
  [key: string]: any;
}

export interface PresetColorType {
  blue?: string;
  purple?: string;
  cyan?: string;
  green?: string;
  magenta?: string;
  pink?: string;
  red?: string;
  orange?: string;
  yellow?: string;
  volcano?: string;
  geekblue?: string;
  lime?: string;
  gold?: string;
  [key: string]: any;
}
