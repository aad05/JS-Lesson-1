// var draw = function () {
//   var username = document.getElementById("fish").value;
//   var match = document.getElementById("uchrashuv").value;
//   var summa = document.getElementById("pay").value;
//   var sana =
//     new Date().getDate() +
//     ":" +
//     new Date().getMonth() +
//     ":" +
//     new Date().getFullYear();
//   const Arr = [];
//   if (username !== "" && summa !== "") {
//     var abj = {
//       username,
//       summa,
//       match,
//       sana,
//     };
//     Arr.push(abj);
//   } else {
//     alert("Malumotlarni to'liq kiritin");
//   }
// };
// console.log(Arr);

// name = {
//   name: "Asadbek",
//   surname: "Abduvoitov",
//   age: 16,
// };
// nme = ["a", "b", "c", "d"];
// console.log(Object.keys(nme));
// console.log(Object.getOwnPropertyNames(nme));

// function speedTest(speed){
//   if (speed <= 70){
//     console.log("ok");
//   }else{
//     if (speed >70) {

//       var result = speed - 70 
//       var mainresult = Math.floor( result / 5)
//       if(mainresult>= 12){
//         console.log("Guvohnoma olib qo'yilsin!");
//       }else{
//         console.log(mainresult + " " + "point oldingiz");
//       }
//     }
//   }

// }
// speedTest(125)


// function test(num){
//   result = 0
//   for(let i = 0; i <= num; i ++){
//     if((i % 3 === 0) || (i % 5 === 0)){
//       result += i
//     }
//   }
//   console.log(result);
// }
// test(20);


// for (let i =1; i <= 10;i++ ){
//     setTimeout(()=>{
//         console.log(i + "as");
//     },0)
//     setTimeout(()=>{
//         console.log(i);
//     },1000)
// }
var arr = [81,74,86,59,77]
// studentsMark(arr)
// function studentsMark(marks){
//     for(let i = 0; i < marks.length; i++){
//         if(marks[i] <= 50){
//             console.log("f");
//         }else{
//             if((marks[i]>=51) && (marks[i]<=60) ){
//                 console.log("D");
//             }else{
//                 if((marks[i]>=61) && (marks[i]<=70) ){
//                     console.log("C");
//                 } else{
//                     if((marks[i]>=71) && (marks[i]<=80)){
//                         console.log("B");
//                     }else{
//                         if((marks[i]>=81) && (marks[i]<=100)){
//                             console.log("A");
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(calculateGrade(arr));
// function calculateGrade(grade){
//     let sum = 0
//     for(let mark of grade)sum += mark
//     let avg = sum / grade.length
//     if(avg < 50) return "A";
//     if(avg < 60) return "B";
//     if(avg < 70) return "D";
//     if(avg > 80) return "K";
// }

// number(20)
// function number(limit){
//     for(let num = 2; num <= limit; num ++){
//         let k = true
//         for(let fir = 2; fir < num; fir++ ){
//             if(num % fir === 0 ){
//                 k = false
//                 break
//             }
//         }
//         if(k) {
//             console.log(num);
//         }
//     }
// }