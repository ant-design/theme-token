// 根据 global.less 变量更新的 colorMappings
export const colorMappings = [
  // 主色调相关映射
  {
    key: '--color-primary-9',
    tokens: ['colorPrimary', 'colorPrimaryActive'],
  },
  {
    key: '--color-primary-10',
    tokens: ['colorPrimaryHover'],
  },
  {
    key: '--color-primary-2',
    tokens: ['colorPrimaryBg'],
  },
  {
    key: '--color-primary-a3',
    tokens: ['colorPrimaryBgHover', 'controlOutline'],
  },
  {
    key: '--color-primary-a5',
    tokens: ['colorPrimaryBorder'],
  },
  {
    key: '--color-primary-a6',
    tokens: ['colorPrimaryBorderHover'],
  },
  {
    key: '--color-primary-a11',
    tokens: ['colorPrimaryText'],
  },
  {
    key: '--color-primary-a10',
    tokens: ['colorPrimaryTextActive'],
  },
  {
    key: '--color-primary-3',
    tokens: ['controlItemBgActive'],
  },
  {
    key: '--color-primary-4',
    tokens: ['controlItemBgActiveHover'],
  },

  // 蓝色相关映射
  {
    key: '--color-blue-9',
    tokens: ['colorInfo', 'colorInfoActive'],
  },
  {
    key: '--color-blue-10',
    tokens: ['colorInfoHover', 'colorLinkActive'],
  },
  {
    key: '--color-blue-2',
    tokens: ['colorInfoBg'],
  },
  {
    key: '--color-blue-a2',
    tokens: ['colorInfoBgHover'],
  },
  {
    key: '--color-blue-a5',
    tokens: ['colorInfoBorder'],
  },
  {
    key: '--color-blue-a6',
    tokens: ['colorInfoBorderHover'],
  },
  {
    key: '--color-blue-a11',
    tokens: ['colorLink', 'colorInfoText', 'colorInfoTextActive'],
  },
  {
    key: '--color-blue-a10',
    tokens: ['colorInfoTextHover', 'colorLinkHover'],
  },

  // 绿色相关映射
  {
    key: '--color-green-9',
    tokens: ['colorSuccess', 'colorSuccessActive'],
  },
  {
    key: '--color-green-10',
    tokens: ['colorSuccessHover'],
  },
  {
    key: '--color-green-2',
    tokens: ['colorSuccessBg'],
  },
  {
    key: '--color-green-a2',
    tokens: ['colorSuccessBgHover'],
  },
  {
    key: '--color-green-a5',
    tokens: ['colorSuccessBorder'],
  },
  {
    key: '--color-green-a6',
    tokens: ['colorSuccessBorderHover'],
  },
  {
    key: '--color-green-a11',
    tokens: ['colorSuccessText', 'colorSuccessTextActive'],
  },
  {
    key: '--color-green-a10',
    tokens: ['colorSuccessTextHover'],
  },

  // 黄色/警告相关映射
  {
    key: '--color-yellow-9',
    tokens: ['colorWarning', 'colorWarningActive', 'colorWarningTextHover'],
  },
  {
    key: '--color-yellow-10',
    tokens: ['colorWarningHover', 'colorWarningTextActive'],
  },
  {
    key: '--color-yellow-2',
    tokens: ['colorWarningBg'],
  },
  {
    key: '--color-yellow-a3',
    tokens: ['colorWarningBgHover'],
  },
  {
    key: '--color-yellow-a5',
    tokens: ['colorWarningBorder', 'colorWarningOutline'],
  },
  {
    key: '--color-yellow-a6',
    tokens: ['colorWarningBorderHover'],
  },
  {
    key: '--color-yellow-a11',
    tokens: ['colorWarningText'],
  },

  // 红色/错误相关映射
  {
    key: '--color-red-9',
    tokens: ['colorError', 'colorErrorActive'],
  },
  {
    key: '--color-red-10',
    tokens: ['colorErrorHover'],
  },
  {
    key: '--color-red-2',
    tokens: ['colorErrorBg'],
  },
  {
    key: '--color-red-a2',
    tokens: ['colorErrorBgHover'],
  },
  {
    key: '--color-red-a3',
    tokens: ['colorErrorBgActive'],
  },
  {
    key: '--color-red-a4',
    tokens: ['colorErrorBgFilledHover'],
  },
  {
    key: '--color-red-a5',
    tokens: ['colorErrorBorder', 'colorErrorOutline'],
  },
  {
    key: '--color-red-a6',
    tokens: ['colorErrorBorderHover'],
  },
  {
    key: '--color-red-a11',
    tokens: ['colorErrorText', 'colorErrorTextActive'],
  },
  {
    key: '--color-red-a10',
    tokens: ['colorErrorTextHover'],
  },

  // 中性色映射
  {
    key: '--color-gray-a12',
    tokens: ['colorText', 'colorTextHeading', 'colorIconHover'],
  },
  {
    key: '--color-gray-a11',
    tokens: ['colorTextSecondary', 'colorTextLabel', 'colorBgMask'],
  },
  {
    key: '--color-gray-a9',
    tokens: ['colorTextTertiary', 'colorIcon', 'colorTextDescription'],
  },
  {
    key: '--color-gray-a8',
    tokens: [
      'colorTextQuaternary',
      'colorTextDisabled',
      'colorTextPlaceholder',
    ],
  },

  // 背景色映射
  {
    key: '--color-gray-2',
    tokens: ['colorBgLayout'],
  },
  {
    key: '--color-gray-a12',
    tokens: ['colorBgSpotlight'],
  },

  // 边框色映射
  {
    key: '--color-gray-a5',
    tokens: [
      'colorBorder',
      'colorFill',
      'colorBgTextActive',
      'colorSplit',
      'colorFillContentHover',
      'controlItemBgActiveDisabled',
    ],
  },
  {
    key: '--color-gray-a3',
    tokens: [
      'colorBorderSecondary',
      'colorFillSecondary',
      'colorFillContent',
      'colorBgTextHover',
      'controlItemBgHover',
    ],
  },

  // 填充色映射
  {
    key: '--color-gray-a2',
    tokens: ['colorFillTertiary', 'colorFillAlter', 'colorBgContainerDisabled'],
  },
  {
    key: '--color-gray-a1',
    tokens: ['colorFillQuaternary'],
  },

  // 基础文本色映射
  {
    key: '--color-gray-12',
    tokens: ['colorTextBase'],
  },
  // 阴影映射 (根据 global.ts 修正)
  {
    key: '--shadow-control-b1',
    tokens: ['boxShadow'],
  },
  {
    key: '--shadow-control-l1',
    tokens: ['boxShadowSecondary'],
  },
  {
    key: '--shadow-card-l1',
    tokens: ['boxShadowTertiary'],
  },
  {
    key: '--shadow-hover-control-l2',
    tokens: ['boxShadowForm'],
  },

  // 间距映射 (根据 global.ts 修正)
  {
    key: '--padding-control-m-32',
    tokens: ['paddingContentHorizontal'],
  },

  // 颜色色板映射 - Gray (根据 global.ts 修正)
  {
    key: '--color-gray-1',
    tokens: ['gray1'],
  },
  {
    key: '--color-gray-2',
    tokens: ['gray2'],
  },
  {
    key: '--color-gray-3',
    tokens: ['gray3'],
  },
  {
    key: '--color-gray-4',
    tokens: ['gray4'],
  },
  {
    key: '--color-gray-5',
    tokens: ['gray5'],
  },
  {
    key: '--color-gray-6',
    tokens: ['gray6'],
  },
  {
    key: '--color-gray-7',
    tokens: ['gray7'],
  },
  {
    key: '--color-gray-8',
    tokens: ['gray8'],
  },
  {
    key: '--color-gray-9',
    tokens: ['gray9'],
  },
  {
    key: '--color-gray-10',
    tokens: ['gray10'],
  },
  {
    key: '--color-gray-11',
    tokens: ['gray11'],
  },
  {
    key: '--color-gray-12',
    tokens: ['gray12'],
  },

  // 颜色透明度色板映射 - Gray (根据 global.ts 修正)
  {
    key: '--color-gray-a1',
    tokens: ['grayA1'],
  },
  {
    key: '--color-gray-a2',
    tokens: ['grayA2'],
  },
  {
    key: '--color-gray-a3',
    tokens: ['grayA3'],
  },
  {
    key: '--color-gray-a4',
    tokens: ['grayA4'],
  },
  {
    key: '--color-gray-a5',
    tokens: ['grayA5'],
  },
  {
    key: '--color-gray-a6',
    tokens: ['grayA6'],
  },
  {
    key: '--color-gray-a7',
    tokens: ['grayA7'],
  },
  {
    key: '--color-gray-a8',
    tokens: ['grayA8'],
  },
  {
    key: '--color-gray-a9',
    tokens: ['grayA9'],
  },
  {
    key: '--color-gray-a10',
    tokens: ['grayA10'],
  },
  {
    key: '--color-gray-a11',
    tokens: ['grayA11'],
  },
  {
    key: '--color-gray-a12',
    tokens: ['grayA12'],
  },

  // 颜色色板映射 - Blue (根据 global.ts 修正)
  {
    key: '--color-blue-1',
    tokens: ['blue1'],
  },
  {
    key: '--color-blue-2',
    tokens: ['blue2'],
  },
  {
    key: '--color-blue-3',
    tokens: ['blue3'],
  },
  {
    key: '--color-blue-4',
    tokens: ['blue4'],
  },
  {
    key: '--color-blue-5',
    tokens: ['blue5'],
  },
  {
    key: '--color-blue-6',
    tokens: ['blue6'],
  },
  {
    key: '--color-blue-7',
    tokens: ['blue7'],
  },
  {
    key: '--color-blue-8',
    tokens: ['blue8'],
  },
  {
    key: '--color-blue-9',
    tokens: ['blue9'],
  },
  {
    key: '--color-blue-10',
    tokens: ['blue10'],
  },
  {
    key: '--color-blue-11',
    tokens: ['blue11'],
  },
  {
    key: '--color-blue-12',
    tokens: ['blue12'],
  },

  // 颜色透明度色板映射 - Blue (根据 global.ts 修正)
  {
    key: '--color-blue-a1',
    tokens: ['blueA1'],
  },
  {
    key: '--color-blue-a2',
    tokens: ['blueA2'],
  },
  {
    key: '--color-blue-a3',
    tokens: ['blueA3'],
  },
  {
    key: '--color-blue-a4',
    tokens: ['blueA4'],
  },
  {
    key: '--color-blue-a5',
    tokens: ['blueA5'],
  },
  {
    key: '--color-blue-a6',
    tokens: ['blueA6'],
  },
  {
    key: '--color-blue-a7',
    tokens: ['blueA7'],
  },
  {
    key: '--color-blue-a8',
    tokens: ['blueA8'],
  },
  {
    key: '--color-blue-a9',
    tokens: ['blueA9'],
  },
  {
    key: '--color-blue-a10',
    tokens: ['blueA10'],
  },
  {
    key: '--color-blue-a11',
    tokens: ['blueA11'],
  },
  {
    key: '--color-blue-a12',
    tokens: ['blueA12'],
  },

  // 颜色色板映射 - Green (根据 global.ts 修正)
  {
    key: '--color-green-1',
    tokens: ['green1'],
  },
  {
    key: '--color-green-2',
    tokens: ['green2'],
  },
  {
    key: '--color-green-3',
    tokens: ['green3'],
  },
  {
    key: '--color-green-4',
    tokens: ['green4'],
  },
  {
    key: '--color-green-5',
    tokens: ['green5'],
  },
  {
    key: '--color-green-6',
    tokens: ['green6'],
  },
  {
    key: '--color-green-7',
    tokens: ['green7'],
  },
  {
    key: '--color-green-8',
    tokens: ['green8'],
  },
  {
    key: '--color-green-9',
    tokens: ['green9'],
  },
  {
    key: '--color-green-10',
    tokens: ['green10'],
  },
  {
    key: '--color-green-11',
    tokens: ['green11'],
  },
  {
    key: '--color-green-12',
    tokens: ['green12'],
  },

  // 颜色透明度色板映射 - Green (根据 global.ts 修正)
  {
    key: '--color-green-a1',
    tokens: ['greenA1'],
  },
  {
    key: '--color-green-a2',
    tokens: ['greenA2'],
  },
  {
    key: '--color-green-a3',
    tokens: ['greenA3'],
  },
  {
    key: '--color-green-a4',
    tokens: ['greenA4'],
  },
  {
    key: '--color-green-a5',
    tokens: ['greenA5'],
  },
  {
    key: '--color-green-a6',
    tokens: ['greenA6'],
  },
  {
    key: '--color-green-a7',
    tokens: ['greenA7'],
  },
  {
    key: '--color-green-a8',
    tokens: ['greenA8'],
  },
  {
    key: '--color-green-a9',
    tokens: ['greenA9'],
  },
  {
    key: '--color-green-a10',
    tokens: ['greenA10'],
  },
  {
    key: '--color-green-a11',
    tokens: ['greenA11'],
  },
  {
    key: '--color-green-a12',
    tokens: ['greenA12'],
  },

  // 颜色色板映射 - Red (根据 global.ts 修正)
  {
    key: '--color-red-1',
    tokens: ['red1'],
  },
  {
    key: '--color-red-2',
    tokens: ['red2'],
  },
  {
    key: '--color-red-3',
    tokens: ['red3'],
  },
  {
    key: '--color-red-4',
    tokens: ['red4'],
  },
  {
    key: '--color-red-5',
    tokens: ['red5'],
  },
  {
    key: '--color-red-6',
    tokens: ['red6'],
  },
  {
    key: '--color-red-7',
    tokens: ['red7'],
  },
  {
    key: '--color-red-8',
    tokens: ['red8'],
  },
  {
    key: '--color-red-9',
    tokens: ['red9'],
  },
  {
    key: '--color-red-10',
    tokens: ['red10'],
  },
  {
    key: '--color-red-11',
    tokens: ['red11'],
  },
  {
    key: '--color-red-12',
    tokens: ['red12'],
  },

  // 颜色透明度色板映射 - Red (根据 global.ts 修正)
  {
    key: '--color-red-a1',
    tokens: ['redA1'],
  },
  {
    key: '--color-red-a2',
    tokens: ['redA2'],
  },
  {
    key: '--color-red-a3',
    tokens: ['redA3'],
  },
  {
    key: '--color-red-a4',
    tokens: ['redA4'],
  },
  {
    key: '--color-red-a5',
    tokens: ['redA5'],
  },
  {
    key: '--color-red-a6',
    tokens: ['redA6'],
  },
  {
    key: '--color-red-a7',
    tokens: ['redA7'],
  },
  {
    key: '--color-red-a8',
    tokens: ['redA8'],
  },
  {
    key: '--color-red-a9',
    tokens: ['redA9'],
  },
  {
    key: '--color-red-a10',
    tokens: ['redA10'],
  },
  {
    key: '--color-red-a11',
    tokens: ['redA11'],
  },
  {
    key: '--color-red-a12',
    tokens: ['redA12'],
  },

  // 颜色色板映射 - Yellow (根据 global.ts 修正)
  {
    key: '--color-yellow-1',
    tokens: ['yellow1'],
  },
  {
    key: '--color-yellow-2',
    tokens: ['yellow2'],
  },
  {
    key: '--color-yellow-3',
    tokens: ['yellow3'],
  },
  {
    key: '--color-yellow-4',
    tokens: ['yellow4'],
  },
  {
    key: '--color-yellow-5',
    tokens: ['yellow5'],
  },
  {
    key: '--color-yellow-6',
    tokens: ['yellow6'],
  },
  {
    key: '--color-yellow-7',
    tokens: ['yellow7'],
  },
  {
    key: '--color-yellow-8',
    tokens: ['yellow8'],
  },
  {
    key: '--color-yellow-9',
    tokens: ['yellow9'],
  },
  {
    key: '--color-yellow-10',
    tokens: ['yellow10'],
  },
  {
    key: '--color-yellow-11',
    tokens: ['yellow11'],
  },
  {
    key: '--color-yellow-12',
    tokens: ['yellow12'],
  },

  // 颜色透明度色板映射 - Yellow (根据 global.ts 修正)
  {
    key: '--color-yellow-a1',
    tokens: ['yellowA1'],
  },
  {
    key: '--color-yellow-a2',
    tokens: ['yellowA2'],
  },
  {
    key: '--color-yellow-a3',
    tokens: ['yellowA3'],
  },
  {
    key: '--color-yellow-a4',
    tokens: ['yellowA4'],
  },
  {
    key: '--color-yellow-a5',
    tokens: ['yellowA5'],
  },
  {
    key: '--color-yellow-a6',
    tokens: ['yellowA6'],
  },
  {
    key: '--color-yellow-a7',
    tokens: ['yellowA7'],
  },
  {
    key: '--color-yellow-a8',
    tokens: ['yellowA8'],
  },
  {
    key: '--color-yellow-a9',
    tokens: ['yellowA9'],
  },
  {
    key: '--color-yellow-a10',
    tokens: ['yellowA10'],
  },
  {
    key: '--color-yellow-a11',
    tokens: ['yellowA11'],
  },
  {
    key: '--color-yellow-a12',
    tokens: ['yellowA12'],
  },

  // 颜色色板映射 - Primary (根据 global.ts 修正)
  {
    key: '--color-primary-1',
    tokens: ['primary1'],
  },
  {
    key: '--color-primary-2',
    tokens: ['primary2'],
  },
  {
    key: '--color-primary-3',
    tokens: ['primary3'],
  },
  {
    key: '--color-primary-4',
    tokens: ['primary4'],
  },
  {
    key: '--color-primary-5',
    tokens: ['primary5'],
  },
  {
    key: '--color-primary-6',
    tokens: ['primary6'],
  },
  {
    key: '--color-primary-7',
    tokens: ['primary7'],
  },
  {
    key: '--color-primary-8',
    tokens: ['primary8'],
  },
  {
    key: '--color-primary-9',
    tokens: ['primary9'],
  },
  {
    key: '--color-primary-10',
    tokens: ['primary10'],
  },
  {
    key: '--color-primary-11',
    tokens: ['primary11'],
  },
  {
    key: '--color-primary-12',
    tokens: ['primary12'],
  },

  // 颜色透明度色板映射 - Primary (根据 global.ts 修正)
  {
    key: '--color-primary-a1',
    tokens: ['primaryA1'],
  },
  {
    key: '--color-primary-a2',
    tokens: ['primaryA2'],
  },
  {
    key: '--color-primary-a3',
    tokens: ['primaryA3'],
  },
  {
    key: '--color-primary-a4',
    tokens: ['primaryA4'],
  },
  {
    key: '--color-primary-a5',
    tokens: ['primaryA5'],
  },
  {
    key: '--color-primary-a6',
    tokens: ['primaryA6'],
  },
  {
    key: '--color-primary-a7',
    tokens: ['primaryA7'],
  },
  {
    key: '--color-primary-a8',
    tokens: ['primaryA8'],
  },
  {
    key: '--color-primary-a9',
    tokens: ['primaryA9'],
  },
  {
    key: '--color-primary-a10',
    tokens: ['primaryA10'],
  },
  {
    key: '--color-primary-a11',
    tokens: ['primaryA11'],
  },
  {
    key: '--color-primary-a12',
    tokens: ['primaryA12'],
  },
];
