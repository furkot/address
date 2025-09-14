const { keys2values } = require('../util');

const country2states = {
  CA: keys2values(require('./ca.json')),
  US: keys2values(require('./us.json'))
};

const abbr2state = Object.assign(Object.create(null), country2states.US, country2states.CA);
const state2abbr = keys2values(abbr2state);
const state2country = Object.entries(country2states).reduce(
  (obj, [country, states]) =>
    // biome-ignore lint/performance/noAccumulatingSpread: FIXME
    Object.assign(
      obj,
      Object.keys(states).reduce((obj, state) => {
        obj[state] = country;
        return obj;
      }, obj)
    ),
  Object.create(null)
);

module.exports = {
  abbr2state,
  country2states,
  state2abbr,
  state2country
};
