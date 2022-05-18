const { keys2values } = require('../util');

const abbr2country = require('./countries.json');
const country2abbr = keys2values(abbr2country);

country2abbr.USA = 'US';

module.exports = {
  country2abbr,
  abbr2country
};
