import { MappingAlgorithm, ThemeConfig } from 'antd';
import { ComponentTokenMap } from './ComponentTokenMap';
import { antToken } from './antToken';
import { globalToAntTokenMappings } from './colorMappings';
import { global } from './global';
import { themeCssVar } from './theme';

export interface GlobalToken {
  [key: string]: string;
}
// 处理所有 token 的映射
export const processTokenMappingToAntd = (
  globalConfig: GlobalToken,
): GlobalToken => {
  const antdToken: any = {
    ...antToken,
  };

  // 处理映射
  Object.keys(globalToAntTokenMappings).forEach((mapping) => {
    const value = (globalConfig as any)[mapping];

    if (value) {
      let processedValue = `var(${mapping})`;
      // 可能一个 global 变量映射到多个 antd 变量
      (
        globalToAntTokenMappings[
          mapping as keyof typeof globalToAntTokenMappings
        ] as any[]
      ).forEach((token) => {
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

export const themeAlgorithm = () => {
  return convertGlobalToAntdToken() as unknown as ReturnType<MappingAlgorithm>;
};

export const genComponentsToken = (): ThemeConfig['components'] => {
  return ComponentTokenMap as unknown as ThemeConfig['components'];
};
