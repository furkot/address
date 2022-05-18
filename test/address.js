const test = require('tape');
const { stringify } = require('../lib/address');

test('stringify address', function (t) {
  t.notOk(stringify());
  t.equal(stringify({}), '');
  t.equal(stringify({
    house: '1',
    street: 'Main St',
    city: 'Vancouver',
    state: 'BC',
    country: 'Canada'
  }), '1 Main St, Vancouver, BC, Canada');
  t.end();
});

test('stringify US address', function (t) {
  t.equal(stringify({
    house: '1',
    street: 'Main St',
    city: 'Waltham',
    state: 'MA',
    country: 'United States'
  }), '1 Main St, Waltham, MA');
  t.equal(stringify({
    state: 'SC',
    country: 'United States'
  }), 'SC');
  t.equal(stringify({
    country: 'United States'
  }), 'United States');
  t.end();
});
