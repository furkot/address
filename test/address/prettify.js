const test = require('node:test');
const assert = require('node:assert');

const prettify = require('../../lib/address/prettify');

test('prettify address', () => {
  assert.strictEqual(
    prettify(),
    '',
    'undefined address'
  );
  assert.strictEqual(
    prettify(''),
    '',
    'empty address'
  );
  assert.strictEqual(
    prettify(',,,'),
    '',
    'empty parts'
  );
  assert.strictEqual(
    prettify('123 Main St,New York,NY'),
    '123 Main St, New York, NY',
    'missing parts'
  );
  assert.strictEqual(
    prettify('123 Main St, New York, NY'),
    '123 Main St, New York, NY',
    'already pretty address'
  );
  assert.strictEqual(
    prettify('123 Main St,New York,NY,US'),
    '123 Main St, New York, NY',
    'american address with all fields present'
  );
  assert.strictEqual(
    prettify(',Los Angeles,CA,US'),
    'Los Angeles, CA',
    'american address with some fields present'
  );
  assert.strictEqual(
    prettify('123 Main St,Toronto,ON,CA'),
    '123 Main St, Toronto, ON, Canada',
    'canadian address with all fields present'
  );
  assert.strictEqual(
    prettify('10 Rue Tournefort,Paris,,FR'),
    '10 Rue Tournefort, Paris, France',
    'european address without state'
  );
  assert.strictEqual(
    prettify('1 Via Toselli,Palagiano,Taranto,IT'),
    '1 Via Toselli, Palagiano, Taranto, Italy',
    'european address with state'
  );
  assert.strictEqual(
    prettify('41 Via Niccolo\' Tommaso D\'Aquino,Taranto,Taranto,IT'),
    '41 Via Niccolo\' Tommaso D\'Aquino, Taranto, Italy',
    'european address with city that is state'
  );
});

