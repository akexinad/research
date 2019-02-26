
for (let x = 100; x < 200; x++) {
  console.log(`Testing ${ x }.`);
  if (x % 7 === 0) {
    console.log(`Found it! ${ x }`);
    break;
  }
};
