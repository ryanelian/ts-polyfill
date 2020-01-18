# Official TypeScript Lib Declarations Change Logs

This document will be used to track TypeScript lib changes inbetween versions, for libs relevant to ts-polyfill.

### 3.7.5

> No changes.

### 3.7.3

https://github.com/microsoft/TypeScript/releases/tag/v3.7-rc

- Mostly parameters changes (data types). Minor and does not break existing codes apparently.

- New `globalThis` special-case polyfill added.

### 3.6.3

https://github.com/microsoft/TypeScript/releases/tag/v3.6.3

- *No dist binary changes*

- New lib: Async Generator

- ES2015 RegExp constructor now accept string.

- Minor changes in iterator related libs.

- Fixed comment in ES2019 string lib.

### 3.5.3

https://github.com/microsoft/TypeScript/releases/tag/v3.5.3

- New lib: ES2019 Object

### 3.5.1 / 3.5.0-rc

https://github.com/microsoft/TypeScript/releases/tag/v3.5.1

https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/

- New libs: ES2020 String, ES2020 Well-Known Symbols

**Breaking Changes:**

- Generic type parameters are implicitly constrained to `unknown`

- lib.d.ts includes the `Omit` helper type

- `Object.keys` rejects primitives in ES5

### 3.4.5

https://github.com/microsoft/TypeScript/releases/tag/v3.4.5

- New libs are added: ES2019 Array, String, Symbol

### 3.3.3

https://github.com/Microsoft/TypeScript/releases/tag/v3.3.1

- No changes in TypeScript declarations. core-js updated with bug fixes.

> TypeScript tag `3.3.3` is missing from GitHub...

### 3.2.2

https://github.com/Microsoft/TypeScript/releases/tag/v3.2.1

- No changes in TypeScript declarations. core-js was updated but did not affect bundle.

### 3.2.1

https://github.com/Microsoft/TypeScript/releases/tag/v3.2.1

- Minor changes in `MapConstructor` interface. Should affect nothing...

### 3.1.6

https://github.com/Microsoft/TypeScript/releases/tag/v3.1.6

> No changes. Also applies to [3.1.4](https://github.com/Microsoft/TypeScript/releases/tag/v3.1.4) and [3.1.5](https://github.com/Microsoft/TypeScript/releases/tag/v3.1.5).

### 3.1.3

https://github.com/Microsoft/TypeScript/releases/tag/v3.1.3

> No changes. Also applies to [3.1.2](https://github.com/Microsoft/TypeScript/releases/tag/v3.1.2)

### 3.1.1

https://github.com/Microsoft/TypeScript/releases/tag/v3.1.1

> Bundled polyfill is identical to the 3.0.3, so no new release / won't publish for now. 

> Minor changes to comments and the `es2017.string` lib regression in 3.0.3 was fixed.

### 3.0.3

https://github.com/Microsoft/TypeScript/releases/tag/v3.0.3

> No changes, [but suddenly `es2017.string` lib is not valid in `tsconfig.json`](https://github.com/Microsoft/TypeScript/issues/26827). (But no error if lib is included. Builds will fail if using `padStart` or `padEnd` methods but lib is not included!)

### 3.0.1

https://github.com/Microsoft/TypeScript/releases/tag/v3.0.1

> No changes.

### 3.0.0

https://github.com/Microsoft/TypeScript/releases/tag/v3.0.0

> No changes, but interesting: the root `lib.d.ts` now references other libs instead of having duped content.

### 2.9.2

https://github.com/Microsoft/TypeScript/releases/tag/v2.9.2

> No changes.

### 2.9.1

https://github.com/Microsoft/TypeScript/releases/tag/v2.9.1

> No changes.

### 2.9.0 (from 2.8.3)

https://github.com/Microsoft/TypeScript/releases/tag/v2.9.0

- [`Object.hasOwnProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) and [`Object.propertyIsEnumerable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) are removed from `es2015-core` lib. (Should be compatible with all browsers, not just ES2015+)

- `Promise.reject` and `Promise.reject<T>` methods are merged to `Promise.reject<T = never>`
