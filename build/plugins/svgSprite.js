/**
 * Vite Plugin for svg sprites
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import SvgIconsPlugin from 'vite-plugin-svg-icons';
import path from 'path';

/**
 * @param isBuild dev or prod
 * @description plugin register
 */
export function configSvgIconsPlugin(isBuild = false) {
  const svgIconsPlugin = SvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    svgoOptions: isBuild,
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}
