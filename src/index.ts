import { ThemeProvide } from './ThemeProvide';
import algorithm from './algorithm';
import { useCSSVariables } from './hooks';
import { global } from './token/global';
import {
  convertGlobalToAntdCssToken,
  convertGlobalToAntdToken,
} from './token/globalToAntd';
import { theme, themeCssVar } from './token/theme';
import { createStyleRegister } from './useStyle';

// 重新导出 globalThemeToken 以保持向后兼容性
export const globalThemeToken = global;

export type { UseStyleResult } from '../src/useStyle';

export {
  ThemeProvide,
  algorithm,
  convertGlobalToAntdCssToken,
  convertGlobalToAntdToken,
  createStyleRegister,
  theme,
  themeCssVar,
  useCSSVariables,
};

export type { CSSVariables } from './hooks';
export type { BaseToken, ComponentToken, GenerateStyle } from './useStyle';
