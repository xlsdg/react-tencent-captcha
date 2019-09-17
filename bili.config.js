module.exports = {
  babel: {
    // asyncToPromises: true,
    // babelrc: false,
    // configFile: false,
    jsx: 'react',
    // minimal: false,
    // objectAssign: 'myAssign',
  },
  banner: false,
  bundleNodeModules: true,
  // env: {},
  // extendConfig: () => {},
  // extendRollupConfig: () => {},
  // externals: [],
  globals: {
    react: 'React',
  },
  input: 'src/tcaptcha.jsx',
  output: {
    dir: 'dist',
    extractCSS: false,
    // fileName: '[name][suffix].js',
    format: ['cjs-min', 'es-min', 'umd-min'],
    minify: true,
    moduleName: 'TencentCaptcha',
    sourceMap: true,
    sourceMapExcludeSources: true,
    target: 'browser',
  },
  // plugins: {},
  // resolvePlugins: {},
};
