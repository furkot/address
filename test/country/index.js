const test = require('node:test');
const assert = require('node:assert');

const { abbr2country, country2abbr } = require('../../lib/country');

test('country name to abbreviation', () => {
  assert.strictEqual(country2abbr['United States'], 'US');
  assert.strictEqual(country2abbr['united states'], undefined);
});

test('country abbreviation to name', () => {
  assert.strictEqual(abbr2country['FR'], 'France');
  assert.strictEqual(abbr2country['PL'], 'Poland');
  assert.strictEqual(abbr2country['pl'], undefined);
});
