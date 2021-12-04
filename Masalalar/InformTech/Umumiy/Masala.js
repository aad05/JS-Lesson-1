// 1. Masala 

// Masalaning sharti
// Bizga bir nechta ob'ektlar berilgan
// let user = {name:"Asadbek"}
// let userAge = {age:"16"}
// let userJob = {job:"Developer"}
// Shu Ob'ektlarni birlashtirib yangi ob'ekt tuzing!

// var user = { name: "Asdbek" };
// var age = { age: "16" };
// var job = { job: "Developer" };

// Birinxhi Yo'li
// var All = { ...user, ...age, ...job };

// Ikkinchi Yo'li
// var All = Object.assign(user, age, job);

// 2. Masala
// Bizga Hodimlarni telefon raqamlaridan iborat ob'ekt berilgan.
// let phoneNumber = {
//     user1: 11111.
//     user2: 22222.
//     user3: 33333.
//     user4: 44444.
//     user5: 55555.
// }
// Shu Ob'ektning keylaridan iborat bo'lgan arrat hosil qiling!

// Natija
// [
//     'user1', 'user2', 'user3','user4', 'user5'
// ]

// let phoneNumber = {
//     user1: 11111,
//     user2: 22222,
//     user3: 33333,
//     user4: 44444,
//     user5: 55555,
//   };
  
//   // Yechim
//   // var result = Object.keys(phoneNumber);
//   console.log(result);
  
// 3. Masala
// Xodimlarni maoshlari berilgan ob'ekt mavjud!
// Shu xodimlarni maoshini yig'indisini topadigon kodni yozing.
// Agar Ob'ekt 0 bo'lsa natija 0 chiqsin!

// let salaries = {
//     ali: 600,
//     vali: 190,
//     zufar: 170,
//   };
//   var sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   // if bu yerda shart emas
//   // if (sum === 0) {
//   //   console.log(sum);
//   // } else {
//   //   console.log(sum);
//   // }
  
//   console.log(sum);
  
// 4. Masala
// Bizga ma'lum bir ob'yekt berilgan. Agar
// shu ob'ektning keylari number bo'ladigon bo'lsa uning qiymatini
// 3ga ko'paytirib yangi ob'ekt hosil yangi
// ob'ekt hosil qilinsin

// Berilgan
// let menu = {
//     width: 150,
//     height: 200,
//     title : "Object Menu"
// }

// let menu = {
//     height: 200,
//     width: 150,
//     title: "Ob'ekt Menu",
//   };
  
//   function newObject(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 3;
//       }
//     }
//     return obj;
//   }
//   newObject(menu);
//   console.log(menu);
  
// 5.Masala 
// Bizlarga quyidagicha array berilgan.
// ["a","b","c","d","e"]
// .slice() va .concat() metodlari orqali quyidagi
// natijani chiqarib beradigon funksiya yozing

// Natija : ["a" , "b" , "d" , "e" ]

// var arr = ["a", "b", "c", "d", "e"];

// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }
// console.log(remove(arr, 2));

// 6. Masala
// quyidagi sonni eng kattasi topilsin

// 1 - Usul
// console.log(Math.max(-12, -15, -25, 25, 16, 36, 48));

// // 2 - Usul
// var arr = [-12, -15, -25, 25, 16, 36, 48];
// console.log(Math.max(...arr));

// // 3 - Usul

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }
// console.log(max(12, 15, 25, 25, 16, 36, 48));

// 7. Masala
// 1 Masala
// Quyidagi siklni consoleda chiqaradigon sikl yozing
// *
// **
// ***
// ****
// *****
// *****
// ******
// *******

// 2 Masala
// Shaxmat do'skasiga o'xshagan quyidagi shaklni consolega chiqaradigon sikl yozing
//  * * * * * * * * * *
// * * * * * * * * * *
//  * * * * * * * * * *
// * * * * * * * * * *
//  * * * * * * * * * *
// * * * * * * * * * *
//  * * * * * * * * * *

// Masala 1

// for (let i = "*"; i.length < 8; i += "*") {
//   console.log(i);
// }

// Masala 2
// let natija = "";
// var qator1 = " * * * * * * * *";
// var qator2 = "* * * * * * * *";
// Simple Usuli
// for (let i = count + 1; i < 5; i++) {
//   for (let b = count + 1; b < 5; b++) {
//     console.log(qator1);
//     console.log(qator2);
//   }
// }

// 2 Usul

// for (let i = 0; i < 8; i++) {
//   if (i % 2 == 0) natija += qator1 + "\n";
//   else {
//     natija += qator2 + " \n";
//   }
// }
// // console.log(natija);
// console.log((1, 2, 3));

// 8. Masala
// Berilgan ikkita sonlarning eng kichigini topish dasturi tuzilsin!
// function min (a,b){
//     return (
//         a>b?b:a
//     )
// }
// console.log(min(5,15));
// console.log(min(0,-10));

// 9. Masala
// Kiritilgan natural sonni teskarsini aniqlab beradigon datur kodini yozin!

var num = 123456789
// 1-Yo'l
// var result = num.toString().split("").reverse().join("")

// 2 Yo'l 
// var strigged = num.toString()
// var sum = []
// for (let i = strigged.length; i > 0; i--) {
//     sum.push(i)
// }
// var result =  Number(sum.join(''))
// console.log(result);

// 3 Yo'l 
// var strigged = num + ''
// var sum = ''
// for (let i = strigged.length; i > 0; i--) {
//     sum += i
// }
// console.log(+ sum);
// console.log(strigged)