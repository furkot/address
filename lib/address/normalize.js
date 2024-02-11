const { abbr2country, country2abbr } = require('../country');
const { abbr2state, state2abbr, state2country } = require('../state');

module.exports = normalize;

/**
 * Normalizes an address
 * @param {*} address
 * @returns {string}
 *
 * @example
 * normalize('123 Main St, Los Angeles, California'); // => '123 Main St,Los Angeles,CA,US'
 */
function normalize(address) {

  if (!address) {
    return ;
  }

  let [country, state, town, street] = address.split(',').map(part => part.trim()).reverse();

  country = country2abbr[country] || country;
  if (!abbr2country[country]) {
    street = town;
    town = state;
    state = state2abbr[country] || country;
    country = state2country[state];
    if (!country) {
      return;
    }
  }
  state = state2abbr[state] || state;
  if (state && !(street || abbr2state[state])) {
    street = town;
    town = state;
    state = '';
  }

  return [street, town, state, country].map(part => part || '').join(',').replace(/^,+/, '');
}
