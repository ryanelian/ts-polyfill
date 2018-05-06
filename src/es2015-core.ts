// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2015.core.d.ts
// 530d7e9 on Feb 22, 2018

// interface Array<T> {
//     /**
//      * Returns the value of the first element in the array where predicate is true, and undefined
//      * otherwise.
//      * @param predicate find calls predicate once for each element of the array, in ascending
//      * order, until it finds one where predicate returns true. If such an element is found, find
//      * immediately returns that element value. Otherwise, find returns undefined.
//      * @param thisArg If provided, it will be used as the this value for each invocation of
//      * predicate. If it is not provided, undefined is used instead.
//      */
//     find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
//     find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined;

import 'core-js/fn/array/find';

//     /**
//      * Returns the index of the first element in the array where predicate is true, and -1
//      * otherwise.
//      * @param predicate find calls predicate once for each element of the array, in ascending
//      * order, until it finds one where predicate returns true. If such an element is found,
//      * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
//      * @param thisArg If provided, it will be used as the this value for each invocation of
//      * predicate. If it is not provided, undefined is used instead.
//      */
//     findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number;

import 'core-js/fn/array/find-index';

//     /**
//      * Returns the this object after filling the section identified by start and end with value
//      * @param value value to fill array section with
//      * @param start index to start filling the array at. If start is negative, it is treated as
//      * length+start where length is the length of the array.
//      * @param end index to stop filling the array at. If end is negative, it is treated as
//      * length+end.
//      */
//     fill(value: T, start?: number, end?: number): this;

import 'core-js/fn/array/fill';

//     /**
//      * Returns the this object after copying a section of the array identified by start and end
//      * to the same array starting at position target
//      * @param target If target is negative, it is treated as length+target where length is the
//      * length of the array.
//      * @param start If start is negative, it is treated as length+start. If end is negative, it
//      * is treated as length+end.
//      * @param end If not specified, length of the this object is used as its default value.
//      */
//     copyWithin(target: number, start: number, end?: number): this;
// }

import 'core-js/fn/array/copy-within';

// interface ArrayConstructor {
//     /**
//      * Creates an array from an array-like object.
//      * @param arrayLike An array-like object to convert to an array.
//      */
//     from<T>(arrayLike: ArrayLike<T>): T[];
//     /**
//      * Creates an array from an iterable object.
//      * @param arrayLike An array-like object to convert to an array.
//      * @param mapfn A mapping function to call on every element of the array.
//      * @param thisArg Value of 'this' used to invoke the mapfn.
//      */
//     from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];

import 'core-js/fn/array/from';

//     /**
//      * Returns a new array from a set of elements.
//      * @param items A set of elements to include in the new array object.
//      */
//     of<T>(...items: T[]): T[];
// }

import 'core-js/fn/array/of';

// interface DateConstructor {
//     new (value: number | string | Date): Date;
// }

// RYAN: hmmm...?

// interface Function {
//     /**
//      * Returns the name of the function. Function names are read-only and can not be changed.
//      */
//     readonly name: string;
// }

import 'core-js/fn/function/name';

// interface Math {
//     /**
//      * Returns the number of leading zero bits in the 32-bit binary representation of a number.
//      * @param x A numeric expression.
//      */
//     clz32(x: number): number;

import 'core-js/fn/math/clz32';

//     /**
//      * Returns the result of 32-bit multiplication of two numbers.
//      * @param x First number
//      * @param y Second number
//      */
//     imul(x: number, y: number): number;

import 'core-js/fn/math/imul';

//     /**
//      * Returns the sign of the x, indicating whether x is positive, negative or zero.
//      * @param x The numeric expression to test
//      */
//     sign(x: number): number;

import 'core-js/fn/math/sign';

//     /**
//      * Returns the base 10 logarithm of a number.
//      * @param x A numeric expression.
//      */
//     log10(x: number): number;

import 'core-js/fn/math/log10';

//     /**
//      * Returns the base 2 logarithm of a number.
//      * @param x A numeric expression.
//      */
//     log2(x: number): number;

import 'core-js/fn/math/log2';

//     /**
//      * Returns the natural logarithm of 1 + x.
//      * @param x A numeric expression.
//      */
//     log1p(x: number): number;

import 'core-js/fn/math/log1p';

//     /**
//      * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
//      * subtracting 1 from the exponential function of x (e raised to the power of x, where e
//      * is the base of the natural logarithms).
//      * @param x A numeric expression.
//      */
//     expm1(x: number): number;

import 'core-js/fn/math/expm1';

//     /**
//      * Returns the hyperbolic cosine of a number.
//      * @param x A numeric expression that contains an angle measured in radians.
//      */
//     cosh(x: number): number;

import 'core-js/fn/math/cosh';

//     /**
//      * Returns the hyperbolic sine of a number.
//      * @param x A numeric expression that contains an angle measured in radians.
//      */
//     sinh(x: number): number;

import 'core-js/fn/math/sinh';

//     /**
//      * Returns the hyperbolic tangent of a number.
//      * @param x A numeric expression that contains an angle measured in radians.
//      */
//     tanh(x: number): number;

import 'core-js/fn/math/tanh';

//     /**
//      * Returns the inverse hyperbolic cosine of a number.
//      * @param x A numeric expression that contains an angle measured in radians.
//      */
//     acosh(x: number): number;

import 'core-js/fn/math/acosh';

//     /**
//      * Returns the inverse hyperbolic sine of a number.
//      * @param x A numeric expression that contains an angle measured in radians.
//      */
//     asinh(x: number): number;

import 'core-js/fn/math/asinh';

//     /**
//      * Returns the inverse hyperbolic tangent of a number.
//      * @param x A numeric expression that contains an angle measured in radians.
//      */
//     atanh(x: number): number;

import 'core-js/fn/math/atanh';

//     /**
//      * Returns the square root of the sum of squares of its arguments.
//      * @param values Values to compute the square root for.
//      *     If no arguments are passed, the result is +0.
//      *     If there is only one argument, the result is the absolute value.
//      *     If any argument is +Infinity or -Infinity, the result is +Infinity.
//      *     If any argument is NaN, the result is NaN.
//      *     If all arguments are either +0 or −0, the result is +0.
//      */
//     hypot(...values: number[]): number;

import 'core-js/fn/math/hypot';

//     /**
//      * Returns the integral part of the a numeric expression, x, removing any fractional digits.
//      * If x is already an integer, the result is x.
//      * @param x A numeric expression.
//      */
//     trunc(x: number): number;

import 'core-js/fn/math/trunc';

//     /**
//      * Returns the nearest single precision float representation of a number.
//      * @param x A numeric expression.
//      */
//     fround(x: number): number;

import 'core-js/fn/math/fround';

//     /**
//      * Returns an implementation-dependent approximation to the cube root of number.
//      * @param x A numeric expression.
//      */
//     cbrt(x: number): number;
// }

import 'core-js/fn/math/cbrt';

// interface NumberConstructor {
//     /**
//      * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
//      * that is representable as a Number value, which is approximately:
//      * 2.2204460492503130808472633361816 x 10‍−‍16.
//      */
//     readonly EPSILON: number;

import 'core-js/fn/number/epsilon';

//     /**
//      * Returns true if passed value is finite.
//      * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
//      * number. Only finite values of the type number, result in true.
//      * @param number A numeric value.
//      */
//     isFinite(number: number): boolean;

import 'core-js/fn/number/is-finite';

//     /**
//      * Returns true if the value passed is an integer, false otherwise.
//      * @param number A numeric value.
//      */
//     isInteger(number: number): boolean;

import 'core-js/fn/number/is-integer';

//     /**
//      * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
//      * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
//      * to a number. Only values of the type number, that are also NaN, result in true.
//      * @param number A numeric value.
//      */
//     isNaN(number: number): boolean;

import 'core-js/fn/number/is-nan';

//     /**
//      * Returns true if the value passed is a safe integer.
//      * @param number A numeric value.
//      */
//     isSafeInteger(number: number): boolean;

import 'core-js/fn/number/is-safe-integer';

//     /**
//      * The value of the largest integer n such that n and n + 1 are both exactly representable as
//      * a Number value.
//      * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
//      */
//     readonly MAX_SAFE_INTEGER: number;

import 'core-js/fn/number/max-safe-integer';

//     /**
//      * The value of the smallest integer n such that n and n − 1 are both exactly representable as
//      * a Number value.
//      * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
//      */
//     readonly MIN_SAFE_INTEGER: number;

import 'core-js/fn/number/min-safe-integer';

//     /**
//      * Converts a string to a floating-point number.
//      * @param string A string that contains a floating-point number.
//      */
//     parseFloat(string: string): number;

import 'core-js/fn/parse-float';

//     /**
//      * Converts A string to an integer.
//      * @param s A string to convert into a number.
//      * @param radix A value between 2 and 36 that specifies the base of the number in numString.
//      * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
//      * All other strings are considered decimal.
//      */
//     parseInt(string: string, radix?: number): number;
// }

import 'core-js/fn/parse-int';

// interface ObjectConstructor {
//     /**
//      * Copy the values of all of the enumerable own properties from one or more source objects to a
//      * target object. Returns the target object.
//      * @param target The target object to copy to.
//      * @param source The source object from which to copy properties.
//      */
//     assign<T, U>(target: T, source: U): T & U;
//     /**
//      * Copy the values of all of the enumerable own properties from one or more source objects to a
//      * target object. Returns the target object.
//      * @param target The target object to copy to.
//      * @param source1 The first source object from which to copy properties.
//      * @param source2 The second source object from which to copy properties.
//      */
//     assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
//     /**
//      * Copy the values of all of the enumerable own properties from one or more source objects to a
//      * target object. Returns the target object.
//      * @param target The target object to copy to.
//      * @param source1 The first source object from which to copy properties.
//      * @param source2 The second source object from which to copy properties.
//      * @param source3 The third source object from which to copy properties.
//      */
//     assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
//     /**
//      * Copy the values of all of the enumerable own properties from one or more source objects to a
//      * target object. Returns the target object.
//      * @param target The target object to copy to.
//      * @param sources One or more source objects from which to copy properties
//      */
//     assign(target: object, ...sources: any[]): any;

import 'core-js/fn/object/assign';

//     /**
//      * Returns an array of all symbol properties found directly on object o.
//      * @param o Object to retrieve the symbols from.
//      */
//     getOwnPropertySymbols(o: any): symbol[];

// RYAN: Not available. This polyfill is bundled with core-js/es6/symbol

//     /**
//      * Returns true if the values are the same value, false otherwise.
//      * @param value1 The first value.
//      * @param value2 The second value.
//      */
//     is(value1: any, value2: any): boolean;

import 'core-js/fn/object/is';

//     /**
//      * Sets the prototype of a specified object o to  object proto or null. Returns the object o.
//      * @param o The object to change its prototype.
//      * @param proto The value of the new prototype or null.
//      */
//     setPrototypeOf(o: any, proto: object | null): any;

import 'core-js/fn/object/set-prototype-of';

// interface ReadonlyArray<T> {
//     /**
//      * Returns the value of the first element in the array where predicate is true, and undefined
//      * otherwise.
//      * @param predicate find calls predicate once for each element of the array, in ascending
//      * order, until it finds one where predicate returns true. If such an element is found, find
//      * immediately returns that element value. Otherwise, find returns undefined.
//      * @param thisArg If provided, it will be used as the this value for each invocation of
//      * predicate. If it is not provided, undefined is used instead.
//      */
//     find<S extends T>(predicate: (this: void, value: T, index: number, obj: ReadonlyArray<T>) => value is S, thisArg?: any): S | undefined;
//     find(predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean, thisArg?: any): T | undefined;
//     /**
//      * Returns the index of the first element in the array where predicate is true, and -1
//      * otherwise.
//      * @param predicate find calls predicate once for each element of the array, in ascending
//      * order, until it finds one where predicate returns true. If such an element is found,
//      * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
//      * @param thisArg If provided, it will be used as the this value for each invocation of
//      * predicate. If it is not provided, undefined is used instead.
//      */
//     findIndex(predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean, thisArg?: any): number;
// }

// RYAN: Should be the same stuffs as Array<T> polyfills at the top.

// interface RegExp {
//     /**
//      * Returns a string indicating the flags of the regular expression in question. This field is read-only.
//      * The characters in this string are sequenced and concatenated in the following order:
//      *
//      *    - "g" for global
//      *    - "i" for ignoreCase
//      *    - "m" for multiline
//      *    - "u" for unicode
//      *    - "y" for sticky
//      *
//      * If no flags are set, the value is the empty string.
//      */
//     readonly flags: string;

//     /**
//      * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular
//      * expression. Default is false. Read-only.
//      */
//     readonly sticky: boolean;

//     /**
//      * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular
//      * expression. Default is false. Read-only.
//      */
//     readonly unicode: boolean;
// }

import 'core-js/fn/regexp/flags';

// interface RegExpConstructor {
//     new (pattern: RegExp, flags?: string): RegExp;
//     (pattern: RegExp, flags?: string): RegExp;
// }

import 'core-js/fn/regexp/constructor';

// interface String {
//     /**
//      * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
//      * value of the UTF-16 encoded code point starting at the string element at position pos in
//      * the String resulting from converting this object to a String.
//      * If there is no element at that position, the result is undefined.
//      * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
//      */
//     codePointAt(pos: number): number | undefined;

import 'core-js/fn/string/code-point-at';

//     /**
//      * Returns true if searchString appears as a substring of the result of converting this
//      * object to a String, at one or more positions that are
//      * greater than or equal to position; otherwise, returns false.
//      * @param searchString search string
//      * @param position If position is undefined, 0 is assumed, so as to search all of the String.
//      */
//     includes(searchString: string, position?: number): boolean;

import 'core-js/fn/string/includes';

//     /**
//      * Returns true if the sequence of elements of searchString converted to a String is the
//      * same as the corresponding elements of this object (converted to a String) starting at
//      * endPosition – length(this). Otherwise returns false.
//      */
//     endsWith(searchString: string, endPosition?: number): boolean;

import 'core-js/fn/string/ends-with';

//     /**
//      * Returns the String value result of normalizing the string into the normalization form
//      * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
//      * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
//      * is "NFC"
//      */
//     normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
//     /**
//      * Returns the String value result of normalizing the string into the normalization form
//      * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
//      * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
//      * is "NFC"
//      */
//     normalize(form?: string): string;

// RYAN: Gigantic 140kB polyfill. Not included...

//     /**
//      * Returns a String value that is made from count copies appended together. If count is 0,
//      * the empty string is returned.
//      * @param count number of copies to append
//      */
//     repeat(count: number): string;

import 'core-js/fn/string/repeat';

//     /**
//      * Returns true if the sequence of elements of searchString converted to a String is the
//      * same as the corresponding elements of this object (converted to a String) starting at
//      * position. Otherwise returns false.
//      */
//     startsWith(searchString: string, position?: number): boolean;

import 'core-js/fn/string/starts-with';

//     /**
//      * Returns an <a> HTML anchor element and sets the name attribute to the text value
//      * @param name
//      */
//     anchor(name: string): string;

import 'core-js/fn/string/anchor';

//     /** Returns a <big> HTML element */
//     big(): string;

import 'core-js/fn/string/big';

//     /** Returns a <blink> HTML element */
//     blink(): string;

import 'core-js/fn/string/blink';

//     /** Returns a <b> HTML element */
//     bold(): string;

import 'core-js/fn/string/bold';

//     /** Returns a <tt> HTML element */
//     fixed(): string;

import 'core-js/fn/string/fixed';

//     /** Returns a <font> HTML element and sets the color attribute value */
//     fontcolor(color: string): string;

import 'core-js/fn/string/fontcolor';

//     /** Returns a <font> HTML element and sets the size attribute value */
//     fontsize(size: number): string;
//     /** Returns a <font> HTML element and sets the size attribute value */
//     fontsize(size: string): string;

import 'core-js/fn/string/fontsize';

//     /** Returns an <i> HTML element */
//     italics(): string;

import 'core-js/fn/string/italics';

//     /** Returns an <a> HTML element and sets the href attribute value */
//     link(url: string): string;

import 'core-js/fn/string/link';

//     /** Returns a <small> HTML element */
//     small(): string;

import 'core-js/fn/string/small';

//     /** Returns a <strike> HTML element */
//     strike(): string;

import 'core-js/fn/string/strike';

//     /** Returns a <sub> HTML element */
//     sub(): string;

import 'core-js/fn/string/sub';

//     /** Returns a <sup> HTML element */
//     sup(): string;
// }

import 'core-js/fn/string/sup';

// interface StringConstructor {
//     /**
//      * Return the String value whose elements are, in order, the elements in the List elements.
//      * If length is 0, the empty string is returned.
//      */
//     fromCodePoint(...codePoints: number[]): string;

import 'core-js/fn/string/from-code-point';

//     /**
//      * String.raw is intended for use as a tag function of a Tagged Template String. When called
//      * as such the first argument will be a well formed template call site object and the rest
//      * parameter will contain the substitution values.
//      * @param template A well-formed template string call site representation.
//      * @param substitutions A set of substitution values.
//      */
//     raw(template: TemplateStringsArray, ...substitutions: any[]): string;
// }

import 'core-js/fn/string/raw';
