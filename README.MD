# TS-Polyfill

> Runtime polyfills for TypeScript libs, powered by [core-js](https://github.com/zloirock/core-js)! :battery: :nut_and_bolt:

[![npm](https://img.shields.io/npm/v/ts-polyfill.svg)](https://www.npmjs.com/package/ts-polyfill) [![Build Status](https://ryanelian.visualstudio.com/ts-polyfill/_apis/build/status/ryanelian.ts-polyfill?branchName=master)](https://ryanelian.visualstudio.com/ts-polyfill/_build/latest?definitionId=3&branchName=master)

## Install

`npm install ts-polyfill`

## Getting Started

- Modify your project `tsconfig.json` to add type definitions required:

  - *(Obviously, you don't need EVERYTHING. Pick the ones you actually need)*

```json
{
  "compilerOptions": {
    "target": "es2015",
    "lib": [
      "dom",
      "dom.iterable",
      "es2015",
      "es2016.array.include",
      "es2017.object",
      "es2017.string",
      "es2018.asynciterable",
      "es2018.promise",
      "es2019.array",
      "es2019.object",
      "es2019.string",
      "es2020.string"
    ]
  }
}
```

- In above example, we are targeting ES2015 so only ES2016+ polyfills are needed!

  - **[It's nearly 2020.](https://www.microsoft.com/en-us/windowsforbusiness/end-of-windows-7-support)** You should be targeting ES2015 or higher. [Yes, seriously. Insist to your manager / customers.](https://www.extremetech.com/internet/290872-the-new-microsoft-edge-browser-will-have-an-ie-mode)

  - The complete list of polyfills (including ES2015 polyfills for poor souls targeting ES5) can be found here: https://github.com/ryanelian/ts-polyfill/tree/master/lib

- Then, in the entry point of your application, import the polyfills:

```ts
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2018-async-iterable';   // for-await-of
import 'ts-polyfill/lib/es2018-promise';
import 'ts-polyfill/lib/es2019-array';
import 'ts-polyfill/lib/es2019-object';
import 'ts-polyfill/lib/es2019-string';
import 'ts-polyfill/lib/es2020-string';
import 'ts-polyfill/lib/es2020-global-this';      // globalThis
```

> Shameless self-promotion: **use [instapack](https://github.com/ryanelian/instapack) for easy, rapid, and painless web app development using TypeScript!**

## Alternative Techniques

- Include everything implicitly: :ok_hand:

  - EXCEPT `es2018-async-iterable` AND `es2019-symbol` because they rely on `Symbol` object being available at runtime. (ES015+ only)

```ts
import 'ts-polyfill';
```

- Include everything using a pre-built script: download then include these as `<script>` in your HTML (before your app script):

  - [ts-polyfill.min.js](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js) (60.3 kB, 21.1 kB GZIP)

  - [ts-polyfill.min.js.map](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js.map) 

## FAQ

### What's up with the semver?

Above version 0.0.4 (last known compatibility with TypeScript 2.8.3), we follow TypeScript version. Which means: ts-polyfill 2.9.0 is compatible with TypeScript 2.9.0 libs, and so on!

**Release Cadence:** We will release new version if necessary whenever new TypeScript versions are published.

### Why shouldn't I just use core-js directly?

- We made extra efforts to guarantee (near) 100% coverage for polyfills of corresponding libs [by sweeping TypeScript libs API one-by-one](https://github.com/ryanelian/ts-polyfill/blob/master/src/es2015-core.ts).

- We don't include lib polyfills which we consider to be 'unstable'

  - **Example 1:** [Almost half of `Symbol` features cannot be polyfilled.](http://kangax.github.io/compat-table/es6) Including this lib just because partial polyfill exists for it would be misleading and dangerous for the developer!

  - **Example 2:** `esnext.feature` libs are probably unstable. We will wait for them to be marked as something like `es2018.feature` before attempting to polyfill them.

- We will update the polyfills whenever [the official TypeScript libs](https://github.com/Microsoft/TypeScript/tree/master/lib) change. (It happens yo)

- We will protect ts-polyfill consumers against breaking changes in core-js: our API will probably never change, but core-js API may change. (For example: core-js migration from version 2 to version 3)

- We reduce total polyfill size by targeting ES5. (TypeScript projects usually transpile down to ES5, but core-js polyfills ES3)

### What's the catch?

- `es2015.core` [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill is **gigantic** (140 kb) and is not included.

    - If you REALLY need it, use polyfill provided by [unorm](https://github.com/walling/unorm) library.

- `es2015.reflect` method `Reflect.construct` cannot: [sets new.target meta-property, Array subclassing, RegExp subclassing, Function subclassing](http://kangax.github.io/compat-table/es6/#test-Reflect).
