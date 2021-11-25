//Очень много вопросов

// Памятка, чтоб помнил, как хуево ты писал 4 часа назад:)))

// 3. можно ли использовать тернарник, без else
// 4. можно ли использовать слово return без ничего?

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

const getFriends = users => {
  return users.flatMap(user => user.friends).filter((el, indx, arr) => arr.indexOf(el) === indx);
}



// const getFriends = (users) => {
//   const friendsNamesDirty = [];
//   users.filter(user => friendsNamesDirty.push(user.friends));
//   // console.log(friendsNamesDirty);
//   const friendsNamesClean = friendsNamesDirty.flatMap(friendsName => friendsName);
//   // console.log(friendsNamesClean);
//   const friendsNames = [];
//   friendsNamesClean.filter((friendsName, index, array) => { 
// if (array.indexOf(friendsName) === index) { friendsNames.push(friendsName) } })
//   // console.log(friendsNames)
//   return friendsNames
// };
