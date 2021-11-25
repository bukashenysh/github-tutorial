const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", 
   author: "Tanith Lee", 
   rating: 7.94 
  },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];

console.table(users)
console.table(books)

// const getFriends = users => {
//   return users.flatMap(user => user.friends).filter((el, indx, arr) => arr.indexOf(el) === indx);
// }

// const getTotalBalanceByGender = (users, gender) => {
//   return totalBalance = users.filter(user => user.gender === gender).reduce((total,user) => {return total + user.balance},0)
// };



// const getSortedFriends = users => {
//   return sortedFriends = [...users].flatMap(user => user.friends).filter((name, index, array) => array.indexOf(name) === index).sort()
// };




// const getNamesSortedByFriendCount = users => {
//   return namesSorted = [...users].sort((a,b)=> a.friends.length - b.friends.length).map(user => user.name)
// };



// const MIN_BOOK_RATING = 8;

// const names = books.filter(book =>  book.rating > MIN_BOOK_RATING).map(book => book.author).sort();
// console.log(names)



// const calculateTotalBalance = users => {
//   return totalBalance = users.reduce((total, user) => { return total + user.balance; }, 0);
// };


// const isEveryUserActive = (users) => {
//   const everyUserActive = users.every(user => user.isActive)
//   return everyUserActive
// };



// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(user => user.isActive)
//   return activeUsers;
// };



// const getUsersWithEyeColor = (users, color) => {
//   const userWithEye = []
//     users.filter(user => {
//       // console.table(users)
//       // console.log(user.eyeColor)
//       // console.log(color)
//       // console.log(user.eyeColor === color)
//       if (user.eyeColor === color) {
//         userWithEye.push(user)
//       }
// })
// return userWithEye
// };



// const getUserNames = users => {
//   const usersName =
//     users.map(user => user.name);
//   return usersName
//   };

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths)


// const changeEven = (numbers, value) => {
//   // Change code below this line
//   const newNumbers = [];
  
//   numbers.forEach((number) => 
//   number % 2 === 0 ? newNumbers.push(number + value) : newNumbers.push(number))
  
//   return newNumbers

//   // Change code above this line
// }



// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((number) => { if (number > value) { filteredNumbers.push(number) } })

//   // Change code above this line
//   return filteredNumbers;
// }






// const numbers = [1, 2, 3, 4, 5];
// const newArray = []
// numbers.forEach(function (number, index, array) {
//   console.log('number', number);
//   console.log('index', index);
//   console.log('array', array);
//   if (number > index) {
//     newArray.push(number)
//   }
// })
//   console.log(newArray)



// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;

// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// // if (this.books.indexOf(oldName)){
// //   console.log(this.books.indexOf(oldName));
//   this.books.splice(this.books.indexOf(oldName), 1, newName)
// // }
// return this.books

//     // Change code above this line
//   },
// };


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };



// // Change code below this line
// function findMatches(numbers, ...args) {
//   const matches = []; // Don't change this line
//   // console.log(numbers, args)
//   for (const arg of args) {
//     // console.log(arg);
//     if (numbers.includes(arg)) {
//       matches.push(arg)
//       // console.log(matches)
//     }

//   }
//   // if (chtotos.includeOf(chisla)) {
//   //   matches.push(chisla)
//   // }

//   // Change code above this line
//   return matches;
// }



// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow} = highTemperatures
// console.log(highTemperatures)
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature)



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     // console.log(product)
//     const values = Object.values(product)
//     // console.log(values)
//     if (productName === values[0]) {
//       // console.log('Yes')
//       totalPrice = values[1] * values[2]
//       // console.log(totalPrice)
//       break
//     }
//     // for (const value of values) {
//     //   console.log(value)
//     // }
//   }
  

//   return totalPrice;
//   // Пиши код выше этой строки
// }

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = [];
//   for (const product of products) {
//     // console.log(product)
//     // console.log(product[propName])
//     const keys = Object.keys(product)
//     // console.log(keys)
//     for (const key of keys) {
//       // console.log(key)
//       if (propName === key) {
//         array.push(product[propName])
//         break
//       }
//       // console.log('no')
//     }
//     // if (propName === Object.keys(product)) {
//     //   array.push(product[propName])
//     //   // return 'da'
//     // }
    
    
//   }
// return array

//   // Change code above this line
// }