export function wrapperEnv(env) {
  const ret = {};

  for (const key of Object.keys(env)) {
    let realName = env[key].replace(/\\n/g, '\n');

    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (key === 'VITE_PORT') {
      realName = Number(realName);
    }
    if (key === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        realName = '';
      }
    }
    ret[key] = realName;
    if (typeof realName === 'string' || typeof realName === 'number') {
      process.env[key] = realName;
    } else if (typeof realName === 'object') {
      process.env[key] = JSON.stringify(realName);
    }
  }
  return ret;
}
