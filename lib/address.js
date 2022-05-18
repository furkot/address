const { arr2obj } = require("./util");

module.exports = {
  stringify
};

const knownCountry = arr2obj([
  'United States'
], true);

function stringify(spec, known = knownCountry) {
  if (!spec) {
    return;
  }
  const { house, street, city, state, country } = spec;
  const address = [];
  if (house && street) {
    address.push([house, street].join(' '));
  }
  else if (street) {
    address.push(street);
  }
  if (city) {
    address.push(city);
  }
  if (state) {
    address.push(state);
  }
  if (country && !(address.length && known[country])) {
    address.push(country);
  }
  return address.join(', ');
}
