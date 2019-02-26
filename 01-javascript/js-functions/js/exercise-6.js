// Conversion rate defaults to 7 unless explicitly called with another rate.

const calculateDogAge = function (puppyAge, conversionRate=7) {
  const dogYears = puppyAge * conversionRate;
  console.log(`Your doggie is ${ dogYears } years old in dog years.`);
};

calculateDogAge(3);
calculateDogAge(3, 2);
