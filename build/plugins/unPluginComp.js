/**
 * unplugin-vue-component
 * auto import component
 */
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export function configUnPluginComp() {
  return Components({
    resolvers: [AntDesignVueResolver()],
    dts: false,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  });
}
