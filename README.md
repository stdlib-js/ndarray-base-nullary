<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Nullary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a nullary callback and assign results to elements in an output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-nullary
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var nullary = require( '@stdlib/ndarray-base-nullary' );
```

#### nullary( arrays, fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function fcn() {
    return 10.0;
}

// Create data buffers:
var xbuf = new Float64Array( 12 );

// Define the shape of the output array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create the output ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Apply the nullary function:
nullary( [ x ], fcn );

console.log( x.data );
// => <Float64Array>[ 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0, 0.0, 10.0, 10.0, 0.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing an output ndarray.
-   **fcn**: nullary function to apply.

The provided ndarray should be an `object` with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a nullary function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var ndarray2array = require( '@stdlib/ndarray-base-to-array' );
var nullary = require( '@stdlib/ndarray-base-nullary' );

var x = {
    'dtype': 'generic',
    'data': filledarray( 0, 10, 'generic' ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};

nullary( [ x ], discreteUniform( -100, 100 ) );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Character codes for data types:

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- charcodes -->

-   **x**: `bool` (boolean).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **f**: `float32` (single-precision floating-point number).
-   **d**: `float64` (double-precision floating-point number).
-   **k**: `int16` (signed 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **s**: `int8` (signed 8-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).

<!-- ./charcodes -->

Function name suffix naming convention:

```text
stdlib_ndarray_<output_data_type>[_as_<callback_return_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_d(...) {...}
```

is a function which accepts one double-precision floating-point output ndarray. In other words, the suffix encodes the function type signature.

To support callbacks whose return values are of a different data type than the output ndarray data types, the naming convention supports appending an `as` suffix. For example,

<!-- run-disable -->

```c
void stdlib_ndarray_f_as_d(...) {...}
```

is a function which accepts one single-precision floating-point output ndarray. However, the callback returns double-precision floating-point numbers. Accordingly, the output values need to be cast using the following conversion sequence

```c
// Evaluate the callback:
double out = f();

// Convert the callback return value to single-precision:
x[ i ] = (float)out;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/nullary.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- loops -->

#### stdlib_ndarray_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static stdlib_complex64_t fcn( void ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_as_f( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static float fcn( void ) {
    return 10.0f;
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_as_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_as_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_as_k( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_as_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_as_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_as_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_as_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_as_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_as_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_as_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_as_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_c_as_z( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static stdlib_complex128_t fcn( void ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_c_as_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_c_as_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static double fcn( void ) {
    return 10.0;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_f( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static float fcn( void ) {
    return 10.0f;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_i( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int32_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_k( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_d_as_u( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint32_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_d_as_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_d_as_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static float fcn( void ) {
    return 10.0f;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_as_d( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static double fcn( void ) {
    return 10.0;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_as_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_as_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_as_k( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_as_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_as_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_as_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_as_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_as_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_f_as_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_f_as_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_f_as_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int32_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_as_k( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_as_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_as_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_as_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_as_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_as_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_i_as_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_i_as_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_i_as_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_k_as_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_k_as_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_k_as_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_t_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_t_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_t_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint32_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_u_as_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_u_as_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_u_as_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_x( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_BOOL;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static bool fcn( void ) {
    return true;
}

// Apply the callback:
int8_t status = stdlib_ndarray_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static stdlib_complex128_t fcn( void ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_z( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_b( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_b( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_b( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_c( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static stdlib_complex64_t fcn( void ) {
    // ...
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_c( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_c( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_d( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static double fcn( void ) {
    return 10.0;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_d( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_d( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_f( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static float fcn( void ) {
    return 10.0f;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_f( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_f( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_i( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int32_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_i( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_i( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_k( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_k( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_k( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_s( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static int8_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_s( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_s( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_t( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint16_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_t( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_t( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_z_as_u( \*arrays\[], \*fcn )

Applies a nullary callback and assigns results to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data type:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;

// Create an underlying byte array:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shape:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };

// Define the index offset:
int64_t ox = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an output ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing a pointer to the ndarray:
struct ndarray *arrays[] = { x };

// Define a callback:
static uint32_t fcn( void ) {
    return 10;
}

// Apply the callback:
int8_t status = stdlib_ndarray_z_as_u( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose only element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_z_as_u( struct ndarray *arrays[], void *fcn );
```

<!-- ./loops -->

<!-- macros -->

<!-- TODO: consider documenting macros -->

<!-- ./macros -->

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/nullary.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static void print_ndarray_contents( const struct ndarray *x ) {
    int64_t i;
    int8_t s;
    double v;

    for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
        s = stdlib_ndarray_iget_float64( x, i, &v );
        if ( s != 0 ) {
            fprintf( stderr, "Unable to resolve data element.\n" );
            exit( EXIT_FAILURE );
        }
        fprintf( stdout, "data[%"PRId64"] = %lf\n", i, v );
    }
}

static double fcn( void ) {
    return 10.0;
}

int main( void ) {
    // Define the ndarray data type:
    enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;

    // Create an underlying byte array:
    uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define the number of dimensions:
    int64_t ndims = 3;

    // Define the array shape:
    int64_t shape[] = { 2, 2, 2 };

    // Define the strides:
    int64_t sx[] = { 32, 16, 8 };

    // Define the offset:
    int64_t ox = 0;

    // Define the array order:
    enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { imode };
    int64_t nsubmodes = 1;

    // Create an output ndarray:
    struct ndarray *x = stdlib_ndarray_allocate( dtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Define an array containing a pointer to the ndarray:
    struct ndarray *arrays[] = { x };

    // Apply the callback:
    int8_t status = stdlib_ndarray_d( arrays, (void *)fcn );
    if ( status != 0 ) {
        fprintf( stderr, "Error during computation.\n" );
        exit( EXIT_FAILURE );
    }

    // Print the results:
    print_ndarray_contents( x );
    fprintf( stdout, "\n" );

    // Free allocated memory:
    stdlib_ndarray_free( x );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-nullary.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-nullary

[test-image]: https://github.com/stdlib-js/ndarray-base-nullary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-nullary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-nullary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-nullary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-nullary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-nullary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-nullary/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-nullary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-nullary/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-nullary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-nullary/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-nullary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-nullary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-nullary/main/LICENSE

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
