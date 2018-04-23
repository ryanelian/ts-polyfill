// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2018.promise.d.ts
// 79e5e79 March 29, 2018

// interface Promise<T> {
//     /**
//      * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
//      * resolved value cannot be modified from the callback.
//      * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
//      * @returns A Promise for the completion of the callback.
//      */
//     finally(onfinally?: (() => void) | undefined | null): Promise<T>
// }

import 'core-js/fn/promise/finally';
