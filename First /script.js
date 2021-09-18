// JavaScript data types
// Simple Data types 3-7 lines
// Boolean
// Null
// Undefined
// Number
// String
// Symbol

// Complicated Data types 11-15 lines
// Array
// Object
// Function
// Data
// Regex

// Examples to Simple Data types 18-22
let number = 16; // Data type Number
let string = "Asadbek"; // Data type String " " ' ' ` ` :> + concat() ${}
let boolean = true; // Data type Boolean
let undefined; // Data type Undefined
let symbol = "{}|?><)(&%$"; // Data type Symbol
console.log(a); // Data type Null

// Examples to Complicated Data types
let object = { name: "Asadbek", age: 16 }; // Data type object
// Object (obyekt) ham Array misolida ko'rihsimiz mumkin
let array = ["Asadbek", 16, "Abduvoitov"]; //Data type Array
array[0] = "Abdulloh"; // Change Array
// Biz Array (massiv)ni fura musolia ko'rishimiz mumkin agar biz fura chaqirsak ichidagi hamma malumoti bilan keladi array ham huddi shunday arrayni chaqirsak ichidaagi hamma ma'klumotlari bilan keladi.
let func = (a, b) => {
  console.log(a);
  console.log(b);
}; // Data type Function

// Data practise
let x = 5;
let y = 6;
console.log(x + y, x / y, x - y, x * y, x % 7);
// x = x + 1 === x += 1
// x + 1 === x++ , x - 1 === x--
console.log(a == y, "10" == 10, "10" === 10); // answer Boolean ( == va === ikkalasi birxil ishni bajaradi but(lekin) === bu strict tekshiruv yani Data type ni ham tekshiradi)
console.log("4" + 4); // 44
console.log(Number.isInteger(16, 16.16)); // isInteger son butunligini tekshiradi
a = 9;
b = 3;
number = a / b;
console.log(number.toFixed(3)); // toFixed bu sonni kerakligi qismini ajratib olishimiz uchun kerak bo'ladi va sonni stringa o'zgartirib qo'yadi
console.log(Number.parseFloat("12")); // Stringni numberga alishtirib beradi
console.log(Number.parseInt(12.3)); // parseInt sonni butun qismi chiqarib beradi 12.3 bo'lsa bizga 12ni qaytaradi
alert(1); // Userga murojaat qilish
confirm(1); // Userga murojaat qilish
prompt("What's up"); // Userga savol bilan murojaat qilish

// CamelCase style writing in Capital letter for ex MacBook
// Escape Character / strinlani ichida ishlatib bo'lmaydigon belgilarni ishlatishimzda yordam beradi
// /n yangi qatorga tushirish uchun /t bir tad barobarida joy tashaydi
