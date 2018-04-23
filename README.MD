# TS-Polyfill

> Importable runtime polyfills for TypeScript libs, powered by core-js! :battery:

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
      "es2015.collection",
      "es2015.reflect",
      "es2016.array.include",
      "es2017.object",
      "es2017.string",
      "es2017.typedarrays",
      "es2018.promise"
    ]
  }
}
```

- In your app's entry point, import the polyfills:

```ts
import 'ts-polyfill/lib/es2015-core';
import 'ts-polyfill/lib/es2015-promise';
import 'ts-polyfill/lib/es2015-collection';
import 'ts-polyfill/lib/es2015-reflect';
import 'ts-polyfill/lib/es2016-array-include';
import 'ts-polyfill/lib/es2017-object';
import 'ts-polyfill/lib/es2017-string';
import 'ts-polyfill/lib/es2017-typed-arrays';
import 'ts-polyfill/lib/es2017-promise';
```

> Obviously, you don't need to use them all...

## Alternative Techniques

- Download then include these as `<script>` in your HTML:

    - [ts-polyfill.min.js](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js) (59.3 kB, 18.5 kB GZIP)

    - [ts-polyfill.min.js.map](https://github.com/ryanelian/ts-polyfill/raw/master/dist/ts-polyfill.min.js.map) 

- Include everything implicitly:

```ts
import 'ts-polyfill';
```

## Caveats

- ES2015 [String.prototype.normalize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill is **gigantic** (140 kb) and is not included in `es2015-core`

    - If you REALLY need it, use polyfill provided by [unorm](https://github.com/walling/unorm) library.

- ES2015 [Object.getOwnPropertySymbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) polyfill is missing because `es2015.symbol` and `es2015.symbol.wellknown` libs polyfills are not implemented.
