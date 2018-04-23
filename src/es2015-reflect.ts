// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2015.reflect.d.ts
// a655592 on Sep 27, 2017

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

import 'core-js/es6/reflect';
