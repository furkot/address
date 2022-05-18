[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# address

Furkot address normalizer.

## Install

```sh
$ npm install --save @furkot/address
```

## Usage

```js
const {
  normalize,
  stringify,
  parse,
  prettify
} = require('@furkot/address');

normalize('123 Main St, Los Angeles, California'); // => '123 Main St,Los Angeles,CA,US'

stringify({
  house: 123,
  street: 'Main St',
  city: 'Los Angeles',
  state: 'California',
  country: 'USA'
}); // => '123 Main St,Los Angeles,CA,US'

parse('123 Main St,Los Angeles,CA,US'); // =>
// { house: 123,
//   street: 'Main St',
//   city: 'Los Angeles',
//   state: 'CA',
//   country: 'USA'
// }; 

prettify(',Los Angeles,CA,US'); // => 'Los Angeles, CA'
prettify('123 Main St,Toronto,ON,CA'); // => '123 Main St, Toronto, ON, Canada'
prettify('1 Via Toselli,Taranto,Taranto,IT'); // => '1 Via Toselli, Taranto, Italy
```

## License

MIT © [Natalia Kowalczyk](https://melitele.me)

[npm-image]: https://img.shields.io/npm/v/@furkot/address.svg
[npm-url]: https://npmjs.org/package/@furkot/address

[build-url]: https://github.com/furkot/address/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/furkot/address/check

[deps-image]: https://img.shields.io/librariesio/release/npm/@furkot/address
[deps-url]: https://libraries.io/npm/@furkot%2Faddress
