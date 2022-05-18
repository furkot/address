const { arr2obj } = require('../util');
const { abbr2country } = require('../country');

const states = {
  CA: require('./ca.json'),
  US: require('./us.json')
};

const state2abbr = Object.assign(Object.create(null), states.US, states.CA);
const abbr2state = arr2obj(state2abbr);
const state2country = [
  'US',
  'CA'
].reduce((obj, key) => Object.assign(obj, arr2obj(Object.values(states[key]), abbr2country[key])),
  Object.create(null));

module.exports = {
  abbr2state,
  state2abbr,
  state2country
};
