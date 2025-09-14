import { abbr2country } from '../country/index.js';
import { state2country } from '../state/index.js';

/**
 * Parses an address string
 * @param {string} address the address string
 * @returns {Object} the parsed address
 *
 * @example
 * parse('1 street,town,province,country');
 * // => { house: '1', street: 'street', town: 'town', province: 'province', country: 'country' }
 */
export function parse(address) {
  if (!address) {
    return;
  }
  const parts = address.split(',');
  if (parts.length > 4) {
    return; // don't even try to parse
  }
  while (parts.length < 4) {
    parts.unshift('');
  }
  let [street, town, province, country] = parts;
  if (!country && province) {
    country = state2country[province];
  }
  if (country === 'US') {
    country = 'USA';
  } else {
    country = abbr2country[country] || country;
  }
  // extract number from street
  let house = street.match(/^\d+[^\s]\s/);
  if (house) {
    street = street.replace(house, '');
    house = house[0].trim();
  }
  return Object.fromEntries(
    Object.entries({
      house,
      street,
      town,
      province,
      country
    }).filter(entry => entry[1])
  );
}
