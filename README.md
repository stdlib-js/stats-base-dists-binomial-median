<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Median

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Binomial][binomial-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_median" align="center" raw="\operatorname{Median}\left( X \right) = [ n p ]" alt="Median for a binomial distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = [ n p ]" data-equation="eq:binomial_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/median/docs/img/equation_binomial_median.svg" alt="Median for a binomial distribution.">
    <br>
</div>

<!-- </equation> -->

where `n` is the number of trials, `p` is the success probability, and `[x]` is the [nearest integer][nearest-integer] function.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-binomial-median
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats-base-dists-binomial-median' );
```

#### median( n, p )

Returns the [median][median] of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var v = median( 20, 0.1 );
// returns 2

v = median( 50, 0.5 );
// returns 25
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = median( NaN, 0.5 );
// returns NaN

v = median( 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var v = median( 1.5, 0.5 );
// returns NaN

v = median( -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = median( 20, -1.0 );
// returns NaN

v = median( 20, 1.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var median = require( '@stdlib/stats-base-dists-binomial-median' );

var v;
var i;
var n;
var p;

for ( i = 0; i < 10; i++ ) {
    n = round( randu() * 100.0 );
    p = randu();
    v = median( n, p );
    console.log( 'n: %d, p: %d, Median(X;n,p): %d', n, p.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-binomial-median.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-binomial-median

[test-image]: https://github.com/stdlib-js/stats-base-dists-binomial-median/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/stats-base-dists-binomial-median/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-binomial-median/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-binomial-median?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-binomial-median.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-binomial-median/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-binomial-median/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-binomial-median/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-binomial-median/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-binomial-median/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-binomial-median/main/LICENSE

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[median]: https://en.wikipedia.org/wiki/Median

[nearest-integer]: https://en.wikipedia.org/wiki/Nearest_integer_function

</section>

<!-- /.links -->
