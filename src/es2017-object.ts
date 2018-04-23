// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2017.object.d.ts
// 530d7e9 on Feb 22, 2018

// interface ObjectConstructor {
//     /**
//      * Returns an array of values of the enumerable properties of an object
//      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
//      */
//     values<T>(o: { [s: string]: T } |  ArrayLike<T>): T[];
//     /**
//      * Returns an array of values of the enumerable properties of an object
//      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
//      */
//     values(o: {}): any[];

import 'core-js/fn/object/values';

//     /**
//      * Returns an array of key/values of the enumerable properties of an object
//      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
//      */
//     entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];
//     /**
//      * Returns an array of key/values of the enumerable properties of an object
//      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
//      */
//     entries(o: {}): [string, any][];

import 'core-js/fn/object/entries';

//     /**
//      * Returns an object containing all own property descriptors of an object
//      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
//      */
//     getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };
// }

import 'core-js/fn/object/get-own-property-descriptors';
