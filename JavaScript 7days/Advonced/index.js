// 1. Prototype 
// const person = {
//     name : "Asadbek",
//     age : 16,
//     surname :  function ( ){
//         console.log("Abduvoitov");
//     }
// }

// New Version
// const person = new Object({
//         name : "Asadbek",
//         age : 16,
//         surname :  function ( ){
//             console.log("Abduvoitov");
//         }
//     })
//     Object.prototype.sayHello = function() {
//         console.log("Hello!");
//     }
// const data = Object.create(person)
// data.tell = "995321025"





//  2. Bind , Apply , Call
// function sayHEllo (){
//     console.log(this);
// }
// const person = {
//     name : "Asdbe",
//     age :16,
//     sayHelloWindow : sayHEllo.bind(window),// Bind 
//     info : function (job, phone){
//         console.group(`${this.name} INFO:`)
//         console.log(`He is ${this.name}`);
//         console.log(`He is ${this.age}`);
//         console.log(`My job is ${job}`);
//         console.log(`My phone is ${phone}`);
//         console.groupEnd();
//     }
// }

// const data2 = {
//     name : "Ahrorbek",
//     age : 21
// }
// person.info.bind(data2,"Front-End", "Iphone 13")() // bind bunda funksiyani ishlatish kerak 
// person.info.call(data2,"Front-End", "Iphone 13") //call bunda funcksiyani chaqirish shart emas chunki call u funksiyani ishlatib yuboradi karoche call funksiyani ishlatadi ulaydi va parametr berishga yordam beradi 
// person.info.apply(data2, ["Front-End", "Iphone 13"]) // call dan applyni farqi call 2ta parametra oladi 1- parametr bu ulash 2- array

// biz consoleda nechi raqam kiritsak ham bizga berilgan errayni qiymatini berilgan songa ko'paytirib beradigon funksiya tuziklsin
// const array = [1,2,3,4,5]


// Array.prototype.aema  = function(n){
//     return this.map(v=>{ // this protatyda nima berilsa shunga teng bo'ladi chunki this kalit so'zi bizga nuqtadan chapda joylashgan narsani bildiradi 
//         return v * n
//     })
// }
// Bind misol
// function bind(context,fn){
//     return function(...args){
//         fn.apply(context,args)
//     } 
// }
// function logoPerson(){
//     console.log(`Person: ${this.name}, ${this.age}, ${this.jobs}`);
// }
// const person1 = {name : "Asadbek", age: 16, job :"Dev"}
// const person2 = {name : "Asadbek", age: 16, job :"Dev"}

// bind(person1, logoPerson)()
// bind(person2, logoPerson)()

 
// 3. Zamikaniya bu yani funksiya ichida funksiyade deb tushunsa ham bo'laveradi 
// function createTest (n){
//     return function(){
//         console.log(1000 * n);
//     }
// }
// const calc = createTest(42)
// calc()
// function calc(n){
//     return function (){
//         n + b
//     }
// }
// const addone = calc(10)
// console.log(addone(40));


// function urlGenarator(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }
// const browser = urlGenarator('uz')
// browser("kun")



// 4. Objects with Object.create, getter and setter

// const human = Object.create({},{
//     name : {
//         value : "Asadbek"
//     },
//     age : {
//         value: 16
//     },
//     job : {
//         value: "Front-End"
//     }
// })
// Object yaratish uchun ishlatiladi 2ta qiymat oladi  

// const human = Object.create({
//     claculateAge (){
//         console.log(new Date().getFullYear() - this.birthday)
//     }
// } /* bu yerda prototypelar yozamiz */ ,{
//     name : {
//         value : "Asadbek",
//         enumerable : true, //siklada ishlashga ruhsat beradi
//         writable : true, // ma'lumotni o'zgartira olishimiz mumkin
//         configurable: true // buroribir ma;lumotnichi o'chirib tashlash uchun ishlatiladi
//     },
//     age : {
//         value: 16,
//         enumerable: true,  //siklada ishlashga ruhsat beradi
//         configurable: true // buroribir ma;lumotnichi o'chirib tashlash uchun ishlatiladi
//     }, 
//     job : {
//         value: "Front-End",
//         enumerable: false,  //siklada ishlashga ruhsat beradi
//         configurable: false // buroribir ma;lumotnichi o'chirib tashlash uchun ishlatiladi

//     },
//     birthday : {
//         value: 1993
//     },
//     full : {
//         get(){
//             return new Date().getFullYear() - this.birthday
//         },
//         set(value){
//             console.log("Set fullname");
//         }
//     }
// })
// human.name = "Ahrorbek" // don't work
// for (let key in human){
//     console.log("Key", human[key]);
// }

// 5. ES6 Class
// class Animal {
//     static type = "ASaksaks"
//     constructor(options){
//         this.name = options.name
//         this.age = options.age
//         this.surname = options.surname
//     }
// }
// const anim = new Animal({
//     name : "Asadbek",
//     age : 16,
//     surname : "Abduvoitov"
// })
// class Main extends Animal {

// }
// const cat = new Main ({
//     name : "Agelina",
//     age : 16,
//     surname : "Abduvoitov"
// })

// Generator 
// function * genarator(){
//     yield "H"
//     yield "E"
//     yield "L"
//     yield "L"
//     yield "O"
// }
// const gen = genarator()
// function * numGen(n = 10){
//     for(let i = 0; i < n; i ++){
//         yield i
//     }
// }
// const num =  numGen(7)
// const iterator = {
//     [Symbol.iterator] (n=10){
//         let i = 0
//         return {
//             next ( ){
//                 if(i < n){
//                     return {value: ++i, done: false}
//                 }else {
//                     return {value:undefined, done:true }
//                 }
//             }
//         }
//     }
// }
// for (let k of iterator){
//     console.log(k);
// } // is not iterable 

// function* iter(n = 10){
//     for(let i = 0; i < n; i++){
//         yield i
//     }
// }
// for (const key of  iter(8)) {
//     console.log(key);
// }