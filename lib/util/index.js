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
export function keys2values(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
