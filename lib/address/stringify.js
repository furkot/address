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
 * stringify({ house: 1, street: 'street', city: 'city', state: 'state', country: 'country' });
 * // => '1 street,city,state,country'
 *
 * stringify({ house: 1, street: 'street', state: 'state'});
 * // => '1 street,,state,country'
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

  let { house, street, city, state, country } = spec;

  if (!country) {
    if (!state) { // if state or country is missing
      return;
    }
    state = state2abbr[state] || state;
    country = state2country[state];
    if (!country) {
      return;
    }
  }
  else {
    state = state2abbr[state] || state;
    country = country2abbr[country] || country;
  }

  const st = country2states[country];
  if (st && !st[state]) {
    state = '';
  }

  if (house && street) {
    street = [house, street].join(' ');
  }
  else if (house) {
    street = `${house}`;
  }

  return [street, city, state, country].map(p => p ?? '').join(',');
}
