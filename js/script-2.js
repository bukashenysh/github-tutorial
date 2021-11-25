function findBiggestNumber(numbers) {
  let biggestNumber = numbers[0];
    // console.log(biggestNumber);

  for (let number of numbers) {
    // console.log(number);
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
return biggestNumber
}

// const numbers = [1, 2, 4, 23, 54, 26];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   console.log(number);
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// findBiggestNumber([1, 2, 4, 3])