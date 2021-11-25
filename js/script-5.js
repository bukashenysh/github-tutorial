// тз:
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// из вот этого:
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// вот в это:

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Change code below this line
  getPotions() {
    for (const { name, price } of this.potions) {
      // console.log(name);
      // console.log(price);
}
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      // console.log(potion.name);
      if (potion.name === newPotion.name)
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const itterableArray = [];
    for (const potion of this.potions) {
      // const potionIndex = potion.name.indexOf(potionName);
      itterableArray.push(potion.name);
      // console.log(itterableArray);
      // const potionArray{ name } = potion
      // console.log(potion);
      // console.log(this.potions);
      // console.log(potionIndex);
      // console.log(potion.name);
      // console.log(potionName);
      // console.log(potionArray);
    }
    const potionIndex = itterableArray.indexOf(potionName);
      console.log(potionIndex);
    
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
    this.potions.splice(potionIndex, 1);
  },


// нихуя не понял, как я это сделал:
  
  updatePotionName(oldName, newName) {
    const itterableArray = [];

    for (const potion of this.potions) {
      itterableArray.push(potion.name);
      // console.log(potion)
    }

    const potionIndex = itterableArray.indexOf(oldName);
      // console.log(potionIndex);
    
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    itterableArray.splice(potionIndex, 1, newName);
    

    // console.log(itterableArray);
      // const potionArray{ name } = potion
      // console.log(potion);
    // console.log(this.potions[potionIndex]);
    const newNewPotions = { ...this.potions[potionIndex], name: newName };
    // console.log(newNewPotions)
    this.potions.splice(potionIndex, 1, newNewPotions);
    // console.log(this.potions)
      // console.log(potionIndex);
      // console.log(potion.name);
      // console.log(potionName);
      // console.log(potionArray);
    // console.log(this.potions)
  },
  // Change code above this line
};