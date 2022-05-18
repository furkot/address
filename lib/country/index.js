const { arr2obj } = require('../util');

const abbr2country = require('./countries.json');
const country2abbr = arr2obj(abbr2country);

module.exports = { country2abbr, abbr2country };
