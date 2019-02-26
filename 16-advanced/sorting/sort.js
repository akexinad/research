//  BUBBLE SORT

// array.push(array.splice(index, 1)[0]);

// var arr = [1, 2, 6, 3, 4, 5];
//     arr.push(arr.splice(arr.indexOf(6), 1)[0]);
//     console.log(arr); // [1, 2, 3, 4, 5, 6]

const arr = [22, 32, 28, 45, 59, 66, 90, 96, 60, 37, 74, 47, 54, 8, 30, 47, 50, 89, 92, 40];

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// console.log(arr.length);

const bubbleSort = function(arr) {
  let count = 0;
  while (count <= ) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        arr.push(arr.splice(i, 1)[0]);
      }
    } // for
    count ++;
    // return arr;
  } // while
  return arr;
}

console.log(bubbleSort(arr));
