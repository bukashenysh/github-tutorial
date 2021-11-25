function findLongestWord(string) {

// 1. разделить строки (пробелом)
let newString = string.split(' ');
// console.log(newString);
let biggestWord = newString[0];

// 2. посчитать количесвто символов в каждом слове
for (const word of newString) {
// console.log(word.length);

// 3. сравнить между собой и найбольшее вывести
if (word.length > biggestWord.length) {
biggestWord = word;
}
}
return biggestWord
}
    // console.log('Tut:', biggestWord);


  // for (let i = 0; i < newString.length; i += 1) {
  //   console.log(newString[i].length)

  //   // bigestWord = newString[0];

  //   // if (newString[1] > newString[0]) {
  //   //   bigestWord = newString[1];
  //   // }
    
  // }

  // for newString[i].length
  

  //   if (newString[i].length > 5) {
  //     console.log(newString[i])
// }


// for (const newString of string) {
  
// }


