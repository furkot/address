const test = require('tape');
const { country2abbr, abbr2country } = require('../../lib/country');

test('country name to abbreviation', function (t) {
  t.equal(country2abbr['United States'], 'US');
  t.notOk(country2abbr['united states']);
  t.end();
});

test('country abbreviation to name', function (t) {
  t.equal(abbr2country['PL'], 'Poland');
  t.notOk(abbr2country['pl']);
  t.end();
});
