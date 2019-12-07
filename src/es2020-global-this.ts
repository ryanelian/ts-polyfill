// this is a special-case polyfill for ES2020 globalThis object reference
// TypeScript does NOT transpile globalThis call when targeting earlier ES reference.
// However, NO lib is provided for globalThis:

// https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#type-checking-for-globalthis
// It’s also important to note that TypeScript doesn’t transform references to globalThis 
// when compiling to older versions of ECMAScript. As such, unless you’re targeting evergreen browsers 
// (which already support globalThis), you may want to use an appropriate polyfill instead.

import 'core-js/es/global-this';
