// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2017.string.d.ts
// 451561e on Apr 27, 2017

// interface String {
//     /**
//      * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
//      * The padding is applied from the start (left) of the current string.
//      *
//      * @param maxLength The length of the resulting string once the current string has been padded.
//      *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
//      *
//      * @param fillString The string to pad the current string with.
//      *        If this string is too long, it will be truncated and the left-most part will be applied.
//      *        The default value for this parameter is " " (U+0020).
//      */
//     padStart(maxLength: number, fillString?: string): string;

import 'core-js/fn/string/pad-start';

//     /**
//      * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
//      * The padding is applied from the end (right) of the current string.
//      *
//      * @param maxLength The length of the resulting string once the current string has been padded.
//      *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
//      *
//      * @param fillString The string to pad the current string with.
//      *        If this string is too long, it will be truncated and the left-most part will be applied.
//      *        The default value for this parameter is " " (U+0020).
//      */
//     padEnd(maxLength: number, fillString?: string): string;
// }

import 'core-js/fn/string/pad-end';
