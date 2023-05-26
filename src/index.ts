/**
 * lower camel case
 *
 * @example
 *
 * lowerCamel("abcce_dddd_ffff") // -> abcceDdddFfff
 *
 * lowerCamel("abcce-dddd-ffff", "-") // -> abcceDdddFfff
 *
 * @param {string} str
 * @param {string} split split line
 * @returns {string}
 */
export function lowerCamel(str: string, split: string = '_') {
  const reg = new RegExp(split + '([a-z])', 'g');
  return str.replace(reg, (_, letter) => letter.toUpperCase());
}

/**
 * upper camel case
 *
 * @example
 *
 * upperCamel("abcce_dddd_ffff") // -> AbcceDdddFfff
 *
 * upperCamel("abcce-dddd-ffff", "-") // -> AbcceDdddFfff
 *
 *
 * @param {string} str
 * @param {string} split split line
 * @returns {string}
 */
export function upperCamel(str: string, split: string = '_') {
  return lowerCamel(str, split).replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
}
