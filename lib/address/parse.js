const { abbr2country } = require('../country');
const { state2country } = require('../state');

module.exports = parse;

/**
 * Parses an address string
 * @param {string} address the address string
 * @returns {Object} the parsed address
 *
 * @example
 * parse('1 street,city,province,country');
 * // => { house: '1', street: 'street', city: 'city', province: 'province', country: 'country' }
 */
function parse(address) {
  if (!address) {
    return;
  }
  const parts = address.split(',');
  if (parts.length !== 4) {
    return; // don't even try to parse
  }
  let [street, city, province, country] = parts;
  if (!country && province) {
    country = state2country[province];
  }
  if (country === 'US') {
    country = 'USA';
  }
  else {
    country = abbr2country[country] || country;
  }
  // extract number from street
  let house = street.match(/^\d+[^\s]\s/);
  if (house) {
    street = street.replace(house, '');
    house = house[0].trim();
  }
  return Object.entries({
    house,
    street,
    city,
    province,
    country
  }).reduce((obj, [key, value]) => {
    if (value) {
      obj[key] = value;
    }
    return obj;
  }, {});
}
