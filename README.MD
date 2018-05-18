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

- In your app's entry point, import the polyfills: (Obviously, you don't need to use them all...)

```ts
// very useful, recommended!
import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2015-promise';
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2018-promise';

// can be useful for certain apps...
import 'ts-polyfill/lib/es2015-collection';
import 'ts-polyfill/lib/es2015-reflect';
import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2017-typed-arrays';
```

> Shameless self-promotion: use [instapack](https://github.com/ryanelian/instapack) for easy, rapid, and painless web app development using TypeScript!

## Alternative Techniques

- Include everything implicitly: :ok_hand:

```ts
import 'ts-polyfill';
```

- Include everything using a pre-built script: download then include these as `<script>` in your HTML (before your app script):

  - [ts-polyfill.min.js](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js) (47.6 kB, 16.6 kB GZIP)

  - [ts-polyfill.min.js.map](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js.map) 

## FAQ

### What's up with the semver?

Above version 0.0.4 (last known with TypeScript 2.8.3), we follow TypeScript version. That means: ts-polyfill 2.9.0 is compatible with TypeScript 2.9.0 libs, and so on!

**Release Cadence:** We will release new version if necessary whenever new TypeScript versions are published.

### Why not just use core-js directly?

- We made extra efforts to guarantee (near) 100% coverage for polyfills of corresponding libs [by sweeping TypeScript libs API one-by-one](https://github.com/ryanelian/ts-polyfill/blob/master/src/es2015-core.ts).

- We don't include lib polyfills which we consider to be 'unstable'

  - **Example 1:** [Almost half of `Symbol` features cannot be polyfilled.](http://kangax.github.io/compat-table/es6) Including this lib just because partial polyfill exists for it would be misleading and dangerous for the developer!

  - **Example 2:** `esnext.feature` libs are probably unstable. We will wait for them to be marked as something like `es2018.feature` before attempting to polyfill them.

- We will update the polyfills whenever [the official TypeScript libs](https://github.com/Microsoft/TypeScript/tree/master/lib) change.

- We will protect ts-polyfill consumers against breaking changes in core-js: our API will probably never change, but core-js API may change. (core-js version 3 coming soon...)

- We reduce total polyfill size by targeting ES5. (TypeScript projects usually transpile down to ES5, but core-js polyfills ES3)

### What's the catch?

- `es2015.core` [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill is **gigantic** (140 kb) and is not included.

    - If you REALLY need it, use polyfill provided by [unorm](https://github.com/walling/unorm) library.

- `es2015.core` [Object.getOwnPropertySymbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) polyfill is missing because `es2015.symbol` and `es2015.symbol.wellknown` libs polyfills are not implemented.

- `es2015.reflect` method `Reflect.construct` cannot: [sets new.target meta-property, Array subclassing, RegExp subclassing, Function subclassing](http://kangax.github.io/compat-table/es6/#test-Reflect).
