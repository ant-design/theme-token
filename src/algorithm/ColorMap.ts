export interface ColorNeutralMapToken {
  /**
   * @internal
   */
  colorTextBase: string;

  /**
   * @internal
   */
  colorBgBase: string;

  // ----------   Text   ---------- //

  /**
   * @nameZH 一级文本色
   * @nameEN Text Color
   * @desc 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。
   * @descEN Default text color which comply with W3C standards, and this color is also the darkest neutral color.
   */
  colorText: string;

  /**
   * @nameZH 二级文本色
   * @nameEN Secondary Text Color
   * @desc 作为第二梯度的文本色，一般用在不那么需要强化文本颜色的场景，例如 Label 文本、Menu 的文本选中态等场景。
   * @descEN The second level of text color is generally used in scenarios where text color is not emphasized, such as label text, menu text selection state, etc.
   */
  colorTextSecondary: string;

  /**
   * @nameZH 三级文本色
   * @desc 第三级文本色一般用于描述性文本，例如表单的中的补充说明文本、列表的描述性文本等场景。
   * @descEN The third level of text color is generally used for descriptive text, such as form supplementary explanation text, list descriptive text, etc.
   */
  colorTextTertiary: string;

  /**
   * @nameZH 四级文本色
   * @desc 第四级文本色是最浅的文本色，例如表单的输入提示文本、禁用色文本等。
   * @descEN The fourth level of text color is the lightest text color, such as form input prompt text, disabled color text, etc.
   */
  colorTextQuaternary: string;

  // ----------   Border   ---------- //

  /**
   * @nameZH 一级边框色
   * @nameEN Default Border Color
   * @desc 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。
   * @descEN Default border color, used to separate different elements, such as: form separator, card separator, etc.
   */
  colorBorder: string;

  /**
   * @nameZH 二级边框色
   * @nameEN Secondary Border Color
   * @desc 比默认使用的边框色要浅一级，此颜色和 colorSplit 的颜色一致。使用的是实色。
   * @descEN Slightly lighter than the default border color, this color is the same as `colorSplit`. Solid color is used.
   */
  colorBorderSecondary: string;

  // ----------   Fill   ---------- //

  /**
   * @nameZH 一级填充色
   * @desc 最深的填充色，用于拉开与二、三级填充色的区分度，目前只用在 Slider 的 hover 效果。
   * @descEN The darkest fill color is used to distinguish between the second and third level of fill color, and is currently only used in the hover effect of Slider.
   */
  colorFill: string;

  /**
   * @nameZH 二级填充色
   * @desc 二级填充色可以较为明显地勾勒出元素形体，如 Rate、Skeleton 等。也可以作为三级填充色的 Hover 状态，如 Table 等。
   * @descEN The second level of fill color can outline the shape of the element more clearly, such as Rate, Skeleton, etc. It can also be used as the Hover state of the third level of fill color, such as Table, etc.
   */
  colorFillSecondary: string;

  /**
   * @nameZH 三级填充色
   * @desc 三级填充色用于勾勒出元素形体的场景，如 Slider、Segmented 等。如无强调需求的情况下，建议使用三级填色作为默认填色。
   * @descEN The third level of fill color is used to outline the shape of the element, such as Slider, Segmented, etc. If there is no emphasis requirement, it is recommended to use the third level of fill color as the default fill color.
   */
  colorFillTertiary: string;

  /**
   * @nameZH 四级填充色
   * @desc 最弱一级的填充色，适用于不易引起注意的色块，例如斑马纹、区分边界的色块等。
   * @descEN The weakest level of fill color is suitable for color blocks that are not easy to attract attention, such as zebra stripes, color blocks that distinguish boundaries, etc.
   */
  colorFillQuaternary: string;

  // ----------   Surface   ---------- //

  /**
   * @nameZH 布局背景色
   * @nameEN Layout Background Color
   * @desc 该色用于页面整体布局的背景色，只有需要在页面中处于 B1 的视觉层级时才会使用该 token，其他用法都是错误的
   * @descEN This color is used for the background color of the overall layout of the page. This token will only be used when it is necessary to be at the B1 visual level in the page. Other usages are wrong.
   */
  colorBgLayout: string;

  /**
   * @nameZH 组件容器背景色
   * @desc 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。
   * @descEN Container background color, e.g: default button, input box, etc. Be sure not to confuse this with `colorBgElevated`.
   */
  colorBgContainer: string;

  /**
   * @nameZH 浮层容器背景色
   * @desc 浮层容器背景色，在暗色模式下该 token 的色值会比 `colorBgContainer` 要亮一些。例如：模态框、弹出框、菜单等。
   * @descEN Container background color of the popup layer, in dark mode the color value of this token will be a little brighter than `colorBgContainer`. E.g: modal, pop-up, menu, etc.
   */
  colorBgElevated: string;

  /**
   * @nameZH 引起注意的背景色
   * @desc 该色用于引起用户强烈关注注意的背景色，目前只用在 Tooltip 的背景色上。
   * @descEN This color is used to draw the user's strong attention to the background color, and is currently only used in the background color of Tooltip.
   */
  colorBgSpotlight: string;
  /**
   * @nameZH 毛玻璃容器背景色
   * @nameEN Frosted glass container background color
   * @desc 控制毛玻璃容器的背景色，通常为透明色。
   * @descEN Control the background color of frosted glass container, usually transparent.
   */
  colorBgBlur: string;

  // ----------   Solid   ---------- //

  /**
   * @desc 实心的背景颜色，目前只用在默认实心按钮背景色上。
   * @descEN Solid background color, currently only used for the default solid button background color.
   */
  colorBgSolid: string;
  /**
   * @desc 实心的背景颜色激活态，目前只用在默认实心按钮的 active 效果。
   * @descEN Solid background color active state, currently only used in the active effect of the default solid button.
   */
  colorBgSolidActive: string;
  /**
   * @desc 实心的背景颜色悬浮态，目前只用在默认实心按钮的 hover 效果。
   * @descEN Solid background color hover state, currently only used in the hover effect of the default solid button.
   */
  colorBgSolidHover: string;
}

export interface ColorMap {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}

export type GenerateColorMap = (baseColor: string) => ColorMap;
export type GenerateNeutralColorMap = (
  bgBaseColor: string,
  textBaseColor: string,
) => ColorNeutralMapToken;
