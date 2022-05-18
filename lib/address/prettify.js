module.exports = prettify;

const {
  abbr2country
} = require('../country');

/**
 * Makes and address more readeable
 * @param {string} address
 * @returns {string}
 *
 * @example
 * prettify('1 street,city,state,country'); // => '1 street, city, state, country'
 * prettify('1 street,,state,country'); // => '1 street, state, country'
 * prettify(',city,,country'); // => 'city, country'
 */
function prettify(address) {
  if (!address) {
    return '';
  }
  const parts = address.split(',');
  if (parts.length !== 4) {
    return pretty(parts);
  }
  if (parts[3] === 'US') {
    parts.length = 3;
  }
  else {
    parts[3] = abbr2country[parts[3]] || parts[3];
    if (parts[1] === parts[2]) {
      parts.splice(2, 1);
    }
  }
  return pretty(parts);
}

function pretty(parts) {
  return parts.map(part => part.trim()).filter(Boolean).join(', ');
}
