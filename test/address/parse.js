const test = require('node:test');
const assert = require('node:assert');

const parse = require('../../lib/address/parse');

test('parse address', () => {
  assert.deepStrictEqual(
    parse(),
    undefined,
    'undefined address'
  );
  assert.deepStrictEqual(
    parse(''),
    undefined,
    'empty address'
  );
  assert.deepStrictEqual(
    parse('123 Main St,New York,NY,US'),
    { house: '123', street: 'Main St', town: 'New York', province: 'NY', country: 'USA' },
    'all fields present'
  );
  assert.deepStrictEqual(
    parse('123A Main St,,NY,US'),
    { house: '123A', street: 'Main St', province: 'NY', country: 'USA' },
    'missing town'
  );
  assert.deepStrictEqual(
    parse(',Paris,,FR'),
    { town: 'Paris', country: 'France' },
    'missing house and street'
  );
  assert.deepStrictEqual(
    parse('123 Main St,New York,NY,'),
    { house: '123', street: 'Main St', town: 'New York', province: 'NY', country: 'USA' },
    'missing country'
  );
});
