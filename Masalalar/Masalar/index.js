// 1.
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *
// Ushubu ko'rinish chizilsin
// Problem resolved
// let a = 10;

// for (let i = a; i > 0; i--) {
//   let str = "";
//   for (let j = a - i; j > 0; j--) {
//     str += " ";
//   }

//   for (let k = 0; k < i; k++) {
//     str += "*";
//   }

//   console.log(str);
// }

// 2.
// funcksiyada 2ta qiymat berilgan 1 array ichida sonlar 2 topilishi kerak bo'lgan son
// array ichidagi sonni qo'shganda 2ta sonni qo'shga 2chi qiymatda bergan javobimiz
// bilan teng bo'ls treu notog'ri bo'lsa false
// example
    // console.log(check([10,11,20,31], 21)) // true
    // console.log(check([11,41,20,31], 21)) // false
// Problem resolved
// function checks(arr, num){
//     for (let i = 0; i < arr.length ; i++){
//         for (let j = i +1; j < arr.length; j ++){
//             if(arr[i] + arr[j] === num)
//                 return true
//         }
//     }
//     return false
// }
// console.log(checks([5,0,0,5],10));

// 3.
// berilgan sonni bir biriga qo'shilgandagi qiymat topilsin
// sumDigital(123) // 6
// sumDigital(1234) // 10
// function  sumDigital(num){
//     var str = num + ""
//     let sum = 0
//     for(let i = 0; i < str.length; i++){
//          sum += +str[i]
//     }
//     return sum
// }
// console.log(sumDigital(123));

// 4. 
// Ushbu uch sondan eng kattasi tanlansin
// var str1 = 16766;
// var str2 = 2919212919;
// var str3 = 3666;
// if (str1 >= str2) {
//   if (str1 >= str3) {
//     console.log(str1);
//   } else {
//     console.log(str3);
//   }
// } else {
//   if (str2 > str3) {
//     console.log(str2);
//   } else {
//     console.log(str3);
//   }
// }
// if (str1 >= str2) {
//   if (str1 >= str3) {
//     console.log(str1);
//   } else {
//     console.log(str3);
//   }
// } else {
//   if (str3 >= str2) {
//     console.log(str2);
//   } else console.log(str3);
// }

// 5.
// funcksiyada 3ta qiymat bor 1-qiymat array, 2-qiymat qaysi array qiymatini, 3-qiymat qayerga joylashtirish
// var arr = [1,2,3,4,5]
// function test(data, index, position){
//     var tell = index + position;

//     var result = [...data ]

//     var element =  result.splice(index,1)[0]
//     result.splice(index+position, 0 , element)
//     console.log(result);
// }
// test(arr, 1, 4)

let a = 10;
let b = 10
for (let i = 0; i < 10; i++) {
    let str = "";
  for (let j = b; j > 0; j--) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += "*";
  }
  for (let k = 0; k < i; k++) {
    str += "*";
  }
  b--
  console.log(str); 
}