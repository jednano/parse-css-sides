# parse-css-sides

[![NPM version][npm-version-img]][npm-version-url]
[![npm license][npm-license-img]][npm-license-url]
[![Travis Build Status][travis-img]][travis-url]
[![codecov][codecov-img]][codecov-url]
[![Downloads][downloads-img]][downloads-url]
[![Minified size][min-size-img]][bundlephobia-url]
[![Gzip size][gzip-size-img]][bundlephobia-url]
[![Unicorn Approved][unicorn-img]][unicorn-url]

[![npm][npm-img]][npm-url]

This package exports a default function that parses CSS sides (e.g., the value of `margin`, `padding` and `border` declarations).

_Originally created for [PostCSS](https://github.com/postcss/postcss) plugins._

## Installation

```
$ npm install parse-css-sides [--save[-dev]]
```

## Usage

### JavaScript

```ts
import parseSides from 'parse-css-sides';
const sides = parseSides('0 5% 10px');
/**
 * {
 *   top: '0',
 *   right: '5%',
 *   bottom: '10px',
 *   left: '5%',
 * }
 **/
```

All 4 sides are always returned and are always strings.

_Note: if `!important` is found, an additional `important: true` will be added to the result._

### TypeScript

This is a TypeScript project with generated type definitions included. There is an additional `ISides` interface that is exported if you need it for whatever reason. It just defines the shape of the result:

```ts
interface ISides {
	top: string
	right: string
	bottom: string
	left: string
	important?: boolean
}
```

## Testing

```
$ npm test
```

This will run the tests in watch mode.

```
$ npm run cover
```

This will run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.

[bundlephobia-url]: https://bundlephobia.com/result?p=parse-css-sides
[codecov-img]: https://codecov.io/gh/jedmao/parse-css-sides/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/jedmao/parse-css-sides
[downloads-img]: http://img.shields.io/npm/dm/parse-css-sides.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/parse-css-sides
[gzip-size-img]: https://badgen.net/bundlephobia/minzip/parse-css-sides?label=gzip
[min-size-img]: https://badgen.net/bundlephobia/min/parse-css-sides?label=minified
[npm-img]: https://nodei.co/npm/parse-css-sides.svg?downloads=true
[npm-license-img]: http://img.shields.io/npm/l/parse-css-sides.svg?style=flat-square
[npm-license-url]: https://www.npmjs.org/package/parse-css-sides
[npm-url]: https://nodei.co/npm/parse-css-sides/
[npm-version-img]: http://img.shields.io/npm/v/parse-css-sides.svg?style=flat
[npm-version-url]: https://www.npmjs.org/package/parse-css-sides
[travis-img]: https://img.shields.io/travis/jedmao/parse-css-sides.svg
[travis-url]: https://travis-ci.org/jedmao/parse-css-sides
[unicorn-img]: https://img.shields.io/badge/unicorn-approved-ff69b4.svg
[unicorn-url]: https://twitter.com/sindresorhus/status/457989012528316416?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.quora.com%2FWhat-does-the-unicorn-approved-shield-mean-in-GitHub
