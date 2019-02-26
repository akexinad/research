const intArray = [1, 9, 2, 8, 37, 3, 7, 44, 6, 5, 0];


// const largest = (integers) => {
//   let max = -Infinity;
//
//   integers.forEach( n => {
//     if (n > max) {
//       max = n;
//     }
//   });
//   return max
// }


//////////////////////////////////////////////////

const largest = (integers) => {
  return integers.reduce( (max, n) => {
      return n > max ? n : max;
  });
};

// console.log( Math.max(...a));
// console.log(largest(a));

////////////////////////////////////////////////////

const largestInt = function(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }
  }
  return num;
}

// console.log(largestInt(intArray));


const a = [18, 10, 90, 76, 13, 8, 49, 9, 16, 40, 13, 7, 27, 84, 100, 32, 33, 7, 72, 82];

const largestIntR = function(array) {
  let num = 0;
  if (array.length === 0) {
    return num
  } else if (array[0] > num) {
    let num = array[0]
    largestIntR(array.splice(0, 1))
  } else if (array[0] < num) {
    largestIntR(array.splice(0, 1))
  }
}

console.log(largestIntR(a));
