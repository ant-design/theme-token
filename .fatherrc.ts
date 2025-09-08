import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'dist/esm',
    transformer: 'babel',
  },
  cjs: {
    output: 'dist/lib',
    transformer: 'babel',
  },
  umd: {
    output: 'dist/umd',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
});
