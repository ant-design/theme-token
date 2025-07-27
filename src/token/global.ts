export const global = {
  '--name': 'text-code-s',
  /** 无间距-none 0 */
  '--margin-none': '0',
  /** 组件内-xs 2 */
  '--margin-component-xs': '2px',
  /** 组件内-sm 4 */
  '--margin-component-sm': '4px',
  /** 组件内-base 8 */
  '--margin-component-base': '8px',
  /** 组件内-lg 12 */
  '--margin-component-lg': '12px',
  /** 区块内-xs 4 */
  '--margin-block-xs': '4px',
  /** 区块内-sm 8 */
  '--margin-block-sm': '8px',
  /** 区块内-base 12 */
  '--margin-block-base': '12px',
  /** 区块内-xl 16 */
  '--margin-block-xl': '16px',
  /** 区块间-2xs 4 */
  '--margin-section-2xs': '4px',
  /** 区块间-xs 8 */
  '--margin-section-xs': '8px',
  /** 区块间-sm 16 */
  '--margin-section-sm': '16px',
  /** 区块间-base 24 */
  '--margin-section-base': '24px',
  /** 区块间-lg 32 */
  '--margin-section-lg': '32px',
  /** 区块间-xl 40 */
  '--margin-section-xl': '40px',
  /** --gray-文本/默认 */
  '--gray-text': '@color-gray-a12',
  /** --gray-文本-兼容旧版 */
  '--gray-text-default': '@color-gray-text',
  /** --gray-文本/次要 */
  '--gray-text-secondary': '@color-gray-a11',
  /** --gray-文本/浅色注释 */
  '--gray-text-light': '@color-gray-a9',
  /** --gray-文本/不可用 */
  '--gray-text-disabled': '@color-gray-a8',
  /** --gray-控件填充/主按钮 */
  '--gray-control-fill-primary': '@color-gray-9',
  /** --gray-控件填充/主按钮-悬停 */
  '--gray-control-fill-primary-hover': '@color-gray-10',
  /** --gray-控件填充/主按钮-按下.激活 */
  '--gray-control-fill-primary-active': '@color-gray-10',
  /** --gray-控件填充/次按钮 */
  '--gray-control-fill-secondary': '@color-gray-a3',
  /** --gray-控件填充/次按钮-悬停 */
  '--gray-control-fill-secondary-hover': '@color-gray-a4',
  /** --gray-控件填充/次按钮-按下.激活 */
  '--gray-control-fill-secondary-active': '@color-gray-a5',
  /** --gray-控件填充/gost按钮-按下.激活 */
  '--gray-control-fill-ghost-active': '@color-gray-a4',
  /** --gray-控件填充/标签 */
  '--gray-control-fill-tag': '@color-gray-4',
  /** --gray-控件填充/按下.激活 */
  '--gray-control-fill-active': '@color-gray-a3',
  /** --gray-控件填充/不可用 */
  '--gray-control-fill-disabled': '@color-gray-3',
  /** --gray-控件填充/悬停 */
  '--gray-control-fill-hover': '@color-gray-a3',
  /** --gray-边线/控件按下.激活 */
  '--gray-border-active': '@color-gray-9',
  /** Gray 兼容性变量 (直接使用 globalReccomend.less 中的值) */
  '--gray-border-dark': 'rgba(0, 9, 50, 12.16%)',
  /** --gray-边线/浅 */
  '--gray-border-light': '@color-gray-a3',
  /** --gray-背景/提示块 */
  '--gray-bg-tip': '@color-gray-a3',
  '--gray-bg-page-dark': 'rgba(239, 240, 243, 100%)',
  /** --gray-背景/浅色卡片 */
  '--gray-bg-card-light': '@color-gray-a2',
  /** --gray-背景/白色卡片 */
  '--gray-bg-card-white': '#FFFFFF',
  /** --gray-背景/页面 */
  '--gray-bg-page': '@color-gray-2',
  /** --gray-背景/页面-浅 */
  '--gray-bg-page-light': '@color-gray-1',
  /** --blue-文本/反色 */
  '--blue-text-contrast': '#FFFFFF',
  '--blue-text': 'rgba(0, 147, 237, 100%)',
  /** --blue-文本/次要 */
  '--blue-text-secondary': '@color-blue-a11',
  /** --blue-文本/浅色注释 */
  '--blue-text-light': '@color-blue-a9',
  /** --blue-文本/不可用 */
  '--blue-text-disabled': '@color-blue-a8',
  /** --blue-控件填充/主按钮 */
  '--blue-control-fill-primary': '@color-blue-9',
  /** --blue-控件填充/主按钮-悬停 */
  '--blue-control-fill-primary-hover': '@color-blue-10',
  /** --blue-控件填充/主按钮-按下.激活 */
  '--blue-control-fill-primary-active': '@color-blue-10',
  /** --blue-控件填充/次按钮 */
  '--blue-control-fill-secondary': '@color-blue-a3',
  /** --blue-控件填充/次按钮-悬停 */
  '--blue-control-fill-secondary-hover': '@color-blue-a4',
  /** --blue-控件填充/次按钮-按下.激活 */
  '--blue-control-fill-secondary-active': '@color-blue-a5',
  /** --blue-控件填充/gost按钮-按下.激活 */
  '--blue-control-fill-ghost-active': '@color-blue-a4',
  /** --blue-控件填充/标签 */
  '--blue-control-fill-tag': '@color-blue-4',
  /** --blue-控件填充/按下.激活 */
  '--blue-control-fill-active': '@color-blue-a3',
  /** --blue-控件填充/不可用 */
  '--blue-control-fill-disabled': '@color-blue-3',
  /** --blue-控件填充/悬停 */
  '--blue-control-fill-hover': '@color-blue-a3',
  /** --blue-边线/控件按下.激活 */
  '--blue-border-active': '@color-blue-9',
  /** --blue-边线/深 */
  '--blue-border-dark': '@color-blue-a5',
  /** --blue-边线/浅 */
  '--blue-border-light': '@color-blue-a3',
  /** --blue-背景/提示块 */
  '--blue-bg-tip': '@color-blue-a3',
  /** --blue-背景/页面深 */
  '--blue-bg-page-dark': '@color-blue-3',
  /** --blue-背景/浅色卡片 */
  '--blue-bg-card-light': '@color-blue-a2',
  /** --blue-背景/页面 */
  '--blue-bg-page': '@color-blue-2',
  /** --blue-背景/页面-浅 */
  '--blue-bg-page-light': '@color-blue-1',
  '--green-text': 'rgba(32, 150, 119, 100%)',
  /** --green-文本/次要 */
  '--green-text-secondary': '@color-green-a11',
  /** --green-文本/浅色注释 */
  '--green-text-light': '@color-green-a9',
  /** --green-文本/不可用 */
  '--green-text-disabled': '@color-green-a8',
  /** --green-控件填充/主按钮 */
  '--green-control-fill-primary': '@color-green-9',
  /** --green-控件填充/主按钮-悬停 */
  '--green-control-fill-primary-hover': '@color-green-10',
  /** --green-控件填充/主按钮-按下.激活 */
  '--green-control-fill-primary-active': '@color-green-10',
  /** --green-控件填充/次按钮 */
  '--green-control-fill-secondary': '@color-green-a3',
  /** --green-控件填充/次按钮-悬停 */
  '--green-control-fill-secondary-hover': '@color-green-a4',
  /** --green-控件填充/次按钮-按下.激活 */
  '--green-control-fill-secondary-active': '@color-green-a5',
  /** --green-控件填充/gost按钮-按下.激活 */
  '--green-control-fill-ghost-active': '@color-green-a4',
  /** --green-控件填充/标签 */
  '--green-control-fill-tag': '@color-green-4',
  /** --green-控件填充/按下.激活 */
  '--green-control-fill-active': '@color-green-a3',
  /** --green-控件填充/不可用 */
  '--green-control-fill-disabled': '@color-green-3',
  /** --green-控件填充/悬停 */
  '--green-control-fill-hover': '@color-green-a3',
  /** --green-边线/控件按下.激活 */
  '--green-border-active': '@color-green-9',
  /** --green-边线/深 */
  '--green-border-dark': '@color-green-a5',
  /** --green-边线/浅 */
  '--green-border-light': '@color-green-a3',
  /** --green-背景/提示块 */
  '--green-bg-tip': '@color-green-a3',
  /** --green-背景/页面深 */
  '--green-bg-page-dark': '@color-green-3',
  /** --green-背景/浅色卡片 */
  '--green-bg-card-light': '@color-green-a2',
  /** --green-背景/页面 */
  '--green-bg-page': '@color-green-2',
  /** --green-背景/页面-浅 */
  '--green-bg-page-light': '@color-green-1',
  '--orange-text': 'rgba(228, 158, 0, 100%)',
  /** --orange-文本/次要 */
  '--orange-text-secondary': '@color-orange-a11',
  /** --orange-文本/浅色注释 */
  '--orange-text-light': '@color-orange-a9',
  /** --orange-文本/不可用 */
  '--orange-text-disabled': '@color-orange-a8',
  /** --orange-控件填充/主按钮 */
  '--orange-control-fill-primary': '@color-orange-9',
  /** --orange-控件填充/主按钮-悬停 */
  '--orange-control-fill-primary-hover': '@color-orange-10',
  /** --orange-控件填充/主按钮-按下.激活 */
  '--orange-control-fill-primary-active': '@color-orange-10',
  /** --orange-控件填充/次按钮 */
  '--orange-control-fill-secondary': '@color-orange-a3',
  /** --orange-控件填充/次按钮-悬停 */
  '--orange-control-fill-secondary-hover': '@color-orange-a4',
  /** --orange-控件填充/次按钮-按下.激活 */
  '--orange-control-fill-secondary-active': '@color-orange-a5',
  /** --orange-控件填充/gost按钮-按下.激活 */
  '--orange-control-fill-ghost-active': '@color-orange-a4',
  /** --orange-控件填充/标签 */
  '--orange-control-fill-tag': '@color-orange-4',
  /** --orange-控件填充/按下.激活 */
  '--orange-control-fill-active': '@color-orange-a3',
  /** --orange-控件填充/不可用 */
  '--orange-control-fill-disabled': '@color-orange-3',
  /** --orange-控件填充/悬停 */
  '--orange-control-fill-hover': '@color-orange-a3',
  /** --orange-边线/控件按下.激活 */
  '--orange-border-active': '@color-orange-9',
  /** --orange-边线/深 */
  '--orange-border-dark': '@color-orange-a5',
  /** --orange-边线/浅 */
  '--orange-border-light': '@color-orange-a3',
  /** --orange-背景/提示块 */
  '--orange-bg-tip': '@color-orange-a3',
  /** --orange-背景/页面深 */
  '--orange-bg-page-dark': '@color-orange-3',
  /** --orange-背景/浅色卡片 */
  '--orange-bg-card-light': '@color-orange-a2',
  /** --orange-背景/页面 */
  '--orange-bg-page': '@color-orange-2',
  /** --orange-背景/页面-浅 */
  '--orange-bg-page-light': '@color-orange-1',
  '--red-text': 'rgba(215, 56, 64, 100%)',
  /** --red-文本/次要 */
  '--red-text-secondary': '@color-red-a11',
  /** --red-文本/浅色注释 */
  '--red-text-light': '@color-red-a9',
  /** --red-文本/不可用 */
  '--red-text-disabled': '@color-red-a8',
  /** --red-控件填充/主按钮 */
  '--red-control-fill-primary': '@color-red-9',
  /** --red-控件填充/主按钮-悬停 */
  '--red-control-fill-primary-hover': '@color-red-10',
  /** --red-控件填充/主按钮-按下.激活 */
  '--red-control-fill-primary-active': '@color-red-10',
  /** --red-控件填充/次按钮 */
  '--red-control-fill-secondary': '@color-red-a3',
  /** --red-控件填充/次按钮-悬停 */
  '--red-control-fill-secondary-hover': '@color-red-a4',
  /** --red-控件填充/次按钮-按下.激活 */
  '--red-control-fill-secondary-active': '@color-red-a5',
  /** --red-控件填充/gost按钮-按下.激活 */
  '--red-control-fill-ghost-active': '@color-red-a4',
  /** --red-控件填充/标签 */
  '--red-control-fill-tag': '@color-red-4',
  /** --red-控件填充/按下.激活 */
  '--red-control-fill-active': '@color-red-a3',
  /** --red-控件填充/不可用 */
  '--red-control-fill-disabled': '@color-red-3',
  /** --red-控件填充/悬停 */
  '--red-control-fill-hover': '@color-red-a3',
  /** --red-边线/控件按下.激活 */
  '--red-border-active': '@color-red-9',
  /** --red-边线/深 */
  '--red-border-dark': '@color-red-a5',
  /** --red-边线/浅 */
  '--red-border-light': '@color-red-a3',
  /** --red-背景/提示块 */
  '--red-bg-tip': '@color-red-a3',
  /** --red-背景/页面深 */
  '--red-bg-page-dark': '@color-red-3',
  /** --red-背景/浅色卡片 */
  '--red-bg-card-light': '@color-red-a2',
  /** --red-背景/页面 */
  '--red-bg-page': '@color-red-2',
  /** --red-背景/页面-浅 */
  '--red-bg-page-light': '@color-red-1',
  /** --sub0-文本/默认 */
  '--sub0-text': '@color-sub0-a12',
  /** --sub0-文本/次要 */
  '--sub0-text-secondary': '@color-sub0-a11',
  /** --sub0-文本/浅色注释 */
  '--sub0-text-light': '@color-sub0-a9',
  /** --sub0-文本/不可用 */
  '--sub0-text-disabled': '@color-sub0-a8',
  /** --sub0-控件填充/主按钮 */
  '--sub0-control-fill-primary': '@color-sub0-9',
  /** --sub0-控件填充/主按钮-悬停 */
  '--sub0-control-fill-primary-hover': '@color-sub0-10',
  /** --sub0-控件填充/主按钮-按下.激活 */
  '--sub0-control-fill-primary-active': '@color-sub0-10',
  /** --sub0-控件填充/次按钮 */
  '--sub0-control-fill-secondary': '@color-sub0-a3',
  /** --sub0-控件填充/次按钮-悬停 */
  '--sub0-control-fill-secondary-hover': '@color-sub0-a4',
  /** --sub0-控件填充/次按钮-按下.激活 */
  '--sub0-control-fill-secondary-active': '@color-sub0-a5',
  /** --sub0-控件填充/gost按钮-按下.激活 */
  '--sub0-control-fill-ghost-active': '@color-sub0-a4',
  /** --sub0-控件填充/标签 */
  '--sub0-control-fill-tag': '@color-sub0-4',
  /** --sub0-控件填充/按下.激活 */
  '--sub0-control-fill-active': '@color-sub0-a3',
  /** --sub0-控件填充/不可用 */
  '--sub0-control-fill-disabled': '@color-sub0-3',
  /** --sub0-控件填充/悬停 */
  '--sub0-control-fill-hover': '@color-sub0-a3',
  /** --sub0-边线/控件按下.激活 */
  '--sub0-border-active': '@color-sub0-9',
  /** --sub0-边线/深 */
  '--sub0-border-dark': '@color-sub0-a5',
  /** --sub0-边线/浅 */
  '--sub0-border-light': '@color-sub0-a3',
  /** --sub0-背景/提示块 */
  '--sub0-bg-tip': '@color-sub0-a3',
  /** --sub0-背景/页面深 */
  '--sub0-bg-page-dark': '@color-sub0-3',
  /** --sub0-背景/浅色卡片 */
  '--sub0-bg-card-light': '@color-sub0-a2',
  /** --sub0-背景/页面 */
  '--sub0-bg-page': '@color-sub0-2',
  /** --sub0-背景/页面-浅 */
  '--sub0-bg-page-light': '@color-sub0-1',
  /** --sub1-文本/默认 */
  '--sub1-text': '@color-sub1-a12',
  /** --sub1-文本/次要 */
  '--sub1-text-secondary': '@color-sub1-a11',
  /** --sub1-文本/浅色注释 */
  '--sub1-text-light': '@color-sub1-a9',
  /** --sub1-文本/不可用 */
  '--sub1-text-disabled': '@color-sub1-a8',
  /** --sub1-控件填充/主按钮 */
  '--sub1-control-fill-primary': '@color-sub1-9',
  /** --sub1-控件填充/主按钮-悬停 */
  '--sub1-control-fill-primary-hover': '@color-sub1-10',
  /** --sub1-控件填充/主按钮-按下.激活 */
  '--sub1-control-fill-primary-active': '@color-sub1-10',
  /** --sub1-控件填充/次按钮 */
  '--sub1-control-fill-secondary': '@color-sub1-a3',
  /** --sub1-控件填充/次按钮-悬停 */
  '--sub1-control-fill-secondary-hover': '@color-sub1-a4',
  /** --sub1-控件填充/次按钮-按下.激活 */
  '--sub1-control-fill-secondary-active': '@color-sub1-a5',
  /** --sub1-控件填充/gost按钮-按下.激活 */
  '--sub1-control-fill-ghost-active': '@color-sub1-a4',
  /** --sub1-控件填充/标签 */
  '--sub1-control-fill-tag': '@color-sub1-4',
  /** --sub1-控件填充/按下.激活 */
  '--sub1-control-fill-active': '@color-sub1-a3',
  /** --sub1-控件填充/不可用 */
  '--sub1-control-fill-disabled': '@color-sub1-3',
  /** --sub1-控件填充/悬停 */
  '--sub1-control-fill-hover': '@color-sub1-a3',
  /** --sub1-边线/控件按下.激活 */
  '--sub1-border-active': '@color-sub1-9',
  /** --sub1-边线/深 */
  '--sub1-border-dark': '@color-sub1-a5',
  /** --sub1-边线/浅 */
  '--sub1-border-light': '@color-sub1-a3',
  /** --sub1-背景/提示块 */
  '--sub1-bg-tip': '@color-sub1-a3',
  /** --sub1-背景/页面深 */
  '--sub1-bg-page-dark': '@color-sub1-3',
  /** --sub1-背景/浅色卡片 */
  '--sub1-bg-card-light': '@color-sub1-a2',
  /** --sub1-背景/页面 */
  '--sub1-bg-page': '@color-sub1-2',
  /** --sub1-背景/页面-浅 */
  '--sub1-bg-page-light': '@color-sub1-1',
  /** --sub2-文本/默认 */
  '--sub2-text': '@color-sub2-a12',
  /** --sub2-文本/次要 */
  '--sub2-text-secondary': '@color-sub2-a11',
  /** --sub2-文本/浅色注释 */
  '--sub2-text-light': '@color-sub2-a9',
  /** --sub2-文本/不可用 */
  '--sub2-text-disabled': '@color-sub2-a8',
  /** --sub2-控件填充/主按钮 */
  '--sub2-control-fill-primary': '@color-sub2-9',
  /** --sub2-控件填充/主按钮-悬停 */
  '--sub2-control-fill-primary-hover': '@color-sub2-10',
  /** --sub2-控件填充/主按钮-按下.激活 */
  '--sub2-control-fill-primary-active': '@color-sub2-10',
  /** --sub2-控件填充/次按钮 */
  '--sub2-control-fill-secondary': '@color-sub2-a3',
  /** --sub2-控件填充/次按钮-悬停 */
  '--sub2-control-fill-secondary-hover': '@color-sub2-a4',
  /** --sub2-控件填充/次按钮-按下.激活 */
  '--sub2-control-fill-secondary-active': '@color-sub2-a5',
  /** --sub2-控件填充/gost按钮-按下.激活 */
  '--sub2-control-fill-ghost-active': '@color-sub2-a4',
  /** --sub2-控件填充/标签 */
  '--sub2-control-fill-tag': '@color-sub2-4',
  /** --sub2-控件填充/按下.激活 */
  '--sub2-control-fill-active': '@color-sub2-a3',
  /** --sub2-控件填充/不可用 */
  '--sub2-control-fill-disabled': '@color-sub2-3',
  /** --sub2-控件填充/悬停 */
  '--sub2-control-fill-hover': '@color-sub2-a3',
  /** --sub2-边线/控件按下.激活 */
  '--sub2-border-active': '@color-sub2-9',
  /** --sub2-边线/深 */
  '--sub2-border-dark': '@color-sub2-a5',
  /** --sub2-边线/浅 */
  '--sub2-border-light': '@color-sub2-a3',
  /** --sub2-背景/提示块 */
  '--sub2-bg-tip': '@color-sub2-a3',
  /** --sub2-背景/页面深 */
  '--sub2-bg-page-dark': '@color-sub2-3',
  /** --sub2-背景/浅色卡片 */
  '--sub2-bg-card-light': '@color-sub2-a2',
  /** --sub2-背景/页面 */
  '--sub2-bg-page': '@color-sub2-2',
  /** --sub2-背景/页面-浅 */
  '--sub2-bg-page-light': '@color-sub2-1',
  /** --sub3-文本/默认 */
  '--sub3-text': '@color-sub3-a12',
  /** --sub3-文本/次要 */
  '--sub3-text-secondary': '@color-sub3-a11',
  /** --sub3-文本/浅色注释 */
  '--sub3-text-light': '@color-sub3-a9',
  /** --sub3-文本/不可用 */
  '--sub3-text-disabled': '@color-sub3-a8',
  /** --sub3-控件填充/主按钮 */
  '--sub3-control-fill-primary': '@color-sub3-9',
  /** --sub3-控件填充/主按钮-悬停 */
  '--sub3-control-fill-primary-hover': '@color-sub3-10',
  /** --sub3-控件填充/主按钮-按下.激活 */
  '--sub3-control-fill-primary-active': '@color-sub3-10',
  /** --sub3-控件填充/次按钮 */
  '--sub3-control-fill-secondary': '@color-sub3-a3',
  /** --sub3-控件填充/次按钮-悬停 */
  '--sub3-control-fill-secondary-hover': '@color-sub3-a4',
  /** --sub3-控件填充/次按钮-按下.激活 */
  '--sub3-control-fill-secondary-active': '@color-sub3-a5',
  /** --sub3-控件填充/gost按钮-按下.激活 */
  '--sub3-control-fill-ghost-active': '@color-sub3-a4',
  /** --sub3-控件填充/标签 */
  '--sub3-control-fill-tag': '@color-sub3-4',
  /** --sub3-控件填充/按下.激活 */
  '--sub3-control-fill-active': '@color-sub3-a3',
  /** --sub3-控件填充/不可用 */
  '--sub3-control-fill-disabled': '@color-sub3-3',
  /** --sub3-控件填充/悬停 */
  '--sub3-control-fill-hover': '@color-sub3-a3',
  /** --sub3-边线/控件按下.激活 */
  '--sub3-border-active': '@color-sub3-9',
  /** --sub3-边线/深 */
  '--sub3-border-dark': '@color-sub3-a5',
  /** --sub3-边线/浅 */
  '--sub3-border-light': '@color-sub3-a3',
  /** --sub3-背景/提示块 */
  '--sub3-bg-tip': '@color-sub3-a3',
  /** --sub3-背景/页面深 */
  '--sub3-bg-page-dark': '@color-sub3-3',
  /** --sub3-背景/浅色卡片 */
  '--sub3-bg-card-light': '@color-sub3-a2',
  /** --sub3-背景/页面 */
  '--sub3-bg-page': '@color-sub3-2',
  /** --sub3-背景/页面-浅 */
  '--sub3-bg-page-light': '@color-sub3-1',
  /** --sub4-文本/默认 */
  '--sub4-text': '@color-sub4-a12',
  /** --sub4-文本/次要 */
  '--sub4-text-secondary': '@color-sub4-a11',
  /** --sub4-文本/浅色注释 */
  '--sub4-text-light': '@color-sub4-a9',
  /** --sub4-文本/不可用 */
  '--sub4-text-disabled': '@color-sub4-a8',
  /** --sub4-控件填充/主按钮 */
  '--sub4-control-fill-primary': '@color-sub4-9',
  /** --sub4-控件填充/主按钮-悬停 */
  '--sub4-control-fill-primary-hover': '@color-sub4-10',
  /** --sub4-控件填充/主按钮-按下.激活 */
  '--sub4-control-fill-primary-active': '@color-sub4-10',
  /** --sub4-控件填充/次按钮 */
  '--sub4-control-fill-secondary': '@color-sub4-a3',
  /** --sub4-控件填充/次按钮-悬停 */
  '--sub4-control-fill-secondary-hover': '@color-sub4-a4',
  /** --sub4-控件填充/次按钮-按下.激活 */
  '--sub4-control-fill-secondary-active': '@color-sub4-a5',
  /** --sub4-控件填充/gost按钮-按下.激活 */
  '--sub4-control-fill-ghost-active': '@color-sub4-a4',
  /** --sub4-控件填充/标签 */
  '--sub4-control-fill-tag': '@color-sub4-4',
  /** --sub4-控件填充/按下.激活 */
  '--sub4-control-fill-active': '@color-sub4-a3',
  /** --sub4-控件填充/不可用 */
  '--sub4-control-fill-disabled': '@color-sub4-3',
  /** --sub4-控件填充/悬停 */
  '--sub4-control-fill-hover': '@color-sub4-a3',
  /** --sub4-边线/控件按下.激活 */
  '--sub4-border-active': '@color-sub4-9',
  /** --sub4-边线/深 */
  '--sub4-border-dark': '@color-sub4-a5',
  /** --sub4-边线/浅 */
  '--sub4-border-light': '@color-sub4-a3',
  /** --sub4-背景/提示块 */
  '--sub4-bg-tip': '@color-sub4-a3',
  /** --sub4-背景/页面深 */
  '--sub4-bg-page-dark': '@color-sub4-3',
  /** --sub4-背景/浅色卡片 */
  '--sub4-bg-card-light': '@color-sub4-a2',
  /** --sub4-背景/页面 */
  '--sub4-bg-page': '@color-sub4-2',
  /** --sub4-背景/页面-浅 */
  '--sub4-bg-page-light': '@color-sub4-1',
  /** --sub5-文本/默认 */
  '--sub5-text': '@color-sub5-a12',
  /** --sub5-文本/次要 */
  '--sub5-text-secondary': '@color-sub5-a11',
  /** --sub5-文本/浅色注释 */
  '--sub5-text-light': '@color-sub5-a9',
  /** --sub5-文本/不可用 */
  '--sub5-text-disabled': '@color-sub5-a8',
  /** --sub5-控件填充/主按钮 */
  '--sub5-control-fill-primary': '@color-sub5-9',
  /** --sub5-控件填充/主按钮-悬停 */
  '--sub5-control-fill-primary-hover': '@color-sub5-10',
  /** --sub5-控件填充/主按钮-按下.激活 */
  '--sub5-control-fill-primary-active': '@color-sub5-10',
  /** --sub5-控件填充/次按钮 */
  '--sub5-control-fill-secondary': '@color-sub5-a3',
  /** --sub5-控件填充/次按钮-悬停 */
  '--sub5-control-fill-secondary-hover': '@color-sub5-a4',
  /** --sub5-控件填充/次按钮-按下.激活 */
  '--sub5-control-fill-secondary-active': '@color-sub5-a5',
  /** --sub5-控件填充/gost按钮-按下.激活 */
  '--sub5-control-fill-ghost-active': '@color-sub5-a4',
  /** --sub5-控件填充/标签 */
  '--sub5-control-fill-tag': '@color-sub5-4',
  /** --sub5-控件填充/按下.激活 */
  '--sub5-control-fill-active': '@color-sub5-a3',
  /** --sub5-控件填充/不可用 */
  '--sub5-control-fill-disabled': '@color-sub5-3',
  /** --sub5-控件填充/悬停 */
  '--sub5-control-fill-hover': '@color-sub5-a3',
  /** --sub5-边线/控件按下.激活 */
  '--sub5-border-active': '@color-sub5-9',
  /** --sub5-边线/深 */
  '--sub5-border-dark': '@color-sub5-a5',
  /** --sub5-边线/浅 */
  '--sub5-border-light': '@color-sub5-a3',
  /** --sub5-背景/提示块 */
  '--sub5-bg-tip': '@color-sub5-a3',
  /** --sub5-背景/页面深 */
  '--sub5-bg-page-dark': '@color-sub5-3',
  /** --sub5-背景/浅色卡片 */
  '--sub5-bg-card-light': '@color-sub5-a2',
  /** --sub5-背景/页面 */
  '--sub5-bg-page': '@color-sub5-2',
  /** --sub5-背景/页面-浅 */
  '--sub5-bg-page-light': '@color-sub5-1',
  /** --sub6-文本/默认 */
  '--sub6-text': '@color-sub6-a12',
  /** --sub6-文本/次要 */
  '--sub6-text-secondary': '@color-sub6-a11',
  /** --sub6-文本/浅色注释 */
  '--sub6-text-light': '@color-sub6-a9',
  /** --sub6-文本/不可用 */
  '--sub6-text-disabled': '@color-sub6-a8',
  /** --sub6-控件填充/主按钮 */
  '--sub6-control-fill-primary': '@color-sub6-9',
  /** --sub6-控件填充/主按钮-悬停 */
  '--sub6-control-fill-primary-hover': '@color-sub6-10',
  /** --sub6-控件填充/主按钮-按下.激活 */
  '--sub6-control-fill-primary-active': '@color-sub6-10',
  /** --sub6-控件填充/次按钮 */
  '--sub6-control-fill-secondary': '@color-sub6-a3',
  /** --sub6-控件填充/次按钮-悬停 */
  '--sub6-control-fill-secondary-hover': '@color-sub6-a4',
  /** --sub6-控件填充/次按钮-按下.激活 */
  '--sub6-control-fill-secondary-active': '@color-sub6-a5',
  /** --sub6-控件填充/gost按钮-按下.激活 */
  '--sub6-control-fill-ghost-active': '@color-sub6-a4',
  /** --sub6-控件填充/标签 */
  '--sub6-control-fill-tag': '@color-sub6-4',
  /** --sub6-控件填充/按下.激活 */
  '--sub6-control-fill-active': '@color-sub6-a3',
  /** --sub6-控件填充/不可用 */
  '--sub6-control-fill-disabled': '@color-sub6-3',
  /** --sub6-控件填充/悬停 */
  '--sub6-control-fill-hover': '@color-sub6-a3',
  /** --sub6-边线/控件按下.激活 */
  '--sub6-border-active': '@color-sub6-9',
  /** --sub6-边线/深 */
  '--sub6-border-dark': '@color-sub6-a5',
  /** --sub6-边线/浅 */
  '--sub6-border-light': '@color-sub6-a3',
  /** --sub6-背景/提示块 */
  '--sub6-bg-tip': '@color-sub6-a3',
  /** --sub6-背景/页面深 */
  '--sub6-bg-page-dark': '@color-sub6-3',
  /** --sub6-背景/浅色卡片 */
  '--sub6-bg-card-light': '@color-sub6-a2',
  /** --sub6-背景/页面 */
  '--sub6-bg-page': '@color-sub6-2',
  /** --sub6-背景/页面-浅 */
  '--sub6-bg-page-light': '@color-sub6-1',
  /** --sub7-文本/默认 */
  '--sub7-text': '@color-sub7-a12',
  /** --sub7-文本/次要 */
  '--sub7-text-secondary': '@color-sub7-a11',
  /** --sub7-文本/浅色注释 */
  '--sub7-text-light': '@color-sub7-a9',
  /** --sub7-文本/不可用 */
  '--sub7-text-disabled': '@color-sub7-a8',
  /** --sub7-控件填充/主按钮 */
  '--sub7-control-fill-primary': '@color-sub7-9',
  /** --sub7-控件填充/主按钮-悬停 */
  '--sub7-control-fill-primary-hover': '@color-sub7-10',
  /** --sub7-控件填充/主按钮-按下.激活 */
  '--sub7-control-fill-primary-active': '@color-sub7-10',
  /** --sub7-控件填充/次按钮 */
  '--sub7-control-fill-secondary': '@color-sub7-a3',
  /** --sub7-控件填充/次按钮-悬停 */
  '--sub7-control-fill-secondary-hover': '@color-sub7-a4',
  /** --sub7-控件填充/次按钮-按下.激活 */
  '--sub7-control-fill-secondary-active': '@color-sub7-a5',
  /** --sub7-控件填充/gost按钮-按下.激活 */
  '--sub7-control-fill-ghost-active': '@color-sub7-a4',
  /** --sub7-控件填充/标签 */
  '--sub7-control-fill-tag': '@color-sub7-4',
  /** --sub7-控件填充/按下.激活 */
  '--sub7-control-fill-active': '@color-sub7-a3',
  /** --sub7-控件填充/不可用 */
  '--sub7-control-fill-disabled': '@color-sub7-3',
  /** --sub7-控件填充/悬停 */
  '--sub7-control-fill-hover': '@color-sub7-a3',
  /** --sub7-边线/控件按下.激活 */
  '--sub7-border-active': '@color-sub7-9',
  /** --sub7-边线/深 */
  '--sub7-border-dark': '@color-sub7-a5',
  /** --sub7-边线/浅 */
  '--sub7-border-light': '@color-sub7-a3',
  /** --sub7-背景/提示块 */
  '--sub7-bg-tip': '@color-sub7-a3',
  /** --sub7-背景/页面深 */
  '--sub7-bg-page-dark': '@color-sub7-3',
  /** --sub7-背景/浅色卡片 */
  '--sub7-bg-card-light': '@color-sub7-a2',
  /** --sub7-背景/页面 */
  '--sub7-bg-page': '@color-sub7-2',
  /** --sub7-背景/页面-浅 */
  '--sub7-bg-page-light': '@color-sub7-1',
  /** Gray 色板 */
  '--gray-1': '#FDFEFE',
  '--gray-2': '#F7F8F9',
  '--gray-3': '#F1F2F3',
  '--gray-4': '#EAECEE',
  '--gray-5': '#E2E5E8',
  '--gray-6': '#D9DDE2',
  '--gray-7': '#C7CCD3',
  '--gray-8': '#B6BCC5',
  '--gray-9': '#14161C',
  '--gray-10': '#232831',
  '--gray-11': '#767E8B',
  '--gray-12': '#343A45',
  /** Gray 透明度色板 */
  '--gray-a1': 'rgba(20, 22, 28, 0.01)',
  '--gray-a2': 'rgba(20, 22, 28, 0.03)',
  '--gray-a3': 'rgba(20, 22, 28, 0.06)',
  '--gray-a4': 'rgba(20, 22, 28, 0.08)',
  '--gray-a5': 'rgba(20, 22, 28, 0.1)',
  '--gray-a6': '#rgba(20, 22, 28, 0.12)',
  '--gray-a7': '#C7CCD3',
  '--gray-a8': '#B6BCC5',
  '--gray-a9': '#14161C',
  '--gray-a10': '#232831',
  '--gray-a11': '#767E8B',
  '--gray-a12': '#343A45',
  /** Blue 色板 */
  '--blue-1': 'rgba(250, 253, 255, 1.00)',
  '--blue-2': 'rgba(242, 249, 255, 1.00)',
  '--blue-3': 'rgba(229, 242, 255, 1.00)',
  '--blue-4': 'rgba(218, 235, 255, 1.00)',
  '--blue-5': '#C7E2FF',
  '--blue-6': '#B2D5FF',
  '--blue-7': '#97C3FF',
  '--blue-8': 'rgba(119, 165, 255, 1.00)',
  '--blue-9': 'rgba(5, 24, 168, 1.00)',
  '--blue-10': 'rgba(15, 52, 191, 1.00)',
  '--blue-11': 'rgba(34, 88, 255, 1.00)',
  '--blue-12': 'rgba(4, 6, 159, 1.00)',
  /** Blue 透明度色板 */
  '--blue-a1': '#0080ff04',
  '--blue-a2': 'rgba(0, 138, 255, 0.05)',
  '--blue-a3': 'rgba(0, 128, 255, 0.10)',
  '--blue-a4': 'rgba(0, 118, 255, 0.15)',
  '--blue-a5': 'rgba(0, 103, 255, 0.20)',
  '--blue-a6': '#0074ff4d',
  '--blue-a7': '#006cff68',
  '--blue-a8': 'rgba(0, 87, 255, 0.53)',
  '--blue-a9': 'rgba(0, 19, 166, 0.98)',
  '--blue-a10': '#0077F4',
  '--blue-a11': '#006EE6',
  '--blue-a12': '#003066fc',
  /** Green 色板 */
  '--green-1': '#FAFFFB',
  '--green-2': '#F3FCF5',
  '--green-3': '#E3F9E8',
  '--green-4': '#D1F4DA',
  '--green-5': '#BBEDC8',
  '--green-6': '#9FE3B2',
  '--green-7': '#76D595',
  '--green-8': '#21C26C',
  '--green-9': '#1FC16B',
  '--green-10': '#00B560',
  '--green-11': '#008438',
  '--green-12': '#0E3F22',
  /** Green 透明度色板 */
  '--green-a1': '#00ff3305',
  '--green-a2': '#00c02b0c',
  '--green-a3': '#00c92e1c',
  '--green-a4': '#00c3322e',
  '--green-a5': '#00bc3144',
  '--green-a6': '#00b53360',
  '--green-a7': '#00b13a89',
  '--green-a8': '#00b956de',
  '--green-a9': '#00b857e0',
  '--green-a10': '#00B560',
  '--green-a11': '#008438',
  '--green-a12': '#003415f1',
  /** Orange 色板 */
  '--orange-1': '#FEFCFB',
  '--orange-2': '#FFF5F0',
  '--orange-3': '#FFEADD',
  '--orange-4': '#FFD7C0',
  '--orange-5': '#FFCAAC',
  '--orange-6': '#FFBA95',
  '--orange-7': '#FCA882',
  '--orange-8': '#F19063',
  '--orange-9': '#F76B15',
  '--orange-10': '#EB5D00',
  '--orange-11': '#D24D00',
  '--orange-12': '#572E1A',
  /** Orange 透明度色板 */
  '--orange-a1': '#c0400004',
  '--orange-a2': '#ff55000f',
  '--orange-a3': '#ff620022',
  '--orange-a4': '#ff5e003f',
  '--orange-a5': '#ff5d0053',
  '--orange-a6': '#ff5a016a',
  '--orange-a7': '#f94e007d',
  '--orange-a8': '#e84a009c',
  '--orange-a9': '#f65e00ea',
  '--orange-a10': '#EB5D00',
  '--orange-a11': '#D24D00',
  '--orange-a12': '#441600e5',
  /** Red 色板 */
  '--red-1': '#FFFCFB',
  '--red-2': '#FFF7F4',
  '--red-3': '#FFEBE4',
  '--red-4': '#FFD9CB',
  '--red-5': '#FFCAB7',
  '--red-6': '#FFBBA7',
  '--red-7': '#F8A892',
  '--red-8': '#EE8F74',
  '--red-9': '#EB572B',
  '--red-10': '#DE4817',
  '--red-11': '#D23F08',
  '--red-12': '#5A2A1D',
  /** Red 透明度色板 */
  '--red-a1': '#ff400004',
  '--red-a2': '#ff46000b',
  '--red-a3': '#ff43001b',
  '--red-a4': '#ff450034',
  '--red-a5': '#ff440048',
  '--red-a6': '#ff3a0058',
  '--red-a7': '#ef34006d',
  '--red-a8': '#e032008b',
  '--red-a9': '#e73500d4',
  '--red-a10': '#db3600e8',
  '--red-a11': '#d13900f7',
  '--red-a12': '#450f00e2',
  /** 辅助色板 辅0 sub0 */
  '--sub0-1': 'rgba(250, 253, 255, 1.00)',
  '--sub0-2': 'rgba(242, 249, 255, 1.00)',
  '--sub0-3': 'rgba(229, 242, 255, 1.00)',
  '--sub0-4': 'rgba(218, 235, 255, 1.00)',
  '--sub0-5': '#C7E2FF',
  '--sub0-6': '#B2D5FF',
  '--sub0-7': '#97C3FF',
  '--sub0-8': 'rgba(119, 165, 255, 1.00)',
  '--sub0-9': 'rgba(5, 24, 168, 1.00)',
  '--sub0-10': 'rgba(15, 52, 191, 1.00)',
  '--sub0-11': 'rgba(34, 88, 255, 1.00)',
  '--sub0-12': 'rgba(4, 6, 159, 1.00)',
  /** 辅助色板 辅0 sub0 透明度 */
  '--sub0-a1': '#0080ff04',
  '--sub0-a2': 'rgba(0, 138, 255, 0.05)',
  '--sub0-a3': 'rgba(0, 128, 255, 0.10)',
  '--sub0-a4': 'rgba(0, 118, 255, 0.15)',
  '--sub0-a5': 'rgba(0, 103, 255, 0.20)',
  '--sub0-a6': '#0074ff4d',
  '--sub0-a7': '#006cff68',
  '--sub0-a8': 'rgba(0, 87, 255, 0.53)',
  '--sub0-a9': 'rgba(0, 19, 166, 0.98)',
  '--sub0-a10': '#0077F4',
  '--sub0-a11': '#006EE6',
  '--sub0-a12': '#003066fc',
  /** 辅助色板 辅1 sub1 */
  '--sub1-1': '#FDFDFE',
  '--sub1-2': '#F7F9FF',
  '--sub1-3': '#EDF2FF',
  '--sub1-4': '#E0E9FF',
  '--sub1-5': '#D0DEFF',
  '--sub1-6': '#BED0FF',
  '--sub1-7': '#A8BDFE',
  '--sub1-8': '#89A3F5',
  '--sub1-9': '#4762EA',
  '--sub1-10': '#3F57CF',
  '--sub1-11': '#3F57CF',
  '--sub1-12': '#1F2C60',
  /** 辅助色板 辅1 sub1 透明度 */
  '--sub1-a1': '#00008002',
  '--sub1-a2': '#0040ff08',
  '--sub1-a3': '#0047ff12',
  '--sub1-a4': '#004bff1f',
  '--sub1-a5': '#004cff2f',
  '--sub1-a6': '#0047ff41',
  '--sub1-a7': '#003efd57',
  '--sub1-a8': '#0039ea76',
  '--sub1-a9': '#0026e2b8',
  '--sub1-a10': '#0020bfc0',
  '--sub1-a11': '#0020bfc0',
  '--sub1-a12': '#000f4ae0',
  /** 辅助色板 辅2 sub2 */
  '--sub2-1': '#FAFDFF',
  '--sub2-2': '#F1FAFF',
  '--sub2-3': '#E2F5FF',
  '--sub2-4': '#CDF0FF',
  '--sub2-5': '#B4E8FF',
  '--sub2-6': '#98DCFF',
  '--sub2-7': '#71CCFF',
  '--sub2-8': '#06B6FE',
  '--sub2-9': '#00B5FD',
  '--sub2-10': '#00A9F1',
  '--sub2-11': '#007EBD',
  '--sub2-12': '#00395D',
  /** 辅助色板 辅2 sub2 透明度 */
  '--sub2-a1': '#0099ff05',
  '--sub2-a2': '#00a4ff0e',
  '--sub2-a3': '#00a8ff1d',
  '--sub2-a4': '#00b3ff32',
  '--sub2-a5': '#01b1ff4b',
  '--sub2-a6': '#00a9ff67',
  '--sub2-a7': '#00a4ff8e',
  '--sub2-a8': '#00b4fef9',
  '--sub2-a9': '#00B5FD',
  '--sub2-a10': '#00A9F1',
  '--sub2-a11': '#007EBD',
  '--sub2-a12': '#00395D',
  /** 辅助色板 辅3 sub3 */
  '--sub3-1': '#FCFCFD',
  '--sub3-2': '#F9F9FB',
  '--sub3-3': '#F0F0F4',
  '--sub3-4': '#E7E8ED',
  '--sub3-5': '#E0E1E7',
  '--sub3-6': '#D8D9E0',
  '--sub3-7': '#CDCED7',
  '--sub3-8': '#B9BBC6',
  '--sub3-9': '#62636C',
  '--sub3-10': '#54555E',
  '--sub3-11': '#62636C',
  '--sub3-12': '#1F1F25',
  /** 辅助色板 辅3 sub3 透明度 */
  '--sub3-a1': '#00005503',
  '--sub3-a2': '#00005506',
  '--sub3-a3': '#0000440f',
  '--sub3-a4': '#000b4018',
  '--sub3-a5': '#00093a1f',
  '--sub3-a6': '#00073527',
  '--sub3-a7': '#00063332',
  '--sub3-a8': '#00083046',
  '--sub3-a9': '#0002119d',
  '--sub3-a10': '#00020fab',
  '--sub3-a11': '#0002119d',
  '--sub3-a12': '#000007e0',
  /** 辅助色板 辅4 sub4 */
  '--sub4-1': '#F9FEFD',
  '--sub4-2': '#F1FCFA',
  '--sub4-3': '#DAFAF5',
  '--sub4-4': '#C2F5ED',
  '--sub4-5': '#AAEDE4',
  '--sub4-6': '#91E1D7',
  '--sub4-7': '#6ED1C5',
  '--sub4-8': '#26BDAF',
  '--sub4-9': '#24BCAE',
  '--sub4-10': '#00B0A3',
  '--sub4-11': '#007B6F',
  '--sub4-12': '#08433E',
  /** 辅助色板 辅4 sub4 透明度 */
  '--sub4-a1': '#00d5aa06',
  '--sub4-a2': '#00c9a40e',
  '--sub4-a3': '#00ddbb25',
  '--sub4-a4': '#00d6b43d',
  '--sub4-a5': '#00c9ae55',
  '--sub4-a6': '#00baa36e',
  '--sub4-a7': '#00ae9991',
  '--sub4-a8': '#00b2a1d9',
  '--sub4-a9': '#00b1a1db',
  '--sub4-a10': '#00B0A3',
  '--sub4-a11': '#007B6F',
  '--sub4-a12': '#003d38f7',
  /** 辅助色板 辅5 sub5 */
  '--sub5-1': '#FFFCFE',
  '--sub5-2': '#FDF7FC',
  '--sub5-3': '#FCEAF8',
  '--sub5-4': '#F9DEF3',
  '--sub5-5': '#F3D0EC',
  '--sub5-6': '#ECC1E3',
  '--sub5-7': '#E2ADD8',
  '--sub5-8': '#D692CA',
  '--sub5-9': '#BA4AAB',
  '--sub5-10': '#A9409B',
  '--sub5-11': '#A43C97',
  '--sub5-12': '#5A1952',
  /** 辅助色板 辅5 sub5 透明度 */
  '--sub5-a1': '#ff00aa03',
  '--sub5-a2': '#c000a008',
  '--sub5-a3': '#db00aa15',
  '--sub5-a4': '#d100a321',
  '--sub5-a5': '#be00982f',
  '--sub5-a6': '#b1008c3e',
  '--sub5-a7': '#a5008652',
  '--sub5-a8': '#a000846d',
  '--sub5-a9': '#9e0089b5',
  '--sub5-a10': '#8c007abf',
  '--sub5-a11': '#880077c3',
  '--sub5-a12': '#48003fe6',
  /** 辅助色板 辅6 sub6 */
  '--sub6-1': '#FEFCFB',
  '--sub6-2': '#FFF5F0',
  '--sub6-3': '#FFEADD',
  '--sub6-4': '#FFD7C0',
  '--sub6-5': '#FFCAAC',
  '--sub6-6': '#FFBA95',
  '--sub6-7': '#FCA882',
  '--sub6-8': '#F19063',
  '--sub6-9': '#F76B15',
  '--sub6-10': '#EB5D00',
  '--sub6-11': '#D24D00',
  '--sub6-12': '#572E1A',
  /** 辅助色板 辅6 sub6 透明度 */
  '--sub6-a1': '#c0400004',
  '--sub6-a2': '#ff55000f',
  '--sub6-a3': '#ff620022',
  '--sub6-a4': '#ff5e003f',
  '--sub6-a5': '#ff5d0053',
  '--sub6-a6': '#ff5a016a',
  '--sub6-a7': '#f94e007d',
  '--sub6-a8': '#e84a009c',
  '--sub6-a9': '#f65e00ea',
  '--sub6-a10': '#EB5D00',
  '--sub6-a11': '#D24D00',
  '--sub6-a12': '#441600e5',
  /** 辅助色板 辅7 sub7 */
  '--sub7-1': '#FBFEFC',
  '--sub7-2': '#F4FBF7',
  '--sub7-3': '#E5F6EB',
  '--sub7-4': '#D6F1DF',
  '--sub7-5': '#C4E8D1',
  '--sub7-6': '#ADDDC0',
  '--sub7-7': '#8FCEA8',
  '--sub7-8': '#60B887',
  '--sub7-9': '#30A46C',
  '--sub7-10': '#289662',
  '--sub7-11': '#00814C',
  '--sub7-12': '#1D3B2A',
  /** 辅助色板 辅7 sub7 透明度 */
  '--sub7-a1': '#00c04004',
  '--sub7-a2': '#00a3460b',
  '--sub7-a3': '#00a73b1a',
  '--sub7-a4': '#00a83829',
  '--sub7-a5': '#019c393b',
  '--sub7-a6': '#00963c52',
  '--sub7-a7': '#00903970',
  '--sub7-a8': '#008d3f9f',
  '--sub7-a9': '#008f4acf',
  '--sub7-a10': '#008345d7',
  '--sub7-a11': '#00814C',
  '--sub7-a12': '#00220fe2',
  /** Yellow 色板 */
  '--yellow-1': '#FEFDFB',
  '--yellow-2': '#FFF9E6',
  '--yellow-3': '#FFF0C7',
  '--yellow-4': '#FFE6B0',
  '--yellow-5': '#FFDB93',
  '--yellow-6': '#FFCB66',
  '--yellow-7': '#FBB94E',
  '--yellow-8': '#EB9F00',
  '--yellow-9': '#F3A700',
  '--yellow-10': '#E79C00',
  '--yellow-11': '#A56900',
  '--yellow-12': '#4C3715',
  /** Yellow 透明度色板 */
  '--yellow-a1': '#c0800004',
  '--yellow-a2': '#ffc20019',
  '--yellow-a3': '#ffbb0038',
  '--yellow-a4': '#ffaf004f',
  '--yellow-a5': '#ffaa006c',
  '--yellow-a6': '#ffa90099',
  '--yellow-a7': '#f99a00b1',
  '--yellow-a8': '#EB9F00',
  '--yellow-a9': '#F3A700',
  '--yellow-a10': '#E79C00',
  '--yellow-a11': '#A56900',
  '--yellow-a12': '#3c2500ea',
  /** 元素内-XS 2 */
  '--margin-element-xs': '@margin-component-xs',
  /** 元素内-S 4 */
  '--margin-element-s': '@margin-component-sm',
  /** 元素内-M 8 */
  '--margin-element-m': '@margin-component-base',
  /** 模块内-列表间距-S 4 */
  '--margin-module-list-s': '@margin-block-xs',
  /** 模块内-列表间距-M 8 */
  '--margin-module-list-m': '@margin-block-sm',
  /** 模块内-信息组间距-M 12 */
  '--margin-module-info-group-m': '@margin-block-base',
  /** 模块间-M 24 */
  '--margin-module-m': '@margin-section-base',
  /** 模块间-L 32 */
  '--margin-module-l': '@margin-section-lg',
  /** 基础色板映射 */
  '--custom-1': '@color-sub3-1',
  '--custom-2': '@color-sub3-2',
  '--custom-3': '@color-sub3-3',
  '--custom-4': '@color-sub3-4',
  '--custom-5': '@color-sub3-5',
  '--custom-6': '@color-sub3-6',
  '--custom-7': '@color-sub3-7',
  '--custom-8': '@color-sub3-8',
  '--custom-9': '@color-sub3-9',
  '--custom-10': '@color-sub3-10',
  '--custom-11': '@color-sub3-11',
  '--custom-12': '@color-sub3-12',
  /** 透明度色板映射 */
  '--custom-a1': '@color-sub3-a1',
  '--custom-a2': '@color-sub3-a2',
  '--custom-a3': '@color-sub3-a3',
  '--custom-a4': '@color-sub3-a4',
  '--custom-a5': '@color-sub3-a5',
  '--custom-a6': '@color-sub3-a6',
  '--custom-a7': '@color-sub3-a7',
  '--custom-a8': '@color-sub3-a8',
  '--custom-a9': '@color-sub3-a9',
  '--custom-a10': '@color-sub3-a10',
  '--custom-a11': '@color-sub3-a11',
  '--custom-a12': '@color-sub3-a12',
  /** Custom 语义化颜色 (映射到 sub3) */
  '--custom-text': '@color-sub3-text',
  '--custom-text-secondary': '@color-sub3-text-secondary',
  '--custom-text-light': '@color-sub3-text-light',
  '--custom-text-disabled': '@color-sub3-text-disabled',
  '--custom-control-fill-primary': '@color-sub3-control-fill-primary',
  '--custom-control-fill-main': '@color-sub3-control-fill-primary',
  '--custom-control-fill-primary-hover':
    '@color-sub3-control-fill-primary-hover',
  '--custom-control-fill-main-hover': '@color-sub3-control-fill-primary-hover',
  '--custom-control-fill-primary-active':
    '@color-sub3-control-fill-primary-active',
  '--custom-control-fill-main-active':
    '@color-sub3-control-fill-primary-active',
  '--custom-control-fill-secondary': '@color-sub3-control-fill-secondary',
  '--custom-control-fill-secondary-hover':
    '@color-sub3-control-fill-secondary-hover',
  '--custom-control-fill-secondary-active':
    '@color-sub3-control-fill-secondary-active',
  '--custom-control-fill-ghost-active': '@color-sub3-control-fill-ghost-active',
  /** 语义化颜色映射 */
  '--custom-control-fill-tag': '@color-sub3-control-fill-tag',
  '--custom-control-fill-active': '@color-sub3-control-fill-active',
  '--custom-control-fill-disabled': '@color-sub3-control-fill-disabled',
  '--custom-control-fill-hover': '@color-sub3-control-fill-hover',
  '--custom-border-active': '@color-sub3-border-active',
  '--custom-border-control-active': '@color-sub3-border-active',
  '--custom-border-dark': '@color-sub3-border-dark',
  '--custom-border-light': '@color-sub3-border-light',
  '--custom-border': '@color-sub3-border-light',
  '--custom-bg-tip': '@color-sub3-bg-tip',
  '--custom-bg-page-dark': '@color-sub3-bg-page-dark',
  '--custom-bg-card-light': '@color-sub3-bg-card-light',
  '--custom-bg-page': '@color-sub3-bg-page',
  '--custom-bg-page-light': '@color-sub3-bg-page-light',
  /** 特殊用途颜色 */
  '--custom-contrast': '@color-sub3-text',
  '--custom-surface': '@color-sub3-bg-card-light',
  '--custom-indicator': '@color-sub3-9',
  '--custom-track': '@color-sub3-9',
  /** Teal 基础色板映射 */
  '--teal-1': '@color-sub2-1',
  '--teal-2': '@color-sub2-2',
  '--teal-3': '@color-sub2-3',
  '--teal-4': '@color-sub2-4',
  '--teal-5': '@color-sub2-5',
  '--teal-6': '@color-sub2-6',
  '--teal-7': '@color-sub2-7',
  '--teal-8': '@color-sub2-8',
  '--teal-9': '@color-sub2-9',
  '--teal-10': '@color-sub2-10',
  '--teal-11': '@color-sub2-11',
  '--teal-12': '@color-sub2-12',
  /** Teal 透明度色板映射 */
  '--teal-a1': '@color-sub2-a1',
  '--teal-a2': '@color-sub2-a2',
  '--teal-a3': '@color-sub2-a3',
  '--teal-a4': '@color-sub2-a4',
  '--teal-a5': '@color-sub2-a5',
  '--teal-a6': '@color-sub2-a6',
  '--teal-a7': '@color-sub2-a7',
  '--teal-a8': '@color-sub2-a8',
  '--teal-a9': '@color-sub2-a9',
  '--teal-a10': '@color-sub2-a10',
  '--teal-a11': '@color-sub2-a11',
  '--teal-a12': '@color-sub2-a12',
  /** Teal 语义化颜色映射 */
  '--teal-text': '@color-sub2-text',
  '--teal-control-fill': '@color-sub2-control-fill-primary',
  '--teal-control-fill-tag': '@color-sub2-control-fill-tag',
  '--teal-control-fill-hover': '@color-sub2-control-fill-hover',
  '--teal-control-fill-active': '@color-sub2-control-fill-active',
  '--teal-border': '@color-sub2-border-light',
  '--teal-bg-tip': '@color-sub2-bg-tip',
  '--teal-bg-page': '@color-sub2-bg-page',
  /** Teal 特殊用途颜色 */
  '--teal-contrast': '@color-sub2-text',
  '--teal-surface': '@color-sub2-bg-card-light',
  '--teal-indicator': '@color-sub2-9',
  '--teal-track': '@color-sub2-9',
  /** AuxBlue 基础色板映射 */
  '--aux-blue-1': '@color-sub0-1',
  '--aux-blue-2': '@color-sub0-2',
  '--aux-blue-3': '@color-sub0-3',
  '--aux-blue-4': '@color-sub0-4',
  '--aux-blue-5': '@color-sub0-5',
  '--aux-blue-6': '@color-sub0-6',
  '--aux-blue-7': '@color-sub0-7',
  '--aux-blue-8': '@color-sub0-8',
  '--aux-blue-9': '@color-sub0-9',
  '--aux-blue-10': '@color-sub0-10',
  '--aux-blue-11': '@color-sub0-11',
  '--aux-blue-12': '@color-sub0-12',
  /** AuxBlue 透明度色板映射 */
  '--aux-blue-a1': '@color-sub0-a1',
  '--aux-blue-a2': '@color-sub0-a2',
  '--aux-blue-a3': '@color-sub0-a3',
  '--aux-blue-a4': '@color-sub0-a4',
  '--aux-blue-a5': '@color-sub0-a5',
  '--aux-blue-a6': '@color-sub0-a6',
  '--aux-blue-a7': '@color-sub0-a7',
  '--aux-blue-a8': '@color-sub0-a8',
  '--aux-blue-a9': '@color-sub0-a9',
  '--aux-blue-a10': '@color-sub0-a10',
  '--aux-blue-a11': '@color-sub0-a11',
  '--aux-blue-a12': '@color-sub0-a12',
  /** AuxBlue 特殊用途颜色 */
  '--aux-blue-contrast': '@color-sub0-text',
  '--aux-blue-surface': '@color-sub0-bg-card-light',
  '--aux-blue-indicator': '@color-sub0-9',
  '--aux-blue-track': '@color-sub0-9',
  /** LightBlue 基础色板映射 */
  '--light-blue-1': '@color-sub1-1',
  '--light-blue-2': '@color-sub1-2',
  '--light-blue-3': '@color-sub1-3',
  '--light-blue-4': '@color-sub1-4',
  '--light-blue-5': '@color-sub1-5',
  '--light-blue-6': '@color-sub1-6',
  '--light-blue-7': '@color-sub1-7',
  '--light-blue-8': '@color-sub1-8',
  '--light-blue-9': '@color-sub1-9',
  '--light-blue-10': '@color-sub1-10',
  '--light-blue-11': '@color-sub1-11',
  '--light-blue-12': '@color-sub1-12',
  /** LightBlue 透明度色板映射 */
  '--light-blue-a1': '@color-sub1-a1',
  '--light-blue-a2': '@color-sub1-a2',
  '--light-blue-a3': '@color-sub1-a3',
  '--light-blue-a4': '@color-sub1-a4',
  '--light-blue-a5': '@color-sub1-a5',
  '--light-blue-a6': '@color-sub1-a6',
  '--light-blue-a7': '@color-sub1-a7',
  '--light-blue-a8': '@color-sub1-a8',
  '--light-blue-a9': '@color-sub1-a9',
  '--light-blue-a10': '@color-sub1-a10',
  '--light-blue-a11': '@color-sub1-a11',
  '--light-blue-a12': '@color-sub1-a12',
  /** LightBlue 特殊用途颜色 */
  '--light-blue-contrast': '@color-sub1-text',
  '--light-blue-surface': '@color-sub1-bg-card-light',
  '--light-blue-indicator': '@color-sub1-9',
  '--light-blue-track': '@color-sub1-9',
  /** Purple 基础色板映射 */
  '--purple-1': '@color-sub5-1',
  '--purple-2': '@color-sub5-2',
  '--purple-3': '@color-sub5-3',
  '--purple-4': '@color-sub5-4',
  '--purple-5': '@color-sub5-5',
  '--purple-6': '@color-sub5-6',
  '--purple-7': '@color-sub5-7',
  '--purple-8': '@color-sub5-8',
  '--purple-9': '@color-sub5-9',
  '--purple-10': '@color-sub5-10',
  '--purple-11': '@color-sub5-11',
  '--purple-12': '@color-sub5-12',
  /** Purple 透明度色板映射 */
  '--purple-a1': '@color-sub5-a1',
  '--purple-a2': '@color-sub5-a2',
  '--purple-a3': '@color-sub5-a3',
  '--purple-a4': '@color-sub5-a4',
  '--purple-a5': '@color-sub5-a5',
  '--purple-a6': '@color-sub5-a6',
  '--purple-a7': '@color-sub5-a7',
  '--purple-a8': '@color-sub5-a8',
  '--purple-a9': '@color-sub5-a9',
  '--purple-a10': '@color-sub5-a10',
  '--purple-a11': '@color-sub5-a11',
  '--purple-a12': '@color-sub5-a12',
  /** Purple 特殊用途颜色 */
  '--purple-contrast': '@color-sub5-text',
  '--purple-surface': '@color-sub5-bg-card-light',
  '--purple-indicator': '@color-sub5-9',
  '--purple-track': '@color-sub5-9',
  /** SubRed 基础色板映射 */
  '--sub-red-1': '@color-sub6-1',
  '--sub-red-2': '@color-sub6-2',
  '--sub-red-3': '@color-sub6-3',
  '--sub-red-4': '@color-sub6-4',
  '--sub-red-5': '@color-sub6-5',
  '--sub-red-6': '@color-sub6-6',
  '--sub-red-7': '@color-sub6-7',
  '--sub-red-8': '@color-sub6-8',
  '--sub-red-9': '@color-sub6-9',
  '--sub-red-10': '@color-sub6-10',
  '--sub-red-11': '@color-sub6-11',
  '--sub-red-12': '@color-sub6-12',
  /** SubRed 透明度色板 (映射到 sub6) */
  '--sub-red-a1': '@color-sub6-a1',
  '--sub-red-a2': '@color-sub6-a2',
  '--sub-red-a3': '@color-sub6-a3',
  '--sub-red-a4': '@color-sub6-a4',
  '--sub-red-a5': '@color-sub6-a5',
  '--sub-red-a6': '@color-sub6-a6',
  '--sub-red-a7': '@color-sub6-a7',
  '--sub-red-a8': '@color-sub6-a8',
  '--sub-red-a9': '@color-sub6-a9',
  '--sub-red-a10': '@color-sub6-a10',
  '--sub-red-a11': '@color-sub6-a11',
  '--sub-red-a12': '@color-sub6-a12',
  /** SubRed 特殊用途颜色 */
  '--sub-red-contrast': '@color-sub6-text',
  '--sub-red-surface': '@color-sub6-bg-card-light',
  '--sub-red-indicator': '@color-sub6-9',
  '--sub-red-track': '@color-sub6-9',
  '--gray-bg-card-white-text': '#FFFFFF',
  /** Blue 兼容性变量 (直接使用 globalReccomend.less 中的值) */
  '--blue-control-fill': 'rgba(6, 159, 255, 100%)',
  '--blue-control-fill-main': 'rgba(6, 159, 255, 100%)',
  '--blue-control-fill-main-hover': 'rgba(0, 147, 237, 100%)',
  '--blue-control-fill-main-active': '#0076CF',
  '--blue-text-strong': 'rgba(0, 54, 93, 100%)',
  '--blue-border': 'rgba(0, 137, 255, 22.8%)',
  /** Green 兼容性变量 (直接使用 globalReccomend.less 中的值) */
  '--green-control-fill': 'rgba(41, 163, 131, 100%)',
  '--green-border': 'rgba(0, 165, 103, 24%)',
  /** Orange 兼容性变量 (直接使用 globalReccomend.less 中的值) */
  '--orange-control-fill': 'rgba(243, 167, 0, 100%)',
  '--orange-border': 'rgba(255, 152, 0, 39%)',
  /** Red 兼容性变量 (直接使用 globalReccomend.less 中的值) */
  '--red-control-fill': 'rgba(229, 72, 77, 100%)',
  '--red-border': 'rgba(255, 15, 0, 21%)',
  /** Gray 特殊用途颜色 */
  '--gray-contrast': '#FFFFFF',
  '--gray-surface': '#ffffffcc',
  '--gray-indicator': '#8B8D97',
  '--gray-track': '#8B8D97',
  /** Blue 特殊用途颜色 */
  '--blue-contrast': '#FFFFFF',
  '--blue-surface': '#f1f9ffcc',
  '--blue-indicator': '#069FFF',
  '--blue-track': '#069FFF',
  /** Green 特殊用途颜色 */
  '--green-contrast': '#FFFFFF',
  '--green-surface': '#f0faf6cc',
  '--green-indicator': '#29A383',
  '--green-track': '#29A383',
  /** Orange 特殊用途颜色 */
  '--orange-contrast': '#FFFFFF',
  '--orange-surface': '#fff3eccc',
  '--orange-indicator': '#F66009',
  '--orange-track': '#F66009',
  /** Red 特殊用途颜色 */
  '--red-contrast': '#FFFFFF',
  '--red-surface': '#fff5f5cc',
  '--red-indicator': '#E5484D',
  '--red-track': '#E5484D',
  /** Yellow 特殊用途颜色 */
  '--yellow-contrast': '#2D1F09',
  '--yellow-surface': '#fff8e0cc',
  '--yellow-indicator': '#F3A700',
  '--yellow-track': '#F3A700',
  /** Primary 色板 (直接使用 globalReccomend.less 中的值) */
  '--primary-1': 'rgba(250, 253, 255, 1.00)',
  '--primary-2': 'rgba(242, 249, 255, 1.00)',
  '--primary-3': 'rgba(229, 242, 255, 1.00)',
  '--primary-4': 'rgba(218, 235, 255, 1.00)',
  '--primary-5': '#E0E1E6',
  '--primary-6': '#D8D9E0',
  '--primary-7': '#CDCED6',
  '--primary-8': 'rgba(119, 165, 255, 1.00)',
  '--primary-9': 'rgba(5, 24, 168, 1.00)',
  '--primary-10': 'rgba(15, 52, 191, 1.00)',
  '--primary-11': 'rgba(34, 88, 255, 1.00)',
  '--primary-12': 'rgba(4, 6, 159, 1.00)',
  /** Primary 透明度色板 */
  '--primary-a1': '#00005503',
  '--primary-a2': 'rgba(0, 138, 255, 0.05)',
  '--primary-a3': 'rgba(0, 128, 255, 0.10)',
  '--primary-a4': 'rgba(0, 118, 255, 0.15)',
  '--primary-a5': 'rgba(0, 103, 255, 0.20)',
  '--primary-a6': '#00073527',
  '--primary-a7': '#00062e32',
  '--primary-a8': 'rgba(0, 87, 255, 0.53)',
  '--primary-a9': 'rgba(0, 19, 166, 0.98)',
  '--primary-a10': '#000108cb',
  '--primary-a11': '#0002119d',
  '--primary-a12': '#000107e1',
  /** Primary 特殊用途颜色 */
  '--primary-contrast': '#FFFFFF',
  '--primary-surface': '#f8f8facc',
  '--primary-indicator': '#1E1F24',
  '--primary-track': '#1E1F24',
  /** 特殊变量 */
  '--brand-gradient':
    'linear-gradient(135deg, @color-blue-9 0%, @color-primary-9 100%)',
  '--transparent': 'transparent',
  /** 渐变/AI 内容 */
  '--brand-gradient-fill':
    'linear-gradient(46deg, @color-purple-9 13%, @color-blue-9 56%, @color-lightBlue-9 96%)',
  /** 渐变/AI-文字 */
  '--brand-gradient-text':
    'linear-gradient(90deg, @color-purple-9 4%, @color-lightBlue-9 100%)',
  /** SubBlue 基础色板 (映射到 sub1) */
  '--sub-blue-1': '@color-sub1-1',
  '--sub-blue-2': '@color-sub1-2',
  '--sub-blue-3': '@color-sub1-3',
  '--sub-blue-4': '@color-sub1-4',
  '--sub-blue-5': '@color-sub1-5',
  '--sub-blue-6': '@color-sub1-6',
  '--sub-blue-7': '@color-sub1-7',
  '--sub-blue-8': '@color-sub1-8',
  '--sub-blue-9': '@color-sub1-9',
  '--sub-blue-10': '@color-sub1-10',
  '--sub-blue-11': '@color-sub1-11',
  '--sub-blue-12': '@color-sub1-12',
  /** SubBlue 透明度色板 (映射到 sub1) */
  '--sub-blue-a1': '@color-sub1-a1',
  '--sub-blue-a2': '@color-sub1-a2',
  '--sub-blue-a3': '@color-sub1-a3',
  '--sub-blue-a4': '@color-sub1-a4',
  '--sub-blue-a5': '@color-sub1-a5',
  '--sub-blue-a6': '@color-sub1-a6',
  '--sub-blue-a7': '@color-sub1-a7',
  '--sub-blue-a8': '@color-sub1-a8',
  '--sub-blue-a9': '@color-sub1-a9',
  '--sub-blue-a10': '@color-sub1-a10',
  '--sub-blue-a11': '@color-sub1-a11',
  '--sub-blue-a12': '@color-sub1-a12',
  /** SubBlue 特殊用途颜色 */
  '--sub-blue-contrast': '@color-sub1-text',
  '--sub-blue-surface': '@color-sub1-bg-card-light',
  '--sub-blue-indicator': '@color-sub1-9',
  '--sub-blue-track': '@color-sub1-9',
  /** Aux-0 (映射到 sub0) */
  '--aux-0-1': '@color-sub0-1',
  '--aux-0-2': '@color-sub0-2',
  '--aux-0-3': '@color-sub0-3',
  /** Aux-1 (映射到 sub1) */
  '--aux-1-1': '@color-sub1-1',
  '--aux-1-2': '@color-sub1-2',
  '--aux-1-3': '@color-sub1-3',
  '--aux-1-4': '@color-sub1-4',
  /** Aux-2 (映射到 sub2) */
  '--aux-2-1': '@color-sub2-1',
  '--aux-2-2': '@color-sub2-2',
  '--aux-2-4': '@color-sub2-4',
  /** Aux-3 (映射到 sub3) */
  '--aux-3': '@color-sub3-9',
  /** Aux-4 (映射到 sub4) */
  '--aux-4-1': '@color-sub4-1',
  '--aux-4-2': '@color-sub4-2',
  '--aux-4-3': '@color-sub4-3',
  '--aux-4-4': '@color-sub4-4',
  /** Aux-5 (映射到 sub5) */
  '--aux-5-1': '@color-sub5-1',
  '--aux-5-2': '@color-sub5-2',
  '--aux-5-3': '@color-sub5-3',
  '--aux-5-4': '@color-sub5-4',
} as const;

export default global;

// === Mixins 函数 ===

export const iconSS = () => {
  return {
    fontSize: '16px',
    width: '16px',
    height: '16px',
  };
};

export const iconSM = () => {
  return {
    fontSize: '18px',
    width: '18px',
    height: '18px',
  };
};

export const textBase = () => {
  return {
    fontFamily: 'AlibabaPuHuiTi',
    fontVariationSettings: '"opsz" auto',
    fontFeatureSettings: '"kern" on',
  };
};

export const textH1Mega = () => {
  return {
    fontSize: '56px',
    lineHeight: '64px',
    letterSpacing: '4%',
  };
};

export const textH2Slogan = () => {
  return {
    fontSize: '30px',
    lineHeight: '38px',
  };
};

export const textH3Theme = () => {
  return {
    fontSize: '24px',
    lineHeight: '32px',
  };
};

export const textH4PageTitle = () => {
  return {
    fontSize: '18px',
    lineHeight: '26px',
  };
};

export const textH5CardTitle = () => {
  return {
    fontSize: '15px',
    lineHeight: '24px',
  };
};

export const textH6Subtitle = () => {
  return {
    fontSize: '13px',
    lineHeight: '20px',
  };
};

export const textBodyXs = () => {
  return {
    fontSize: '10px',
    lineHeight: '18px',
  };
};

export const textBodySm = () => {
  return {
    fontSize: '12px',
    lineHeight: '20px',
  };
};

export const textBodySmBold = () => {
  return {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '500',
  };
};

export const textBodyM = () => {
  return {
    fontSize: '13px',
    lineHeight: '20px',
  };
};

export const textBodyMBold = () => {
  return {
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: '500',
  };
};

export const textBodyL = () => {
  return {
    fontSize: '15px',
    lineHeight: '24px',
  };
};

export const textCodeS = () => {
  return {
    fontSize: '12px',
    lineHeight: '1.6',
    letterSpacing: '0',
    fontFamily: '"Roboto Mono", monospace',
    fontOpticalSizing: 'auto',
    fontWeight: '400',
    fontStyle: 'normal',
  };
};

export const textCaptionXs = () => {
  return {
    fontSize: '10px',
    fontWeight: 'normal',
    lineHeight: '1.6',
    letterSpacing: '0',
  };
};

export const textCaptionS = () => {
  return {
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '1.6',
    letterSpacing: '0',
  };
};

export const textCaptionSBold = () => {
  return {
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0',
  };
};

export const textParagraphBase = () => {
  return {
    fontSize: '13px',
    fontWeight: 'normal',
    lineHeight: '1.6',
    letterSpacing: '0',
  };
};

export const textParagraphBaseBold = () => {
  return {
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0',
  };
};

export const textParagraphLg = () => {
  return {
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '1.6',
    letterSpacing: '0',
  };
};

export const textNumXs = () => {
  return {
    fontSize: '10px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '500',
    fontStyle: 'normal',
  };
};

export const textNumS = () => {
  return {
    fontSize: '12px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '500',
    fontStyle: 'normal',
  };
};

export const textNumM = () => {
  return {
    fontSize: '13px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '500',
    fontStyle: 'normal',
  };
};

export const textNumLg = () => {
  return {
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '600',
    fontStyle: 'normal',
  };
};

export const textNumXl = () => {
  return {
    fontSize: '18px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '600',
    fontStyle: 'normal',
  };
};

export const textNum2xl = () => {
  return {
    fontSize: '24px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '600',
    fontStyle: 'normal',
  };
};

export const textNum3xl = () => {
  return {
    fontSize: '30px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '600',
    fontStyle: 'normal',
  };
};

export const textNum4xl = () => {
  return {
    fontSize: '56px',
    lineHeight: '100%',
    letterSpacing: '4%',
    fontFamily: 'Rubik, sans-serif',
    fontOpticalSizing: 'auto',
    fontWeight: '600',
    fontStyle: 'normal',
  };
};

export const textH6Promotion = () => {
  return {};
};

export const textH5Promotion = () => {
  return {};
};

export const textH4Promotion = () => {
  return {};
};

export const textH3Promotion = () => {
  return {};
};

export const textH2Promotion = () => {
  return {};
};

export const textH1Promotion = () => {
  return {};
};

export const shadowBorderL1 = () => {
  return {
    boxShadow: 'inset 0 0 1px 0 rgba(0, 0, 0, 15%)',
  };
};

export const shadowControlB1 = () => {
  return {
    boxShadow:
      '0 0 1px 0 rgba(0, 1, 3, 20%), 0 1.5px 4px -1px rgba(0, 1, 3, 4%)',
  };
};

export const shadowControlL0 = () => {
  return {};
};

export const shadowControlL1 = () => {
  return {
    boxShadow:
      '0 0 1px 0 rgba(0, 1, 3, 5%), 0 2px 7px 0 rgba(0, 1, 3, 5%), 0 2px 5px -2px rgba(0, 1, 3, 6%)',
  };
};

export const shadowCardL1 = () => {
  return {
    boxShadow: '0px 1.5px 2px -1px  rgba(0, 19, 41, 0.07)',
  };
};

export const shadowHoverControlL2 = () => {
  return {
    boxShadow: '0 0 1px 0 rgba(0, 1, 3, 5%), 0 6px 16px 0 rgba(0, 1, 3, 8%)',
  };
};

export const shadowDialogL3 = () => {
  return {
    boxShadow:
      '0 0 3px -1px rgba(0, 1, 3, 4%), 0 32px 33px -15px rgba(0, 1, 3, 17%)',
  };
};

export const shadowDiffusionL4 = () => {
  return {};
};

export const paddingNone = () => {
  return {
    padding: '0',
  };
};

export const paddingCardMCover = () => {
  return {
    padding: '4px',
  };
};

export const paddingCardSm = () => {
  return {
    padding: '8px',
  };
};

export const paddingCardM = () => {
  return {
    padding: '12px',
  };
};

export const paddingCardL = () => {
  return {
    padding: '16px',
  };
};

export const paddingDialog = () => {
  return {
    padding: '24px 32px',
  };
};

export const paddingPageSm = () => {
  return {
    padding: '16px 24px',
  };
};

export const paddingPageBase = () => {
  return {
    padding: '16px 40px',
  };
};

export const paddingControlS28 = () => {
  return {
    padding: '3px 8px',
  };
};

export const paddingControlS28Icon = () => {
  return {
    padding: '6px 8px 6px 6px',
  };
};

export const paddingControlM32 = () => {
  return {
    padding: '5px 12px',
  };
};

export const paddingTag24 = () => {
  return {
    padding: '0 6px',
  };
};

export const paddingTableS32 = () => {
  return {
    padding: '5px 0',
  };
};

export const paddingTableM40 = () => {
  return {
    padding: '9px 0',
  };
};

export const paddingTableLg60 = () => {
  return {
    padding: '19px 0',
  };
};

export const borderRadiusControlXs = () => {
  return {};
};

export const borderRadiusControlSm = () => {
  return {};
};

export const borderRadiusControlBase = () => {
  return {
    borderRadius: '8px',
  };
};

export const borderRadiusCardM = () => {
  return {
    borderRadius: '12px',
  };
};

export const borderRadiusCardLg = () => {
  return {
    borderRadius: '16px',
  };
};

export const borderRadiusDialogM = () => {
  return {
    borderRadius: '20px',
  };
};

export const borderRadiusCapsule = () => {
  return {
    borderRadius: '72px',
  };
};

export const borderRadiusNone = () => {
  return {
    borderRadius: '0',
  };
};

export const borderRadiusXs = () => {
  return {};
};

export const borderRadiusS = () => {
  return {};
};

export const borderRadiusM = () => {
  return {};
};

export const borderRadiusL = () => {
  return {};
};

export const borderRadiusDialog = () => {
  return {};
};

export const textEllipsis = () => {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
};

export const scrollbar = () => {
  return {
    overflowY: 'auto',
    overscrollBehavior: 'contain',
    '&::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '@color-transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      width: '4px',
      backgroundColor: '@color-transparent',
      border: '2px solid @color-transparent',
      backgroundClip: 'padding-box',
      borderRadius: '72px',
    },
    '&:hover::-webkit-scrollbar-thumb': {
      backgroundColor: '@color-gray-border-light',
      '&:hover': {
        backgroundColor: '@color-gray-text-disabled',
      },
    },
  };
};

export const showScrollLine = () => {
  return {
    borderTop: '1px solid @color-transparent',
    borderBottom: '1px solid @color-transparent',
    borderTopColor: '@color-gray-border-light',
    borderBottomColor: '@color-gray-border-light',
  };
};

export const scrollbarHidden = () => {
  return {
    overflowY: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
};
