/**
 * parse the .env.development proxy configuration
 */

const httpsRE = /^https:\/\//;

/**
 * generate proxy
 * @param {*} list
 */

export function createProxy(list) {
  const ret = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);

    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      //if https is required
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return ret;
}
