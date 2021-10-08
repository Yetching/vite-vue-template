import { defineConfig } from 'vite';
import { createVitePlugin } from './build/plugins';
import { loadEnv } from 'vite';
import { wrapperEnv } from './build/utils';
import { resolve } from 'path';
import { createProxy } from './build/proxy';
import { OUTPUT_DIR, MINIFY } from './build/constant';
import pkg from './package.json';
import moment from 'moment';

// https://vitejs.dev/config/
// defineConfig = config => config

//v1
// export default defineConfig({
//   plugins: createVitePlugin(),
// });

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
};

//v2 可获取command和mode情景参数
export default ({ command, mode }) => {
  // some pre handler

  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: resolve(process.cwd(), 'src') + '/',
        },
      ],
    },
    //开发服务器
    server: {
      host: true,
      port: VITE_PORT,
      //load VITE_PROXY
      proxy: createProxy(VITE_PROXY),
      hmr: {
        //热更新错误罩层是否开启
        overlay: true,
      },
    },
    //build相关
    build: {
      minify: MINIFY,
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotlisize: false,
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: createVitePlugin(),
  };
};
