import { global } from './global';

/**
 * 将 global token 转换为 Ant Design token 格式
 * 参考: https://ant-design.antgroup.com/docs/react/customize-theme-cn#seedtoken
 */
export const convertGlobalToAntdToken = () => {
  const antdToken: any = {};

  // 颜色映射表 - 支持一个变量对应多个 antd token
  const colorMapping: Record<string, string[]> = {
    '--color-blue-9': ['colorPrimary', 'colorInfo'],
    '--color-blue-10': ['colorPrimaryHover', 'colorInfoHover'],
    '--color-blue-11': ['colorPrimaryActive', 'colorInfoActive'],
    '--color-blue-6': ['colorPrimaryBg', 'colorInfoBg'],
    '--color-blue-1': ['colorPrimaryBgHover', 'colorInfoBgHover'],
    '--color-blue-2': ['colorPrimaryBorder', 'colorInfoBorder'],
    '--color-blue-3': ['colorPrimaryBorderHover', 'colorInfoBorderHover'],

    '--color-green-9': ['colorSuccess'],
    '--color-green-10': ['colorSuccessHover'],
    '--color-green-11': ['colorSuccessActive'],
    '--color-green-6': ['colorSuccessBg'],
    '--color-green-1': ['colorSuccessBgHover'],
    '--color-green-2': ['colorSuccessBorder'],
    '--color-green-3': ['colorSuccessBorderHover'],

    '--color-orange-9': ['colorWarning'],
    '--color-orange-10': ['colorWarningHover'],
    '--color-orange-11': ['colorWarningActive'],
    '--color-orange-6': ['colorWarningBg'],
    '--color-orange-1': ['colorWarningBgHover'],
    '--color-orange-2': ['colorWarningBorder'],
    '--color-orange-3': ['colorWarningBorderHover'],

    '--color-red-9': ['colorError'],
    '--color-red-10': ['colorErrorHover'],
    '--color-red-11': ['colorErrorActive'],
    '--color-red-6': ['colorErrorBg'],
    '--color-red-1': ['colorErrorBgHover'],
    '--color-red-2': ['colorErrorBorder'],
    '--color-red-3': ['colorErrorBorderHover'],

    '--color-gray-a12': ['colorText'],
    '--color-gray-a11': ['colorTextSecondary'],
    '--color-gray-a9': ['colorTextTertiary'],
    '--color-gray-a8': ['colorTextQuaternary'],
    '--color-gray-a6': ['colorTextDisabled'],

    '--color-gray-1': ['colorBgContainer'],
    '--color-gray-2': ['colorBgElevated'],
    '--color-gray-3': ['colorBgLayout'],
    '--color-gray-4': ['colorBgSpotlight'],
    '--color-gray-5': ['colorBgMask'],

    '--color-gray-a3': ['colorBorder', 'colorFillSecondary'],
    '--color-gray-a4': ['colorBorderSecondary', 'colorFillTertiary'],
    '--color-gray-a5': ['colorBorderTertiary', 'colorFillQuaternary'],

    '--color-gray-a2': ['colorFill'],
  };

  // 尺寸映射表
  const sizeMapping: Record<string, string[]> = {
    '--margin-component-xs': ['controlHeightXS'],
    '--margin-component-sm': ['controlHeightSM'],
    '--margin-component-base': ['controlHeight'],
    '--margin-component-lg': ['controlHeightLG'],

    '--border-radius-control-xs': ['borderRadiusXS'],
    '--border-radius-control-sm': ['borderRadiusSM'],
    '--border-radius-control-base': ['borderRadius'],
    '--border-radius-card-m': ['borderRadiusLG'],
    '--border-radius-card-lg': ['borderRadiusXL'],
  };

  // 字体映射表
  const fontMapping: Record<string, string[]> = {
    '--font-size-body-xs': ['fontSizeSM'],
    '--font-size-body-sm': ['fontSize'],
    '--font-size-body-m': ['fontSizeLG'],
    '--font-size-body-l': ['fontSizeXL'],
    '--font-size-h6': ['fontSizeHeading1'],
    '--font-size-h5': ['fontSizeHeading2'],
    '--font-size-h4': ['fontSizeHeading3'],
    '--font-size-h3': ['fontSizeHeading4'],
    '--font-size-h2': ['fontSizeHeading5'],
  };

  // 处理颜色变量
  Object.keys(global).forEach((key) => {
    if (key.startsWith('--color-')) {
      const antdKeys = colorMapping[key];
      if (antdKeys) {
        let colorValue = (global as any)[key];
        // 处理引用的情况
        if (colorValue.startsWith('--color-')) {
          colorValue = (global as any)[colorValue] || colorValue;
        }
        // 为每个 antd key 设置相同的值
        antdKeys.forEach((antdKey) => {
          antdToken[antdKey] = colorValue;
        });
      }
    }
  });

  // 处理尺寸变量
  Object.keys(global).forEach((key) => {
    if (key.startsWith('--margin-') || key.startsWith('--border-radius-')) {
      const antdKeys = sizeMapping[key];
      if (antdKeys) {
        let sizeValue = (global as any)[key];
        if (sizeValue.endsWith('px')) {
          sizeValue = parseInt(sizeValue);
        }
        // 为每个 antd key 设置相同的值
        antdKeys.forEach((antdKey) => {
          antdToken[antdKey] = sizeValue;
        });
      }
    }
  });

  // 处理字体变量
  Object.keys(global).forEach((key) => {
    if (key.startsWith('--font-size-')) {
      const antdKeys = fontMapping[key];
      if (antdKeys) {
        let fontSizeValue = (global as any)[key];
        if (fontSizeValue.endsWith('px')) {
          fontSizeValue = parseInt(fontSizeValue);
        }
        // 为每个 antd key 设置相同的值
        antdKeys.forEach((antdKey) => {
          antdToken[antdKey] = fontSizeValue;
        });
      }
    }
  });

  // 设置默认值
  const defaultValues = {
    borderRadius: 6,
    fontFamily:
      'AlibabaPuHuiTi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    motion: true,
    lineWidth: 1,
    lineWidthBold: 2,
    lineWidthFocus: 3,
  };

  return {
    ...defaultValues,
    ...antdToken,
  };
};

/**
 * 获取 Ant Design 主题配置
 */
export const getAntdThemeConfig = () => {
  return {
    token: convertGlobalToAntdToken(),
  };
};

/**
 * 获取组件级别的主题配置
 */
export const getComponentThemeConfig = () => {
  const baseToken = convertGlobalToAntdToken();

  return {
    components: {
      Button: {
        colorPrimary: baseToken.colorPrimary,
        borderRadius: baseToken.borderRadius,
        algorithm: true,
      },
      Input: {
        colorPrimary: baseToken.colorPrimary,
        borderRadius: baseToken.borderRadius,
        algorithm: true,
      },
      Card: {
        borderRadius: baseToken.borderRadiusLG,
        algorithm: true,
      },
      Modal: {
        borderRadius: baseToken.borderRadiusXL,
        algorithm: true,
      },
      Select: {
        colorPrimary: baseToken.colorPrimary,
        borderRadius: baseToken.borderRadius,
        algorithm: true,
      },
      Table: {
        borderRadius: baseToken.borderRadius,
        algorithm: true,
      },
    },
  };
};

/**
 * 完整的 Ant Design 主题配置
 */
export const getCompleteAntdThemeConfig = () => {
  return {
    ...getAntdThemeConfig(),
    ...getComponentThemeConfig(),
  };
};
