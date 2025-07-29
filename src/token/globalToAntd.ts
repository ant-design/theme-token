import { colorMappings } from './colorMappings';
import { global } from './global';
import { themeCssVar } from './theme';

export interface GlobalToken {
  [key: string]: string;
}
// 处理所有 token 的映射
export const processTokenMappingToAntd = (
  globalConfig: GlobalToken,
): GlobalToken => {
  const antdToken: any = {};

  // 处理映射
  colorMappings.forEach((mapping) => {
    const value = (globalConfig as any)[mapping.key];
    if (value) {
      let processedValue = value;
      if (value.startsWith('--')) {
        processedValue = `var(${value})`;
      }
      if (value.endsWith('px')) {
        processedValue = parseInt(value);
      }
      mapping.tokens.forEach((token) => {
        antdToken[token] = processedValue;
      });
    }
  });
  return antdToken;
};

/**
 * 将 global token 转换为 Ant Design token 格式
 * 支持 SeedToken、MapToken 和 AliasToken
 * 参考: https://ant-design.antgroup.com/docs/react/customize-theme-cn#aliastoken
 */
export const convertGlobalToAntdToken = () => {
  return processTokenMappingToAntd(global);
};

export const convertGlobalToAntdCssToken = () => {
  return processTokenMappingToAntd(themeCssVar);
};
