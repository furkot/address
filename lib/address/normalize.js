const { country2abbr } = require('../country');
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
    return address;
  }

  let [country, state, town, street] = address.split(',').map(part => part.trim()).reverse();

  if (country2abbr[country]) {
    country = country2abbr[country];
  }
  else {
    const _state = getState(country);
    const _country = state2country[_state];
    if (_state && _country) {
      street = town;
      town = state;
      state = _state;
      country = _country;
    }
  }
  state = getState(state);
  if (state && !(street || abbr2state[state])) {
    street = town;
    town = state;
    state = '';
  }

  return [street, town, state, country].map(part => part || '').join(',').replace(/^,+/, '');
}

function getState(state) {
  let usState = /^([a-zA-Z]{2})(\s+\d{5}(?:-\d{4})?)?$/.exec(state);
  if (usState) {
    usState = usState[1].toUpperCase();
  }
  if (usState) {
    state = usState;
  }
  else {
    state = state2abbr[state] || state;
  }
  return state;
}
