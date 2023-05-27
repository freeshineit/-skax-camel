// rollup plugin
import rollupPlugins from './rollup.plugins';
import isDev from './isDev';
import pkg from '../package.json';

// 驼峰命名
function toCamel(name: string) {
  // eslint-disable-next-line no-useless-escape
  return name.replace(/\-(\w)/g, function (_, letter) {
    return letter.toUpperCase();
  });
}
// 首字母大写
const name = toCamel(pkg.name.replace(/^\S/, (s) => s.toUpperCase()));

const input = 'src/index.ts';

const banner = `/*
*
* ${name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author}
* Released under the MIT License.
*
*/`;

export default [
  {
    input,
    output: [
      {
        exports: 'auto',
        // Node 默认的模块规范, 可通过 Webpack 加载
        // https://javascript.ruanyifeng.com/nodejs/module.html
        // https://zh.wikipedia.org/wiki/CommonJS
        file: pkg.main,
        format: 'cjs',
        sourcemap: isDev,
        banner,
      },
      {
        //   UMD (Universal Module Definition), 希望提供一个前后端跨平台的解决方案(支持AMD与CommonJS模块方式),。
        //   https://github.com/umdjs/umd
        // https://leohxj.gitbooks.io/front-end-database/javascript-modules/about-umd.html
        file: pkg.umd,
        format: 'umd',
        name,
        sourcemap: isDev,
        banner,
      },
    ],
    plugins: [...rollupPlugins],
  },
];
