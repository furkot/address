const test = require('node:test');
const assert = require('node:assert');

const prettify = require('../../lib/address/prettify');

test('prettify address', () => {
  assert.strictEqual(prettify(), '', 'undefined address');
  assert.strictEqual(prettify(''), '', 'empty address');
  assert.strictEqual(prettify(',,,'), '', 'empty parts');
  assert.strictEqual(prettify('123 Main St,New York,NY'), '123 Main St, New York, NY', 'state in country position');
  assert.strictEqual(prettify('123 Main St, New York, NY'), '123 Main St, New York, NY', 'already pretty address');
  assert.strictEqual(
    prettify('123 Main St,New York,NY,US'),
    '123 Main St, New York, NY',
    'american address with all fields present'
  );
  assert.strictEqual(prettify(',Los Angeles,CA,US'), 'Los Angeles, CA', 'american address with some fields present');
  assert.strictEqual(prettify('CA,US'), 'California, USA', 'american address with state only - no leading comma');
  assert.strictEqual(prettify('US'), 'United States', 'american address with country only - no leading commas');
  assert.strictEqual(
    prettify('123 Main St,Toronto,ON,CA'),
    '123 Main St, Toronto, ON, Canada',
    'canadian address with all fields present'
  );
  assert.strictEqual(prettify(',,ON,CA'), 'Ontario, Canada', 'canadian address with state and country');
  assert.strictEqual(prettify('Mantova,,IT'), 'Mantova, Italy', 'european address with some fields present');
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
    prettify("41 Via Niccolo' Tommaso D'Aquino,Taranto,Taranto,IT"),
    "41 Via Niccolo' Tommaso D'Aquino, Taranto, Italy",
    'european address with city that is state'
  );
  assert.strictEqual(
    prettify('51b Alkotás utca,Budapeszt,Budapeszt,Węgry'),
    '51b Alkotás utca, Budapeszt, Węgry',
    'address in polish'
  );
  assert.strictEqual(
    prettify('Via Lugo 182,Faenza,,Italia'),
    'Via Lugo 182, Faenza, Italia',
    'partial address in italian'
  );
  assert.strictEqual(prettify('Budapeszt,,Węgry'), 'Budapeszt, Węgry', 'partial address in polish');
  assert.strictEqual(prettify('Budapeszt,'), 'Budapeszt', 'only city');
  assert.strictEqual(prettify('Via Lugo 182,Faenza,,'), 'Via Lugo 182, Faenza', 'only street and city');
  assert.strictEqual(prettify('123 Main St,,NY,'), '123 Main St, NY', 'only street and state');
});
