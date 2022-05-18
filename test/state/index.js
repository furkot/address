const test = require('tape');
const { abbr2state, state2abbr, state2country } = require('../../lib/state');

test('state name to abbreviation', function (t) {
  t.equal(state2abbr['California'], 'CA');
  t.notOk(state2abbr['california']);
  t.end();
});

test('state abbreviation to name', function (t) {
  t.equal(abbr2state['NB'], 'New Brunswick');
  t.notOk(abbr2state['nb']);
  t.end();
});

test('state to country', function (t) {
  t.equal(state2country['CA'], 'United States');
  t.equal(state2country['NB'], 'Canada');
  t.notOk(state2country['nb']);
  t.end();
});
