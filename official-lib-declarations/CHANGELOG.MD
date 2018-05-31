# Official TypeScript Lib Declarations Change Logs

This document will be used to track TypeScript lib changes inbetween versions, for libs relevant to ts-polyfill.

### 2.9.1

https://github.com/Microsoft/TypeScript/releases/tag/v2.9.1

> No changes.

### 2.9.0 (from 2.8.3)

https://github.com/Microsoft/TypeScript/releases/tag/v2.9.0

- [`Object.hasOwnProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) and [`Object.propertyIsEnumerable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) are removed from `es2015-core` lib. (Should be compatible with all browsers, not just ES2015+)

- `Promise.reject` and `Promise.reject<T>` methods are merged to `Promise.reject<T = never>`
