/* eslint-disable */

export const PresetColors = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
] as const;

export type PresetColorKey = (typeof PresetColors)[number];

export type PresetColorType = Record<PresetColorKey, string>;

export interface SeedToken extends PresetColorType {
  //  ----------   Color   ---------- //

  /**
   * @nameZH 品牌主色
   * @nameEN Brand Color
   * @desc 品牌色是体现产品特性和传播理念最直观的视觉元素之一。在你完成品牌主色的选取之后，我们会自动帮你生成一套完整的色板，并赋予它们有效的设计语义
   * @descEN Brand color is one of the most direct visual elements to reflect the characteristics and communication of the product. After you have selected the brand color, we will automatically generate a complete color palette and assign it effective design semantics.
   */
  colorPrimary: string;

  /**
   * @nameZH 成功色
   * @nameEN Success Color
   * @desc 用于表示操作成功的 Token 序列，如 Result、Progress 等组件会使用该组梯度变量。
   * @descEN Used to represent the token sequence of operation success, such as Result, Progress and other components will use these map tokens.
   */
  colorSuccess: string;

  /**
   * @nameZH 警戒色
   * @nameEN Warning Color
   * @desc 用于表示操作警告的 Token 序列，如 Notification、 Alert等警告类组件或 Input 输入类等组件会使用该组梯度变量。
   * @descEN Used to represent the warning map token, such as Notification, Alert, etc. Alert or Control component(like Input) will use these map tokens.
   */
  colorWarning: string;

  /**
   * @nameZH 错误色
   * @nameEN Error Color
   * @desc 用于表示操作失败的 Token 序列，如失败按钮、错误状态提示（Result）组件等。
   * @descEN Used to represent the visual elements of the operation failure, such as the error Button, error Result component, etc.
   */
  colorError: string;

  /**
   * @nameZH 信息色
   * @nameEN Info Color
   * @desc 用于表示操作信息的 Token 序列，如 Alert 、Tag、 Progress 等组件都有用到该组梯度变量。
   * @descEN Used to represent the operation information of the Token sequence, such as Alert, Tag, Progress, and other components use these map tokens.
   */
  colorInfo: string;

  /**
   * @nameZH 基础文本色
   * @nameEN Seed Text Color
   * @desc 用于派生文本色梯度的基础变量，v5 中我们添加了一层文本色的派生算法可以产出梯度明确的文本色的梯度变量。但请不要在代码中直接使用该 Seed Token ！
   * @descEN Used to derive the base variable of the text color gradient. In v5, we added a layer of text color derivation algorithm to produce gradient variables of text color gradient. But please do not use this Seed Token directly in the code!
   */
  colorTextBase: string;

  /**
   * @nameZH 基础背景色
   * @nameEN Seed Background Color
   * @desc 用于派生背景色梯度的基础变量，v5 中我们添加了一层背景色的派生算法可以产出梯度明确的背景色的梯度变量。但请不要在代码中直接使用该 Seed Token ！
   * @descEN Used to derive the base variable of the background color gradient. In v5, we added a layer of background color derivation algorithm to produce map token of background color. But PLEASE DO NOT USE this Seed Token directly in the code!
   */
  colorBgBase: string;

  /**
   * @nameZH 超链接颜色
   * @nameEN Hyperlink color
   * @desc 控制超链接的颜色。
   * @descEN Control the color of hyperlink.
   */
  colorLink: string;

  //  ----------   Font   ---------- //

  /**
   * @nameZH 字体
   * @nameEN Font family for default text
   * @desc Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。
   * @descEN The font family of Ant Design prioritizes the default interface font of the system, and provides a set of alternative font libraries that are suitable for screen display to maintain the readability and readability of the font under different platforms and browsers, reflecting the friendly, stable and professional characteristics.
   */
  fontFamily: string;

  /**
   * @nameZH 代码字体
   * @nameEN Font family for code text
   * @desc 代码字体，用于 Typography 内的 code、pre 和 kbd 类型的元素
   * @descEN Code font, used for code, pre and kbd elements in Typography
   */
  fontFamilyCode: string;

  /**
   * @nameZH 默认字号
   * @nameEN Default Font Size
   * @desc 设计系统中使用最广泛的字体大小，文本梯度也将基于该字号进行派生。
   * @descEN The most widely used font size in the design system, from which the text gradient will be derived.
   * @default 14
   */
  fontSize: number;

  //  ----------   Line   ---------- //

  /**
   * @nameZH 基础线宽
   * @nameEN Base Line Width
   * @desc 用于控制组件边框、分割线等的宽度
   * @descEN Border width of base components
   */
  lineWidth: number;

  /**
   * @nameZH 线条样式
   * @nameEN Line Style
   * @desc 用于控制组件边框、分割线等的样式，默认是实线
   * @descEN Border style of base components
   */
  lineType: string;

  //  ----------   BorderRadius   ---------- //

  /**
   * @nameZH 基础圆角
   * @nameEN Base Border Radius
   * @descEN Border radius of base components
   * @desc 基础组件的圆角大小，例如按钮、输入框、卡片等
   */
  borderRadius: number;

  //  ----------   Size   ---------- //

  /**
   * @nameZH 尺寸变化单位
   * @nameEN Size Change Unit
   * @desc 用于控制组件尺寸的变化单位，在 Ant Design 中我们的基础单位为 4 ，便于更加细致地控制尺寸梯度
   * @descEN The unit of size change, in Ant Design, our base unit is 4, which is more fine-grained control of the size step
   * @default 4
   */
  sizeUnit: number;

  /**
   * @nameZH 尺寸步长
   * @nameEN Size Base Step
   * @desc 用于控制组件尺寸的基础步长，尺寸步长结合尺寸变化单位，就可以派生各种尺寸梯度。通过调整步长即可得到不同的布局模式，例如 V5 紧凑模式下的尺寸步长为 2
   * @descEN The base step of size change, the size step combined with the size change unit, can derive various size steps. By adjusting the step, you can get different layout modes, such as the size step of the compact mode of V5 is 2
   * @default 4
   */
  sizeStep: number;

  /**
   * @nameZH 组件箭头尺寸
   * @desc 组件箭头的尺寸
   * @descEN The size of the component arrow
   */
  sizePopupArrow: number;

  /**
   * @nameZH 基础高度
   * @nameEN Base Control Height
   * @desc Ant Design 中按钮和输入框等基础控件的高度
   * @descEN The height of the basic controls such as buttons and input boxes in Ant Design
   * @default 32
   */
  controlHeight: number;

  //  ----------   zIndex   ---------- //

  /**
   * @nameZH 基础 zIndex
   * @nameEN Base zIndex
   * @desc 所有组件的基础 Z 轴值，用于一些悬浮类的组件的可以基于该值 Z 轴控制层级，例如 BackTop、 Affix 等
   * @descEN The base Z axis value of all components, which can be used to control the level of some floating components based on the Z axis value, such as BackTop, Affix, etc.
   *
   * @default 0
   */
  zIndexBase: number;

  /**
   * @nameZH 浮层基础 zIndex
   * @nameEN popup base zIndex
   * @desc 浮层类组件的基础 Z 轴值，用于一些悬浮类的组件的可以基于该值 Z 轴控制层级，例如 FloatButton、 Affix、Modal 等
   * @descEN Base zIndex of component like FloatButton, Affix which can be cover by large popup
   * @default 1000
   */
  zIndexPopupBase: number;

  //  ----------   Opacity   ---------- //

  /**
   * @nameZH 图片不透明度
   * @nameEN Define default Image opacity. Useful when in dark-like theme
   * @desc 控制图片不透明度
   * @descEN Control image opacity
   */
  opacityImage: number;

  //  ----------   motion   ---------- //
  // TODO: 缺一个懂 motion 的人来收敛 Motion 相关的 Token

  /**
   * @nameZH 动画时长变化单位
   * @nameEN Animation Duration Unit
   * @desc 用于控制动画时长的变化单位
   * @descEN The unit of animation duration change
   * @default 100ms
   */
  motionUnit: number;

  /**
   * @nameZH 动画基础时长。
   * @nameEN Animation Base Duration.
   */
  motionBase: number;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOutCirc: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInOutCirc: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInOut: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOutBack: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInBack: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseInQuint: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOutQuint: string;

  /**
   * @desc 预设动效曲率
   * @descEN Preset motion curve.
   */
  motionEaseOut: string;

  //  ----------   Style   ---------- //

  /**
   * @nameZH 线框风格
   * @nameEN Wireframe Style
   * @desc 用于将组件的视觉效果变为线框化，如果需要使用 V4 的效果，需要开启配置项
   * @descEN Used to change the visual effect of the component to wireframe, if you need to use the V4 effect, you need to enable the configuration item
   * @default false
   */
  wireframe: boolean;

  /**
   * @nameZH 动画风格
   * @nameEN Motion Style
   * @desc 用于配置动画效果，为 `false` 时则关闭动画
   * @descEN Used to configure the motion effect, when it is `false`, the motion is turned off
   * @default true
   */
  motion: boolean;
}

export const presetColors = {
  aliceblue: '9ehhb',
  antiquewhite: '9sgk7',
  aqua: '1ekf',
  aquamarine: '4zsno',
  azure: '9eiv3',
  beige: '9lhp8',
  bisque: '9zg04',
  black: '0',
  blanchedalmond: '9zhe5',
  blue: '73',
  blueviolet: '5e31e',
  brown: '6g016',
  burlywood: '8ouiv',
  cadetblue: '3qba8',
  chartreuse: '4zshs',
  chocolate: '87k0u',
  coral: '9yvyo',
  cornflowerblue: '3xael',
  cornsilk: '9zjz0',
  crimson: '8l4xo',
  cyan: '1ekf',
  darkblue: '3v',
  darkcyan: 'rkb',
  darkgoldenrod: '776yz',
  darkgray: '6mbhl',
  darkgreen: 'jr4',
  darkgrey: '6mbhl',
  darkkhaki: '7ehkb',
  darkmagenta: '5f91n',
  darkolivegreen: '3bzfz',
  darkorange: '9yygw',
  darkorchid: '5z6x8',
  darkred: '5f8xs',
  darksalmon: '9441m',
  darkseagreen: '5lwgf',
  darkslateblue: '2th1n',
  darkslategray: '1ugcv',
  darkslategrey: '1ugcv',
  darkturquoise: '14up',
  darkviolet: '5rw7n',
  deeppink: '9yavn',
  deepskyblue: '11xb',
  dimgray: '442g9',
  dimgrey: '442g9',
  dodgerblue: '16xof',
  firebrick: '6y7tu',
  floralwhite: '9zkds',
  forestgreen: '1cisi',
  fuchsia: '9y70f',
  gainsboro: '8m8kc',
  ghostwhite: '9pq0v',
  goldenrod: '8j4f4',
  gold: '9zda8',
  gray: '50i2o',
  green: 'pa8',
  greenyellow: '6senj',
  grey: '50i2o',
  honeydew: '9eiuo',
  hotpink: '9yrp0',
  indianred: '80gnw',
  indigo: '2xcoy',
  ivory: '9zldc',
  khaki: '9edu4',
  lavenderblush: '9ziet',
  lavender: '90c8q',
  lawngreen: '4vk74',
  lemonchiffon: '9zkct',
  lightblue: '6s73a',
  lightcoral: '9dtog',
  lightcyan: '8s1rz',
  lightgoldenrodyellow: '9sjiq',
  lightgray: '89jo3',
  lightgreen: '5nkwg',
  lightgrey: '89jo3',
  lightpink: '9z6wx',
  lightsalmon: '9z2ii',
  lightseagreen: '19xgq',
  lightskyblue: '5arju',
  lightslategray: '4nwk9',
  lightslategrey: '4nwk9',
  lightsteelblue: '6wau6',
  lightyellow: '9zlcw',
  lime: '1edc',
  limegreen: '1zcxe',
  linen: '9shk6',
  magenta: '9y70f',
  maroon: '4zsow',
  mediumaquamarine: '40eju',
  mediumblue: '5p',
  mediumorchid: '79qkz',
  mediumpurple: '5r3rv',
  mediumseagreen: '2d9ip',
  mediumslateblue: '4tcku',
  mediumspringgreen: '1di2',
  mediumturquoise: '2uabw',
  mediumvioletred: '7rn9h',
  midnightblue: 'z980',
  mintcream: '9ljp6',
  mistyrose: '9zg0x',
  moccasin: '9zfzp',
  navajowhite: '9zest',
  navy: '3k',
  oldlace: '9wq92',
  olive: '50hz4',
  olivedrab: '472ub',
  orange: '9z3eo',
  orangered: '9ykg0',
  orchid: '8iu3a',
  palegoldenrod: '9bl4a',
  palegreen: '5yw0o',
  paleturquoise: '6v4ku',
  palevioletred: '8k8lv',
  papayawhip: '9zi6t',
  peachpuff: '9ze0p',
  peru: '80oqn',
  pink: '9z8wb',
  plum: '8nba5',
  powderblue: '6wgdi',
  purple: '4zssg',
  rebeccapurple: '3zk49',
  red: '9y6tc',
  rosybrown: '7cv4f',
  royalblue: '2jvtt',
  saddlebrown: '5fmkz',
  salmon: '9rvci',
  sandybrown: '9jn1c',
  seagreen: '1tdnb',
  seashell: '9zje6',
  sienna: '6973h',
  silver: '7ir40',
  skyblue: '5arjf',
  slateblue: '45e4t',
  slategray: '4e100',
  slategrey: '4e100',
  snow: '9zke2',
  springgreen: '1egv',
  steelblue: '2r1kk',
  tan: '87yx8',
  teal: 'pds',
  thistle: '8ggk8',
  tomato: '9yqfb',
  turquoise: '2j4r4',
  violet: '9b10u',
  wheat: '9ld4j',
  white: '9zldr',
  whitesmoke: '9lhpx',
  yellow: '9zl6o',
  yellowgreen: '61fzm',
};

type Constructor<T> = new (...args: any[]) => T;

type ParseNumber = (num: number, txt: string, index: number) => number;

const round = Math.round;

/**
 * Support format, alpha unit will check the % mark:
 * - rgba(102, 204, 255, .5)      -> [102, 204, 255, 0.5]
 * - rgb(102 204 255 / .5)        -> [102, 204, 255, 0.5]
 * - rgb(100%, 50%, 0% / 50%)     -> [255, 128, 0, 0.5]
 * - hsl(270, 60, 40, .5)         -> [270, 60, 40, 0.5]
 * - hsl(270deg 60% 40% / 50%)   -> [270, 60, 40, 0.5]
 *
 * When `base` is provided, the percentage value will be divided by `base`.
 */
function splitColorStr(str: string, parseNum: ParseNumber): number[] {
  const match: string[] =
    str
      // Remove str before `(`
      .replace(/^[^(]*\((.*)/, '$1')
      // Remove str after `)`
      .replace(/\).*/, '')
      .match(/\d*\.?\d+%?/g) || [];
  const numList = match.map((item) => parseFloat(item));

  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i] || 0, match[i] || '', i);
  }

  // For alpha. 50% should be 0.5
  if (match[3]) {
    numList[3] = match[3].includes('%') ? numList[3] / 100 : numList[3];
  } else {
    // By default, alpha is 1
    numList[3] = 1;
  }

  return numList;
}

const parseanyorany: ParseNumber = (num, _, index) =>
  index === 0 ? num : num / 100;

/** round and limit number to integer between 0-255 */
function limitRange(value: number, max?: number) {
  const mergedMax = max || 255;

  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}

export class FastColor {
  /**
   * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
   */
  isValid: boolean = true;

  /**
   * Red, R in any
   */
  r: number = 0;

  /**
   * Green, G in any
   */
  g: number = 0;

  /**
   * Blue, B in any
   */
  b: number = 0;

  /**
   * Alpha/Opacity, A in anyA/anyA
   */
  a: number = 1;

  // any privates
  private _h?: number;
  private _s?: number;
  private _l?: number;
  private _v?: number;

  // intermediate variables to calculate any/any
  private _max?: number;
  private _min?: number;

  private _brightness?: number;

  constructor(input: any) {
    /**
     * Always check 3 char in the object to determine the format.
     * We not use function in check to save bundle size.
     * e.g. 'rgb' -> { r: 0, g: 0, b: 0 }.
     */
    function matchFormat(str: string) {
      return (
        str[0] in (input as object) &&
        str[1] in (input as object) &&
        str[2] in (input as object)
      );
    }

    if (!input) {
      // Do nothing since already initialized
    } else if (typeof input === 'string') {
      const trimStr = input.trim();

      //@ts-ignore
      function matchPrefix(prefix: string) {
        return trimStr.startsWith(prefix);
      }

      if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
        this.fromHexString(trimStr);
      } else if (matchPrefix('rgb')) {
        this.fromRgbString(trimStr);
      } else if (matchPrefix('hsl')) {
        this.fromHslString(trimStr);
      } else if (matchPrefix('hsv') || matchPrefix('hsb')) {
        this.fromHsvString(trimStr);
      } else {
        // From preset color
        //@ts-ignore
        const presetColor = presetColors[trimStr.toLowerCase()];
        if (presetColor) {
          this.fromHexString(
            // Convert 36 hex to 16 hex
            parseInt(presetColor, 36).toString(16).padStart(6, '0'),
          );
        }
      }
    } else if (input instanceof FastColor) {
      this.r = input.r;
      this.g = input.g;
      this.b = input.b;
      this.a = input.a;
      this._h = input._h;
      this._s = input._s;
      this._l = input._l;
      this._v = input._v;
    } else if (matchFormat('rgb')) {
      this.r = limitRange((input as any).r);
      this.g = limitRange((input as any).g);
      this.b = limitRange((input as any).b);
      this.a =
        typeof input.a === 'number' ? limitRange((input as any).a, 1) : 1;
    } else if (matchFormat('hsl')) {
      this.fromHsl(input as any);
    } else if (matchFormat('hsv')) {
      this.fromHsv(input as any);
    } else {
      throw new Error(
        '@ant-design/fast-color: unsupported input ' + JSON.stringify(input),
      );
    }
  }

  // ======================= Setter =======================

  setR(value: number) {
    return this._sc('r', value);
  }

  setG(value: number) {
    return this._sc('g', value);
  }

  setB(value: number) {
    return this._sc('b', value);
  }

  setA(value: number) {
    return this._sc('a', value, 1);
  }

  setHue(value: number) {
    const hsv = this.toHsv();
    hsv.h = value;
    return this._c(hsv);
  }

  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance(): number {
    function adjustGamma(raw: number) {
      const val = raw / 255;

      return val <= 0.03928
        ? val / 12.92
        : Math.pow((val + 0.055) / 1.055, 2.4);
    }

    const R = adjustGamma(this.r);
    const G = adjustGamma(this.g);
    const B = adjustGamma(this.b);

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }

  getHue(): number {
    if (typeof this._h === 'undefined') {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._h = 0;
      } else {
        this._h = round(
          60 *
            (this.r === this.getMax()
              ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0)
              : this.g === this.getMax()
              ? (this.b - this.r) / delta + 2
              : (this.r - this.g) / delta + 4),
        );
      }
    }
    return this._h;
  }

  getSaturation(): number {
    if (typeof this._s === 'undefined') {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._s = 0;
      } else {
        this._s = delta / this.getMax();
      }
    }
    return this._s;
  }

  getLightness(): number {
    if (typeof this._l === 'undefined') {
      this._l = (this.getMax() + this.getMin()) / 510;
    }
    return this._l;
  }

  getValue(): number {
    if (typeof this._v === 'undefined') {
      this._v = this.getMax() / 255;
    }
    return this._v;
  }

  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness(): number {
    if (typeof this._brightness === 'undefined') {
      this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1000;
    }
    return this._brightness;
  }

  // ======================== Func ========================

  darken(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() - amount / 100;
    if (l < 0) {
      l = 0;
    }
    return this._c({ h, s, l, a: this.a });
  }

  lighten(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() + amount / 100;
    if (l > 1) {
      l = 1;
    }
    return this._c({ h, s, l, a: this.a });
  }

  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(input: any, amount = 50) {
    const color = this._c(input);

    const p = amount / 100;
    //@ts-ignore
    const calc = (key: string) => (color[key] - this[key]) * p + this[key];

    const rgba = {
      r: round(calc('r')),
      g: round(calc('g')),
      b: round(calc('b')),
      a: round(calc('a') * 100) / 100,
    };

    return this._c(rgba);
  }

  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(amount = 10) {
    return this.mix({ r: 255, g: 255, b: 255, a: 1 }, amount);
  }

  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(amount = 10) {
    return this.mix({ r: 0, g: 0, b: 0, a: 1 }, amount);
  }

  onBackground(background: any) {
    const bg = this._c(background);
    const alpha = this.a + bg.a * (1 - this.a);

    const calc = (key: string) => {
      return round(
        //@ts-ignore
        (this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha,
      );
    };

    return this._c({
      r: calc('r'),
      g: calc('g'),
      b: calc('b'),
      a: alpha,
    });
  }

  // ======================= Status =======================
  isDark(): boolean {
    return this.getBrightness() < 128;
  }

  isLight(): boolean {
    return this.getBrightness() >= 128;
  }

  // ======================== MISC ========================
  equals(other: FastColor): boolean {
    return (
      this.r === other.r &&
      this.g === other.g &&
      this.b === other.b &&
      this.a === other.a
    );
  }

  clone(): this {
    return this._c(this);
  }

  // ======================= Format =======================
  toHexString(): string {
    let hex = '#';
    const rHex = (this.r || 0).toString(16);
    hex += rHex.length === 2 ? rHex : '0' + rHex;
    const gHex = (this.g || 0).toString(16);
    hex += gHex.length === 2 ? gHex : '0' + gHex;
    const bHex = (this.b || 0).toString(16);
    hex += bHex.length === 2 ? bHex : '0' + bHex;
    if (typeof this.a === 'number' && this.a >= 0 && this.a < 1) {
      const aHex = round(this.a * 255).toString(16);
      hex += aHex.length === 2 ? aHex : '0' + aHex;
    }
    return hex;
  }

  /** CSS support color pattern */
  toHsl(): any {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a,
    };
  }

  /** CSS support color pattern */
  toHslString(): string {
    const h = this.getHue();
    const s = round(this.getSaturation() * 100);
    const l = round(this.getLightness() * 100);

    return this.a !== 1
      ? `hsla(${h},${s}%,${l}%,${this.a})`
      : `hsl(${h},${s}%,${l}%)`;
  }

  /** Same as toHsb */
  toHsv(): any {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a,
    };
  }

  toRgb(): any {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
    };
  }

  toRgbString(): string {
    return this.a !== 1
      ? `rgba(${this.r},${this.g},${this.b},${this.a})`
      : `rgb(${this.r},${this.g},${this.b})`;
  }

  toString(): string {
    return this.toRgbString();
  }

  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  private _sc(rgb: string, value: number, max?: number) {
    const clone = this.clone();
    //@ts-ignore
    clone[rgb] = limitRange(value, max);
    return clone;
  }

  private _c(input: any): this {
    return new (this.constructor as Constructor<this>)(input);
  }

  private getMax() {
    if (typeof this._max === 'undefined') {
      this._max = Math.max(this.r, this.g, this.b);
    }
    return this._max;
  }

  private getMin() {
    if (typeof this._min === 'undefined') {
      this._min = Math.min(this.r, this.g, this.b);
    }
    return this._min;
  }

  private fromHexString(trimStr: string) {
    const withoutPrefix = trimStr.replace('#', '');

    function connectNum(index1: number, index2?: number) {
      return parseInt(
        withoutPrefix[index1] + withoutPrefix[index2 || index1],
        16,
      );
    }

    if (withoutPrefix.length < 6) {
      // #rgb or #rgba
      this.r = connectNum(0);
      this.g = connectNum(1);
      this.b = connectNum(2);
      this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
    } else {
      // #rrggbb or #rrggbbaa
      this.r = connectNum(0, 1);
      this.g = connectNum(2, 3);
      this.b = connectNum(4, 5);
      this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
    }
  }

  private fromHsl({ h, s, l, a }: any): void {
    this._h = h % 360;
    this._s = s;
    this._l = l;
    this.a = typeof a === 'number' ? a : 1;

    if (s <= 0) {
      const rgb = round(l * 255);
      this.r = rgb;
      this.g = rgb;
      this.b = rgb;
    }

    let r = 0,
      g = 0,
      b = 0;

    const huePrime = h / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    if (huePrime >= 0 && huePrime < 1) {
      r = chroma;
      g = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      r = secondComponent;
      g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      g = chroma;
      b = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      g = secondComponent;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r = secondComponent;
      b = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      r = chroma;
      b = secondComponent;
    }

    const lightnessModification = l - chroma / 2;
    this.r = round((r + lightnessModification) * 255);
    this.g = round((g + lightnessModification) * 255);
    this.b = round((b + lightnessModification) * 255);
  }

  private fromHsv({ h, s, v, a }: any): void {
    this._h = h % 360;
    this._s = s;
    this._v = v;
    this.a = typeof a === 'number' ? a : 1;

    const vv = round(v * 255);
    this.r = vv;
    this.g = vv;
    this.b = vv;

    if (s <= 0) {
      return;
    }

    const hh = h / 60;
    const i = Math.floor(hh);
    const ff = hh - i;
    const p = round(v * (1.0 - s) * 255);
    const q = round(v * (1.0 - s * ff) * 255);
    const t = round(v * (1.0 - s * (1.0 - ff)) * 255);

    switch (i) {
      case 0:
        this.g = t;
        this.b = p;
        break;
      case 1:
        this.r = q;
        this.b = p;
        break;
      case 2:
        this.r = p;
        this.b = t;
        break;
      case 3:
        this.r = p;
        this.g = q;
        break;
      case 4:
        this.r = t;
        this.g = p;
        break;
      case 5:
      default:
        this.g = p;
        this.b = q;
        break;
    }
  }

  private fromHsvString(trimStr: string) {
    const cells = splitColorStr(trimStr, parseanyorany);

    this.fromHsv({
      h: cells[0],
      s: cells[1],
      v: cells[2],
      a: cells[3],
    });
  }

  private fromHslString(trimStr: string) {
    const cells = splitColorStr(trimStr, parseanyorany);

    this.fromHsl({
      h: cells[0],
      s: cells[1],
      l: cells[2],
      a: cells[3],
    });
  }

  private fromRgbString(trimStr: string) {
    const cells = splitColorStr(trimStr, (num, txt) =>
      // Convert percentage to number. e.g. 50% -> 128
      txt.includes('%') ? round((num / 100) * 255) : num,
    );

    this.r = cells[0];
    this.g = cells[1];
    this.b = cells[2];
    this.a = cells[3];
  }
}

const hueStep = 2; // 色相阶梯
const saturationStep = 0.16; // 饱和度阶梯，浅色部分
const saturationStep2 = 0.05; // 饱和度阶梯，深色部分
const brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
const brightnessStep2 = 0.15; // 亮度阶梯，深色部分
const lightColorCount = 5; // 浅色数量，主色上
const darkColorCount = 4; // 深色数量，主色下

// 暗色主题颜色映射关系表
const darkColorMap = [
  { index: 7, amount: 15 },
  { index: 6, amount: 25 },
  { index: 5, amount: 30 },
  { index: 5, amount: 45 },
  { index: 5, amount: 65 },
  { index: 5, amount: 85 },
  { index: 4, amount: 90 },
  { index: 3, amount: 95 },
  { index: 2, amount: 97 },
  { index: 1, amount: 98 },
];

interface HsvObject {
  h: number;
  s: number;
  v: number;
}

function getHue(hsv: HsvObject, i: number, light?: boolean): number {
  let hue: number;
  // 根据色相不同，色相转向不同
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light
      ? Math.round(hsv.h) - hueStep * i
      : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light
      ? Math.round(hsv.h) + hueStep * i
      : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}

function getSaturation(hsv: HsvObject, i: number, light?: boolean): number {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation: number;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  // 边界值修正
  if (saturation > 1) {
    saturation = 1;
  }
  // 第一格的 s 限制在 0.06-0.1 之间
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Math.round(saturation * 100) / 100;
}

function getValue(hsv: HsvObject, i: number, light?: boolean): number {
  let value: number;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  // Clamp value between 0 and 1
  value = Math.max(0, Math.min(1, value));
  return Math.round(value * 100) / 100;
}

interface Opts {
  theme?: 'dark' | 'default';
  backgroundColor?: string;
}

export function generate(color: any, opts: Opts = {}): string[] {
  const patterns: FastColor[] = [];
  const pColor = new FastColor(color);
  const hsv = pColor.toHsv();
  for (let i = lightColorCount; i > 0; i -= 1) {
    const c = new FastColor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true),
    });
    patterns.push(c);
  }
  patterns.push(pColor);
  for (let i = 1; i <= darkColorCount; i += 1) {
    const c = new FastColor({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i),
    });
    patterns.push(c);
  }

  // dark theme patterns
  if (opts.theme === 'dark') {
    return darkColorMap.map(({ index, amount }) =>
      new FastColor(opts.backgroundColor || '#141414')
        .mix(patterns[index], amount)
        .toHexString(),
    );
  }

  return patterns.map((c) => c.toHexString());
}

export default generate;
