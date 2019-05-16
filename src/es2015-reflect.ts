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



// /// <reference no-default-lib="true"/>


// declare namespace Reflect {
//     function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
//     function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: any): any;
//     function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;
//     function deleteProperty(target: object, propertyKey: PropertyKey): boolean;
//     function get(target: object, propertyKey: PropertyKey, receiver?: any): any;
//     function getOwnPropertyDescriptor(target: object, propertyKey: PropertyKey): PropertyDescriptor | undefined;
//     function getPrototypeOf(target: object): object;
//     function has(target: object, propertyKey: PropertyKey): boolean;
//     function isExtensible(target: object): boolean;
//     function ownKeys(target: object): PropertyKey[];
//     function preventExtensions(target: object): boolean;
//     function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
//     function setPrototypeOf(target: object, proto: any): boolean;
// }

import 'core-js/es/reflect/apply';
import 'core-js/es/reflect/construct';
import 'core-js/es/reflect/define-property';
import 'core-js/es/reflect/delete-property';
import 'core-js/es/reflect/get';
import 'core-js/es/reflect/get-own-property-descriptor';
import 'core-js/es/reflect/get-prototype-of';
import 'core-js/es/reflect/has';
import 'core-js/es/reflect/is-extensible';
import 'core-js/es/reflect/own-keys';
import 'core-js/es/reflect/prevent-extensions';
import 'core-js/es/reflect/set';
import 'core-js/es/reflect/set-prototype-of';
