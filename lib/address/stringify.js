module.exports = stringify;

const {
  country2abbr
} = require('../country');

const {
  state2abbr,
  state2country,
  country2states
} = require('../state');

/**
 * Stringifies an address specification.
 * @param {Object} spec - The address specification.
 * @returns {string} - The stringified address.
 *
 * @example
 * stringify({ house: 1, street: 'street', city: 'city', province: 'province', country: 'country' });
 * // => '1 street,city,province,country'
 *
 * stringify({ house: 1, street: 'street', province: 'province'});
 * // => '1 street,,province,country'
 *
 * stringify({ house: 1, city: 'city', country: 'country' });
 * // => ',city,,country'
 *
 * stringify();
 * // => undefined
 */
function stringify(spec) {
  if (!spec) {
    return;
  }

  let { house, street, city, province, country } = spec;

  if (!country) {
    if (!province) { // if state or country is missing
      return;
    }
    province = state2abbr[province] || province;
    country = state2country[province];
    if (!country) {
      return;
    }
  }
  else {
    province = state2abbr[province] || province;
    country = country2abbr[country] || country;
  }

  const st = country2states[country];
  if (st && !st[province]) {
    province = '';
  }

  if (house && street) {
    street = [house, street].join(' ');
  }
  else if (house) {
    street = `${house}`;
  }

  return [street, city, province, country].map(p => p ?? '').join(',');
}
