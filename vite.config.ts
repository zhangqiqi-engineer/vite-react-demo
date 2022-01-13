
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
const DEV = 'development';
export default ({ mode }) => {
  const configEnv = loadEnv(mode, process.cwd());
  const productionBase = configEnv.VITE_PRODUCTION_BASE;
  console.log('configEnv.VITE_PRODUCTION_BASE', configEnv.VITE_PRODUCTION_BASE);

  return defineConfig({
    base: mode === DEV ? '/' : productionBase,
    plugins: [ reactRefresh() ],
    clearScreen: false,
    resolve: {
      alias: [
        // 用于处理antd-pro中less样式引入 @import ~ 错误问题
        // fix less import by: @import ~
        // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
        { find: /^~/, replacement: '' },
        { find: 'services', replacement: path.resolve(__dirname, './src/services/') },
        { find: 'assets', replacement: path.resolve(__dirname, './src/assets') },
        { find: 'components', replacement: path.resolve(__dirname, './src/components') },
        { find: 'config', replacement: path.resolve(__dirname, './src/config') },
        { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
        { find: 'utils', replacement: path.resolve(__dirname, './src/utils') },
        { find: 'context', replacement: path.resolve(__dirname, './src/context') },
        { find: 'types', replacement: path.resolve(__dirname, './src/types') },
      ],
    },
    css: {
      modules: {
        scopeBehaviour: 'local',
        localsConvention: 'camelCase',
      },
      // less预加载
      preprocessorOptions: {
        less: {
          // 自定义样式，可用于修改antd原有样式
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
    server: {
      port: 3000,
      host: '127.0.0.1',
      open: true,
      proxy: {
        '/api': {
          target: 'https://randomuser.me',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      // 打包输出
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          assetFileNames: '[name][extname]',
          chunkFileNames: '[name].js',
        },
      },
    },
  });
};


