console.log(10 % 2 === 0);

const factorials = function (max, factor) {
  let x = 1;
  let newArray = [];
  while (x <= max) {
    newArray.push(x);
    x ++;
  };
  const array = newArray
  let factorArray = [];
  for (let i = 0; i < array.length; i ++) {
    if (array[i] % factor === 0) {
      factorArray.push(array[i]);
    }
  } console.log(factorArray);
};


factorials(10, 2);

const factorials2 = function(max, factor) {
  let x = 1;
  let array = [];
  while (x <= max && x / factor === 0) {
    array.push(x);
  }
  console.log(array);
}

factorials2(10, 2);
