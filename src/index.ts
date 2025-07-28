export * from './ThemeProvide';
export * from './algorithm';
export { useCSSVariables } from './hooks';
export {
  convertGlobalToAntdCssToken,
  convertGlobalToAntdToken,
} from './token/globalToAntd';
export { theme, themeCssVar } from './token/theme';
export { createStyleRegister } from './useStyle';
import { global } from './token/global';

// 重新导出 globalThemeToken 以保持向后兼容性
export const globalThemeToken = global;

export type { UseStyleResult } from '../src/useStyle';

export type { CSSVariables } from './hooks';
export { processTokenMappingToAntd } from './token/globalToAntd';
export type { BaseToken, ComponentToken, GenerateStyle } from './useStyle';
