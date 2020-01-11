// /*! *****************************************************************************
// Copyright (c) Microsoft Corporation. All rights reserved. 
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0  
 
// THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
// WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
// MERCHANTABLITY OR NON-INFRINGEMENT. 
 
// See the Apache Version 2.0 License for specific language governing permissions
// and limitations under the License.
// ***************************************************************************** */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
// Here's the thing. Despite new TypedArray(param) is available in IE10, new TypedArray() might not. 
// So need polyfill...
// (Methods unique to ES2015 libraries are defined in es2015-core polyfills!)


// /// <reference no-default-lib="true"/>


// interface Int8ArrayConstructor {
//     new (): Int8Array;
// }

import 'core-js/es/typed-array/int8-array';

// interface Uint8ArrayConstructor {
//     new (): Uint8Array;
// }

import 'core-js/es/typed-array/uint8-array';

// interface Uint8ClampedArrayConstructor {
//     new (): Uint8ClampedArray;
// }

import 'core-js/es/typed-array/uint8-clamped-array';

// interface Int16ArrayConstructor {
//     new (): Int16Array;
// }

import 'core-js/es/typed-array/int16-array';

// interface Uint16ArrayConstructor {
//     new (): Uint16Array;
// }

import 'core-js/es/typed-array/uint16-array';

// interface Int32ArrayConstructor {
//     new (): Int32Array;
// }

import 'core-js/es/typed-array/int32-array';

// interface Uint32ArrayConstructor {
//     new (): Uint32Array;
// }

import 'core-js/es/typed-array/uint32-array';

// interface Float32ArrayConstructor {
//     new (): Float32Array;
// }

import 'core-js/es/typed-array/float32-array';

// interface Float64ArrayConstructor {
//     new (): Float64Array;
// }

import 'core-js/es/typed-array/float64-array';
