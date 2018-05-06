# TS-Polyfill

> Runtime polyfills for TypeScript libs, powered by [core-js](https://github.com/zloirock/core-js)! :battery:

[![npm](https://img.shields.io/npm/v/ts-polyfill.svg)](https://www.npmjs.com/package/ts-polyfill) [![Build Status](https://api.travis-ci.org/ryanelian/ts-polyfill.svg?branch=master)](https://travis-ci.org/ryanelian/ts-polyfill)

## Install

`npm install ts-polyfill`

## Getting Started

- Modify your project `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "es5",
      
      "es2015.core",
      "es2015.promise",
      "es2016.array.include",
      "es2017.string",
      "es2018.promise",
      
      "es2015.collection",
      "es2015.reflect",
      "es2017.object",
      "es2017.typedarrays"
    ]
  }
}
```

- In your app's entry point, import the polyfills:

```ts
// very useful, recommended!
import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2015-promise';
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2018-promise';

// can be useful for certain types of app...
import 'ts-polyfill/lib/es2015-collection';
import 'ts-polyfill/lib/es2015-reflect';
import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2017-typed-arrays';
```

- Obviously, you don't need to use them all...

> Shameless self-promotion: use [instapack](https://github.com/ryanelian/instapack) for easy, rapid, and painless web app development using TypeScript!

## Alternative Techniques

- Include everything implicitly:

```ts
import 'ts-polyfill';
```

- Include everything using a pre-built script: download then include these as `<script>` in your HTML (before your app script):

  - [ts-polyfill.min.js](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js) (47.4 kB, 16.5 kB GZIP)

  - [ts-polyfill.min.js.map](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js.map) 

## Caveats

- `es2015.core` [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill is **gigantic** (140 kb) and is not included.

    - If you REALLY need it, use polyfill provided by [unorm](https://github.com/walling/unorm) library.

- `es2015.core` [Object.getOwnPropertySymbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) polyfill is missing because `es2015.symbol` and `es2015.symbol.wellknown` libs polyfills are not implemented.
