import { globalThemeToken } from './global';
import { themeCssVar } from './theme';

// 处理所有 token 的映射
const processTokenMapping = (globalConfig: any) => {
  const antdToken: any = {};

  // 颜色相关映射
  const colorMappings = [
    {
      key: '--color-blue-9',
      tokens: [
        'colorPrimary',
        'colorLink',
        'colorPrimaryTextActive',
        'colorPrimaryBorder',
      ],
    },
    {
      key: '--color-blue-10',
      tokens: ['colorPrimaryHover', 'colorLinkHover', 'colorPrimaryTextHover'],
    },
    {
      key: '--color-blue-11',
      tokens: ['colorPrimaryActive', 'colorLinkActive'],
    },
    {
      key: '--color-blue-6',
      tokens: ['colorPrimaryBg', 'colorPrimaryActive'],
    },
    { key: '--color-blue-1', tokens: ['colorPrimaryBgHover'] },
    { key: '--color-blue-2', tokens: ['colorPrimaryBorder'] },
    { key: '--color-blue-3', tokens: ['colorPrimaryBorderHover'] },

    {
      key: '--color-green-9',
      tokens: ['colorSuccess', 'colorSuccessTextActive'],
    },
    { key: '--color-green-10', tokens: ['colorSuccessHover'] },
    { key: '--color-green-11', tokens: ['colorSuccessActive'] },
    {
      key: '--color-green-6',
      tokens: ['colorSuccessBg', 'colorSuccessActive'],
    },
    { key: '--color-green-1', tokens: ['colorSuccessBgHover'] },
    { key: '--color-green-2', tokens: ['colorSuccessBorder'] },
    { key: '--color-green-3', tokens: ['colorSuccessBorderHover'] },

    {
      key: '--color-orange-9',
      tokens: ['colorWarning', 'colorWarningTextActive'],
    },
    { key: '--color-orange-10', tokens: ['colorWarningHover'] },
    { key: '--color-orange-11', tokens: ['colorWarningActive'] },
    {
      key: '--color-orange-6',
      tokens: ['colorWarningBg', 'colorWarningActive'],
    },
    { key: '--color-orange-1', tokens: ['colorWarningBgHover'] },
    { key: '--color-orange-2', tokens: ['colorWarningBorder'] },
    { key: '--color-orange-3', tokens: ['colorWarningBorderHover'] },

    { key: '--color-red-9', tokens: ['colorError', 'colorErrorTextActive'] },
    { key: '--color-red-10', tokens: ['colorErrorHover'] },
    { key: '--color-red-11', tokens: ['colorErrorActive'] },
    { key: '--color-red-6', tokens: ['colorErrorBg', 'colorErrorActive'] },
    { key: '--color-red-1', tokens: ['colorErrorBgHover'] },
    { key: '--color-red-2', tokens: ['colorErrorBorder'] },
    { key: '--color-red-3', tokens: ['colorErrorBorderHover'] },

    {
      key: '--color-gray-a12',
      tokens: ['colorText', 'colorTextPlaceholder'],
    },
    { key: '--color-gray-a11', tokens: ['colorTextSecondary'] },
    { key: '--color-gray-a9', tokens: ['colorTextTertiary'] },
    { key: '--color-gray-a8', tokens: ['colorTextQuaternary'] },
    {
      key: '--color-gray-a6',
      tokens: ['colorTextDisabled', 'colorControlItemBgActive'],
    },

    {
      key: '--color-gray-1',
      tokens: ['colorBgContainer', 'colorBgSpotlight'],
    },
    { key: '--color-gray-2', tokens: ['colorBgElevated'] },
    { key: '--color-gray-3', tokens: ['colorBgLayout'] },
    { key: '--color-gray-4', tokens: ['colorBgSpotlight'] },
    { key: '--color-gray-5', tokens: ['colorBgMask'] },
    { key: '--color-gray-6', tokens: ['colorBgBlur'] },

    {
      key: '--color-gray-a3',
      tokens: [
        'colorBorder',
        'colorControl',
        'colorSplit',
        'colorBgContainerDisabled',
        'colorBorderDisabled',
      ],
    },
    {
      key: '--color-gray-a4',
      tokens: ['colorBorderSecondary', 'colorControlItemBg'],
    },
    {
      key: '--color-gray-a5',
      tokens: ['colorBorderTertiary', 'colorControlItemBgHover'],
    },

    { key: '--color-gray-a2', tokens: ['colorFill', 'colorFillContent'] },
    {
      key: '--color-gray-a3',
      tokens: ['colorFillSecondary', 'colorFillContentHover'],
    },
    {
      key: '--color-gray-a4',
      tokens: ['colorFillTertiary', 'colorFillContentActive'],
    },
    { key: '--color-gray-a5', tokens: ['colorFillQuaternary'] },
    { key: '--color-gray-a1', tokens: ['colorFill'] },
  ];

  // 尺寸相关映射
  const sizeMappings = [
    { key: '--border-radius-control-base', tokens: ['borderRadius'] },
    { key: '--border-radius-control-xs', tokens: ['borderRadiusXS'] },
    { key: '--border-radius-control-sm', tokens: ['borderRadiusSM'] },
    { key: '--border-radius-card-m', tokens: ['borderRadiusLG'] },
    { key: '--border-radius-card-lg', tokens: ['borderRadiusXL'] },
  ];

  // 字体相关映射
  const fontMappings = [
    { key: '--font-size-body-sm', tokens: ['fontSize'] },
    { key: '--font-size-body-xs', tokens: ['fontSizeSM'] },
    { key: '--font-size-body-m', tokens: ['fontSizeLG'] },
    { key: '--font-size-body-l', tokens: ['fontSizeXL'] },
    { key: '--font-size-h6', tokens: ['fontSizeHeading1'] },
    { key: '--font-size-h5', tokens: ['fontSizeHeading2'] },
    { key: '--font-size-h4', tokens: ['fontSizeHeading3'] },
    { key: '--font-size-h3', tokens: ['fontSizeHeading4'] },
    { key: '--font-size-h2', tokens: ['fontSizeHeading5'] },
  ];

  // 其他映射
  const otherMappings = [
    { key: '--shadow-control-b1', tokens: ['boxShadow'] },
    { key: '--shadow-control-l1', tokens: ['boxShadowSecondary'] },
    { key: '--shadow-card-l1', tokens: ['boxShadowTertiary'] },
    { key: '--shadow-dialog-l3', tokens: ['boxShadowCard'] },

    { key: '--line-width-base', tokens: ['lineWidth'] },
    { key: '--line-width-bold', tokens: ['lineWidthBold'] },
    { key: '--line-width-focus', tokens: ['lineWidthFocus'] },

    { key: '--motion-duration-fast', tokens: ['motionDurationFast'] },
    { key: '--motion-duration-mid', tokens: ['motionDurationMid'] },
    { key: '--motion-duration-slow', tokens: ['motionDurationSlow'] },

    { key: '--font-family', tokens: ['fontFamily'] },
    { key: '--font-family-code', tokens: ['fontFamilyCode'] },

    { key: '--line-height-body-xs', tokens: ['lineHeightSM'] },
    { key: '--line-height-body-sm', tokens: ['lineHeight'] },
    { key: '--line-height-body-m', tokens: ['lineHeightLG'] },
    { key: '--line-height-body-l', tokens: ['lineHeightXL'] },
    {
      key: '--line-height-heading',
      tokens: [
        'lineHeightHeading1',
        'lineHeightHeading2',
        'lineHeightHeading3',
        'lineHeightHeading4',
        'lineHeightHeading5',
      ],
    },

    { key: '--font-weight-strong', tokens: ['fontWeightStrong'] },
    { key: '--font-weight-stronger', tokens: ['fontWeightStronger'] },

    { key: '--screen-xs', tokens: ['screenXS'] },
    { key: '--screen-sm', tokens: ['screenSM'] },
    { key: '--screen-md', tokens: ['screenMD'] },
    { key: '--screen-lg', tokens: ['screenLG'] },
    { key: '--screen-xl', tokens: ['screenXL'] },
    { key: '--screen-xxl', tokens: ['screenXXL'] },
  ];

  // 合并所有映射
  const allMappings = [
    ...colorMappings,
    ...sizeMappings,
    ...fontMappings,
    ...otherMappings,
  ];

  // 处理映射
  allMappings.forEach((mapping) => {
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
  return processTokenMapping(globalThemeToken);
};

export const convertGlobalToAntdCssToken = () => {
  return processTokenMapping(themeCssVar);
};
