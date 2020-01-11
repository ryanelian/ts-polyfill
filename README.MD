# TS-Polyfill

> Runtime polyfills for TypeScript libs, powered by [core-js](https://github.com/zloirock/core-js)! :battery: :nut_and_bolt:

[![npm](https://img.shields.io/npm/v/ts-polyfill.svg)](https://www.npmjs.com/package/ts-polyfill) [![GitHub Actions](https://github.com/ryanelian/ts-polyfill/workflows/Node%20CI/badge.svg)](https://github.com/ryanelian/ts-polyfill/actions)

## Install

`npm install ts-polyfill`

## Getting Started

- Modify your project `tsconfig.json` to add type definitions required.

  - *(Obviously, you don't need EVERYTHING. Pick the ones you actually need to minimize bandwidth!)*

  - In this example, we are targeting ES2015 so only ES2016 and above polyfills are needed:

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ES2015",
      "ES2016.Array.Include",
      "ES2017.Object",
      "ES2017.String",
      "ES2018.AsyncIterable",
      "ES2018.Promise",
      "ES2019.Array",
      "ES2019.Object",
      "ES2019.String",
      "ES2019.Symbol",
      "ES2020.String",
      "ES2020.Symbol.WellKnown"
    ]
  }
}
```

> **[It's nearly 2020.](https://www.microsoft.com/en-us/windowsforbusiness/end-of-windows-7-support)** You should be targeting ES2015 or higher. [Yes, seriously. Insist to your manager / customers.](https://www.extremetech.com/internet/290872-the-new-microsoft-edge-browser-will-have-an-ie-mode)

- Then, in the entry point of your application, import the polyfills.

  - The complete list of available polyfills (including ES2015 polyfills for poor souls targeting ES5) can be found here: https://github.com/ryanelian/ts-polyfill/tree/master/lib

```ts
// index.ts
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2018-async-iterable';   // for-await-of
import 'ts-polyfill/lib/es2018-promise';
import 'ts-polyfill/lib/es2019-array';
import 'ts-polyfill/lib/es2019-object';
import 'ts-polyfill/lib/es2019-string';
import 'ts-polyfill/lib/es2019-symbol';
import 'ts-polyfill/lib/es2020-string';
import 'ts-polyfill/lib/es2020-symbol-wellknown';

import 'ts-polyfill/lib/es2020-global-this';      // globalThis (no tsconfig.json lib)
```

> Shameless self-promotion: **use [instapack](https://github.com/ryanelian/instapack) for easy, rapid, and painless web app development using TypeScript!**

## Alternative Techniques

- Include everything implicitly: :ok_hand:

```ts
import 'ts-polyfill';
```

- Include everything using a pre-built script: download then include these as `<script>` in your HTML (before your app script):

  - [ts-polyfill.min.js](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js) (69.96 KB, 24.01 KB GZIP)

  - [ts-polyfill.min.js.map](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js.map) 

## FAQ

### What's up with the semver?

Above version 0.0.4 (last known compatibility with TypeScript 2.8.3), we follow TypeScript version. Which means: ts-polyfill 2.9.0 is compatible with TypeScript 2.9.0 libs, and so on!

**Release Cadence:** We will release new version if necessary whenever new TypeScript versions are published.

### Why shouldn't I just use core-js directly?

- We made extra efforts to guarantee (near) 100% coverage for polyfills of corresponding libs [by sweeping TypeScript libs API one-by-one](https://github.com/ryanelian/ts-polyfill/blob/master/src/es2015-core.ts).

- We don't include lib polyfills which we consider to be 'unstable'

  - **Example:** `esnext.feature` libs are probably unstable. We will wait for them to be marked as something like `es2018.feature` before attempting to polyfill them.

- We will update the polyfills whenever [the official TypeScript libs](https://github.com/Microsoft/TypeScript/tree/master/lib) change. (It happens yo)

- We will protect ts-polyfill consumers against breaking changes in core-js: our API will probably never change, but core-js API may change. (For example: core-js migration from version 2 to version 3)

- We attempt to reduce total polyfill size by targeting ES5 instead of ES3.

### What's the catch?

- `es2015.core` [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill is **gigantic** (140 kb) and is not included.

    - **If you REALLY need it,** use polyfill provided by [unorm](https://github.com/walling/unorm) library.

- ES2015 Reflect polyfills are best-effort. (15/20)

- ES2015 Symbol and Well Known Symbol polyfills are best-effort. (8/12 and 22/26)
