const test = require('node:test');
const assert = require('node:assert');

const normalize = require('../../lib/address/normalize');

test('normalize address', () => {
  assert.strictEqual(
    normalize(),
    undefined,
    'undefined address'
  );
  assert.strictEqual(
    normalize(''),
    undefined,
    'empty address'
  );
  assert.strictEqual(
    normalize(',,,'),
    undefined,
    'all empty parts'
  );
  assert.strictEqual(
    normalize('France'),
    ',,,FR',
    'only country'
  );
  assert.strictEqual(
    normalize('CA'),
    ',,,CA',
    'can be country or state'
  );
  assert.strictEqual(
    normalize('NB'),
    ',,NB,CA',
    'only state code'
  );
  assert.strictEqual(
    normalize('Ontario'),
    ',,ON,CA',
    'only state name'
  );
  assert.strictEqual(
    normalize('123 Main St,New York,NY'),
    '123 Main St,New York,NY,US',
    'missing country'
  );
  assert.strictEqual(
    normalize('123 Main St, New York, New York, USA'),
    '123 Main St,New York,NY,US',
    'full address'
  );
  assert.strictEqual(
    normalize('123 Main St,New York,NY,US'),
    '123 Main St,New York,NY,US',
    'already normalized'
  );
});
