/**
 * Vite Plugin entry file
 */

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import { configSvgIconsPlugin } from './svgSprite';
import { configUnPluginComp } from './unPluginComp';

export function createVitePlugin(viteEnv, isBuild) {
  const vitePlugins = [vue(), vueJsx(), legacy()];

  vitePlugins.push(configSvgIconsPlugin(isBuild));

  vitePlugins.push(configUnPluginComp());

  return vitePlugins;
}
