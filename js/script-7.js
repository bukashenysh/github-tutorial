// ---Задачи из автопроверки модуль 5---
// #1

// #2

// #3

// #4

// #5

// #6

// #7

// #8

// #9

// #10
// class Storage {
//   constructor(items) {
//     this.items = items
//   }
//   getItems(){
//   return this.items;
//   }
//   addItem(newItem){
//   this.items.push(newItem);
//   }
//   removeItem(itemToRemove){
//   if (this.items.indexOf(itemToRemove)){
//     this.items.splice(this.items.indexOf(itemToRemove),1) }
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



// #11
// class StringBuilder {
// constructor(initialValue){
//   this.value = initialValue
// }
//   getValue(){
//   return this.value;
//   }
//   padStart(str){
//   this.value = str + this.value;
//   }
//   padEnd(str){
//   this.value += str;
//   }
//   padBoth(str){
//   this.padEnd(str);
//     this.padStart(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="



// #12

// #13

// #14

// #15

// #16

// #17
// не решил!!!
// #18

// #19

// #20 (нихуя не ясно)
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
  
//   static blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
  
//   blacklist(email) {
//   this.blacklistedEmails.push(email)
//   }
  
//   isBlacklisted(email){
//   return this.blacklistedEmails.includes(email)
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true