/**
 * lower camel case
 *
 * @example
 *
 * lowerCamel("abcce_dddd_ffff") // -> abcceDdddFfff
 *
 * lowerCamel("abcce-dddd-ffff", "-") // -> abcceDdddFfff
 *
 * @param str
 * @param split split line
 * @returns {string}
 */
export function lowerCamel(str: string, split: string = "_") {
  const reg = new RegExp(`${split}([a-z])`, "g");
  return str.replace(reg, function (all, letter) {
    return letter.toUpperCase();
  });
}

/**
 * upper camel case
 *
 * @example
 *
 * upperCamel("abcce-dddd-ffff") // -> AbcceDdddFfff
 *
 * upperCamel("abcce_dddd_ffff", "_") // -> AbcceDdddFfff
 *
 *
 * @param str
 * @param split split line
 * @returns {string}
 */
export function upperCamel(str: string, split: string = "_") {
  return lowerCamel(str, split).replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
}
