module.exports = {
  keys2values,
  str2obj
};

/**
 * Swaps keys of an object with their values.
 * @param {Object} obj - The object to swap.
 * @returns {Object} - The swapped object.
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const swapped = keys2values(obj);
 * console.log(swapped);
 * // => { 1: 'a', 2: 'b', 3: 'c' }
 */
function keys2values(obj) {
  return Object.entries(obj).reduce((obj, [k, v]) => {
    obj[v] = k;
    return obj;
  }, Object.create(null));
}

/**
 * Turns a comma-separated string into an object.
 * @param {string} str - The string to parse.
 * @returns {Object} - The parsed object.
 * @example
 * const str = 'a,b,"c d"';
 * const obj = str2obj(str);
 * console.log(obj);
 * // => { a: true, b: true, 'c d': true }
 */
function str2obj(str) {
  return str.split(',').reduce((obj, key) => {
    obj[key] = true;
    return obj;
  }, Object.create(null));
}
