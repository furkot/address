import assert from 'node:assert';
import test from 'node:test';
import { abbr2country, country2abbr } from '../../lib/country/index.js';

test('country name to abbreviation', () => {
  assert.strictEqual(country2abbr['United States'], 'US');
  assert.strictEqual(country2abbr['united states'], undefined);
});

test('country abbreviation to name', () => {
  assert.strictEqual(abbr2country['FR'], 'France');
  assert.strictEqual(abbr2country['PL'], 'Poland');
  assert.strictEqual(abbr2country['pl'], undefined);
});
