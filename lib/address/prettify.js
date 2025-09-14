module.exports = prettify;

const { abbr2country } = require('../country');
const { abbr2state } = require('../state');

/**
 * Makes and address more readeable
 * @param {string} address
 * @returns {string}
 *
 * @example
 * prettify('1 street,city,state,country'); // => '1 street, city, state, country'
 * prettify('1 street,,state,country'); // => '1 street, state, country'
 * prettify(',city,,country'); // => 'city, country'
 * prettify('city,,country'); // => 'city, country'
 */
function prettify(address) {
  if (!address) {
    return '';
  }
  const parts = address.split(',').map(part => part.trim());
  if (parts.length > 4) {
    return pretty(parts);
  }
  while (parts.length < 4) {
    parts.unshift('');
  }
  parts[3] = abbr2country[parts[3]] || parts[3];
  if (!(parts[0] || parts[1])) {
    if (!parts[2]) {
      return parts[3];
    }
    parts[2] = abbr2state[parts[2]] || parts[2];
    if (parts[3] === 'United States') {
      parts[3] = 'USA';
    }
  }
  if (parts[3] === 'United States') {
    parts.length = 3;
  } else {
    if (parts[1] === parts[2]) {
      parts.splice(2, 1);
    }
  }
  return pretty(parts);
}

function pretty(parts) {
  return parts.filter(Boolean).join(', ');
}
