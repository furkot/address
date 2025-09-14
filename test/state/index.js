import assert from 'node:assert';
import test from 'node:test';
import { abbr2state, country2states, state2abbr, state2country } from '../../lib/state/index.js';

test('state name to abbreviation', () => {
  assert.strictEqual(state2abbr['California'], 'CA');
  assert.strictEqual(state2abbr['california'], undefined);
});

test('state abbreviation to name', () => {
  assert.strictEqual(abbr2state['NB'], 'New Brunswick');
  assert.strictEqual(abbr2state['nb'], undefined);
});

test('state to country', () => {
  assert.strictEqual(state2country['CA'], 'US');
  assert.strictEqual(state2country['NB'], 'CA');
  assert.strictEqual(state2country['nb'], undefined);
});

test('country to states', () => {
  assert.strictEqual(country2states.US['CA'], 'California');
  assert.strictEqual(country2states.CA['NB'], 'New Brunswick');
  assert.strictEqual(country2states.IT, undefined);
});
