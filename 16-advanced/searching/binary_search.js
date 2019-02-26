const a = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 20, 24, 30];

// To find the index of element e with a certain value:
//
// Start with an array sorted in descending order.
// In each step:
// Pick the middle element of the array m and compare it to e.
// If element values are equal, then return index of m.
// If e is greater than m, then e must be in left subarray. If m is greater than e, then e must be in the right subarray.
// Repeat those steps on new subarray.

const binarySearch = (haystack, needle) => {

  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    // let mid = Math.round( (start + end) / 2 ); // This line has a bug.
    let mid = Math.round( start + (end - start) / 2 ); // This line is interesting.

    // console.log({needle, start, end});

    if (haystack[mid] > needle) {
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null; // means the needle is not found
}

a.forEach( n => {
  console.log( binarySearch(a, n) );
})
