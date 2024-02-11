const { keys2values } = require('../util');

const abbr2country = require('./countries.json');
const country2abbr = keys2values(abbr2country);

// add some aliases
country2abbr['Brasil'] = 'BR';
country2abbr['Polska'] = 'PL';
country2abbr['United States of America'] = 'US';
country2abbr.USA = 'US';

module.exports = {
  country2abbr,
  abbr2country
};
