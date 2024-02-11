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
 * stringify({ house: 1, street: 'street', town: 'town', province: 'province', country: 'country' });
 * // => '1 street,town,province,country'
 *
 * stringify({ house: 1, street: 'street', province: 'province'});
 * // => '1 street,,province,country'
 *
 * stringify({ house: 1, town: 'town', country: 'country' });
 * // => ',town,,country'
 *
 * stringify();
 * // => undefined
 */
function stringify(spec) {
  if (!spec) {
    return;
  }

  let { house, street, town, province, country } = spec;

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

  return [street, town, province, country].map(p => p ?? '').join(',').replace(/^,+/, '');
}
