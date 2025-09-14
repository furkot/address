import { country2abbr } from '../country/index.js';
import { state2abbr, state2country } from '../state/index.js';

/**
 * Stringifies an address specification.
 * @param {Object} spec - The address specification.
 * @returns {string} - The stringified address.
 *
 * @example
 * stringify({ house: 1, street: 'street', town: 'town', province: 'province', country: 'country' });
 * // => '1 street,town,province,country'
 *
 * stringify({ house: 1, street: 'street', province: 'province'});
 * // => '1 street,,province,country'
 *
 * stringify({ house: 1, street: 'street', province: 'province'});
 * // => '1 street,,province,'
 *
 * stringify({ house: 1, town: 'town', country: 'country' });
 * // => '1,town,,country'
 *
 * stringify({ street: 'street', town: 'town' });
 * // => 'street,town,,'
 *
 *  * stringify({});
 * // => ''
 *
 * stringify();
 * // => undefined
 */
export function stringify(spec) {
  if (!spec) {
    return;
  }

  let { house, street, town, province, country } = spec;

  country = country2abbr[country] || country;
  province = state2abbr[province] || province;
  if (!country) {
    country = state2country[province];
  }

  if (house) {
    if (street) {
      street = [house, street].join(' ');
    } else {
      street = house;
    }
  }

  return [street, town, province, country]
    .map(p => p ?? '')
    .join(',')
    .replace(/^,+/, '');
}
