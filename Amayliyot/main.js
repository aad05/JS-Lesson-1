var st = "000000003.00004000000000";
var first;
var last;

// first way
// for (let i = 0; i < st.length; i++) {
//   if (st[i] > 0) {
//     first = i;
//     break;
//   }
// }
// for (let i = st.length - 1; i > 0; i--) {
//   if (st[i] > 0) {
//     last = i;
//     break;
//   }
// }
// if (first == last) {
//   console.log(st[first]);
// } else {
//   console.log(st.slice(first, last + 1));
// }

// second way
// for (let i = 0; i < st.length; i++) {
//   if (st[i] > 0) {
//     first ? (last = i) : (first = i);
//   }
// }
// last ? console.log(st.slice(first, last + 1)) : console.log(st[first]);

// var arr = ["aaa", "aaa", "aaa", "aaa", "aaa"];

// let result = true;
// function tets(a) {
//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[0] !== a[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// let count = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[0] === arr[i + 1]) {
//     count++;
//   }
// }
// count === arr.length - 1 ? console.log(true) : console.log(false);

// var str = 123;
// var str2;
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }
// var str = 123456789;
// var main = str.toString();
// var result = "";
// for (let i = main.length - 1; i >= 0; i--) {
//   result += main[i];
// }
// var thumb = result + main;

// console.log(Number.parseInt(thumb));
