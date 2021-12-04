// 1. Basic Tushunchalar 
// Funksiyalar qanday yaratilinadi?
// function name(){
//     const x = 5
//     const y = 6
//     console.log(x + y);
// }
// name()
// sayHello()
// function sayHello(){
//     console.log("Hello I'm Function in the JavaScript!");
// }
// sayHello()
// sayHello()
// name()
// Funksiya ichida funksiya chaqirish
// function callinsideFunction(){
//     sayHello()
//     name()
//     console.log("Inside Funtion worked!");
// }
// callinsideFunction()

// function insideFuntion(){
//     function test(){
//         console.log("This is test function!");
//     }
//     test() // Funksiyani chaqirish
//     console.log("Function Inside");
// }
// test() !Error
// insideFuntion()

// ^ Quyidagi function ipidan ignasigacha tushuntirilishi kerak: parametrs, return, funksiyalarni qayta qayta chaqirish

// Funksiyalr turlari
// 1. Declaration Function
//    function declaration () {}
// 2. Extpression Function
//    var expres =  function expression () {}
// 3. Arrow Function
//    var arrow = () => {}

// function unixTime(){
//     let time = Math.floor(new Date().getTime())
//     console.log(time);
// }
// unixTime()

// function randomInt(){
//     const min = 100
//     const max = 200
//     let rand = Math.floor(min + Math.random() * (max + 1 - min))
//     console.log(rand);
// }

// randomInt()
// randomInt // buni oz'ini chaqiradigon bo'lsak bizga hech qanday hatolik bermaydi
// console.log(randomInt); // funksiyani hammasini consolega chiqarib beradi

// Funksiyaga bir hil nom berib uning qiymati o'garishi mumkin
// function randomInt(){
//     console.log("Funksiya ma'lumoti o'zgardi");
// }

// Funksiyadagi o'zgaruvchilar
//rand() // bu yerda hatolik ko'rsatadi

// let min = 100
// let max = 200
// function rand(){
//     let rand = Math.floor(min + Math.random() * (max + 1 - min))
//     console.log(rand);
// }
// rand()

// min = 50  // min qiymati o'zgardi
// max = 100 // max qiymati o'zgardi
// rand()
// min va max bizda global o'zgaruvchi hisoblanadi yani global scope 
// uni qiymatini o'zgartirsak bu oz'garuvchilarni ishlatyapkan barcha fuknsiyalar oz'garib ketadi 


// let c = 9  // bunda qiymat oz'garyapti chunki global scope bo'lgani uchun 
           // har funksia ishlaganida qiymatini oshirib bormoqda
// function count () {
//  let = 9 // bu yerda c qiymati oshmaydi chunki funksiya har doim qaytadan ishga tushyapti
//     c++ 
//     console.log(c);
// }
// count()

// Advonced Section

// document.querySelector(".out-1").addEventListener("mousemove", count) // bunda har mousemove bo'lganda c ni qiymatini birga oshirib boradi
// document.querySelector(".out-1").onclick =  count // bunda click bo'lganda qiymatimiz o'shmoqda


// document.querySelector(".out-1").addEventListener("mousemove", changeWidth)

// let w = 100
// function changeWidth(){
//     w++
//     document.querySelector(".ot-1").style.width = w  + "px"
// }

// Mouse move bo'lganda divni uzunligini oshirib bormoqda

// 2. Arguments

// Argumentlar ni hisoblab chiqarish
// function showSum(elem, y, x){
//     document.querySelector(elem).textContent = x + y
// }
// showSum(".out-2",6,10)
// Argument yordamida chiqarish 
// function showSum2 (elem, y, x){
//     elem.textContent = y + x
// }
// showSum2(document.querySelector(".out"), 7,8)
// Argument yordamida chiqarishni qisqartirish
// function showSum2 (elem, y, x){
//     elem.textContent = y + x
// }
// const out = document.querySelector(".out")
// showSum2(out, 7,10)

// Default Argiment yordamida queryni tanlab olish
// function showSum3 (y,x,elem = ".out-2"){
//     document.querySelector(elem).textContent = y + x
// }
// showSum3(7,8) // bu yerda elemga ".out-2" deb berilsa berilgan qiymat '.out-2' ta'sir qiladi agar berilmasa '.out-1'ga ta'sir qiladi 
// arguments tushuntirilishi kerak
// function showSum4(){
//     console.log(arguments);
//     document.querySelector(arguments[0]).textContent = arguments[1] + arguments[2]
// }
// showSum4(".out-2", 10, 10 )
// Arguments nima uchun kerak?
// Sizga tast berildi funksiyadagi hamma berilgan argumentlani(parametr) yig'indisini topish ?
// Answer
// function showAll(){
// 1. Yo'l
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(sum);
// 2. Yo'l
    // let sum = Array.from(arguments).reduce((item, total)=>{
    //     return item += total
    // })
    // console.log(sum);
// bunda arguments array bo'lmagani uchun Array.from() qilib oldik
// }
// Question1(10,11,12)
//  !!! JavaScriptni ES6 versiyasida argument ishlatishni maslahat berishmagan

// Rest argumentlar bilan ishlatish
// function showAll2(...args){
//     // console.log(args);
//     let sum = args.reduce((item, total)=>{
//         return item += total
//     })
//     console.log(sum);
// }
// showAll2(12,13,13)

// Funksiya argumentda 
// function showFunction(){

// }
// function showAll(result){
//     document.querySelector(".out-2").innerHTML = `<b>${result}</b>`
// }
// function showFunction(number,callback){
//     callback(number )
// }
// showFunction(455, showAll)
// funksiya parametrida funksiya berilsa callback function deb ataladi
// res paramet yordamida qilingan callback funksiya
// function showFunction(){

// }
// function showAll(result){
//     document.querySelector(".out-2").innerHTML = `<b>${result}</b>`
// }
// function showFunction(callback,...number){
//     callback(number)
// }
// showFunction(showAll,101,202,303,455)
// rest argument yaxshilab tushuntirilishi kerak 
// rest arguments argumentlarni arrayga olib chqarib beradi 



// 3. Return 
// return funksiyani to'xtatish va qiymatini qaytarib berish uchun ishlatiladi 
// function foo(){
//     console.log("Hi I'm a function");
// }
// console.log(foo()); // undefineds
// matematik belgilarni ham ishlatish mumkin
// function foo(){
//     let tt = 17
// }
// console.log(foo() + 131); // NaN - Not a Number
// function foo(){
//     return 15
// }
// console.log(15 + foo()); // 30
// function foo(x ,y){
//     return x + y 
// }
// console.log(10 + 10 + 10 + foo(10, 10));
// console.log(foo(20,30) + foo(30, 20));
// Random Number
// function randomNumber(min ,max){
//     let rand = min + Math.random() * (max + 1 - min)
//     return Math.floor(rand)
// }
// console.log(randomNumber(200,300));
// qayerda hohlasak shu yerda chiqara olamiz
// document.querySelector('.out-1').textContent = foo()
// document.querySelector('.out-1').textContent = randomNumber(200, 500)// 211 qator
// document.querySelector('.out-1').textContent = randomNumber(200,300) +1000
// Color change 
// function randomInt(min ,max){
//     let rand = min + Math.random() * (max + 1 - min)
//     return Math.floor(rand)
// }
// document.querySelector('.out-1').style.background = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// Inputga kiritilgan ma'lumotni olib backgroundni o'zgartirish
// document.querySelector('.b-3').addEventListener("click", function (){
//     const colorBackground = document.querySelector('.i-3').value
//     console.log(colorBackground);
//     document.querySelector('.section').style.background = colorBackground
// })
// Inputdan ma'lumot olib uni chiqarish
// document.querySelector('.b-3').addEventListener("click", function (){
//     const s = document.querySelector('.i-3').value
//     document.querySelector('.out-3').innerHTML = `Hello  ${s}`
//     document.querySelector('.i-3').value = ""
// })

// Tug'ulgan Yilini Topib beruvchi funksiya
// document.querySelector('.b-3').addEventListener("click", function (){
//     let year = +document.querySelector('.i-3').value
//     // bu yerda user xarf kiritib olishi va - raqam kiritishini oldi olinmoqda 
//     if (isNaN(year)) return
//     if(year <= 0) return console.log("Kelachgda tug'ilasanmi mol miyya");
//     document.querySelector('.out-3').innerHTML = 2021 - year
// })
// !Rule return dan keyin enter tashalsa hato qaytaradi  
// !Helpfull agar funksiyamiz 1 qator bo'ladigon bo'lsa bizga {} va return kerak emas 
// Arraw functionda arguments ishlamaydi 
// const foo = (...args)=>{
//     console.log(args);
// }
// foo(1,2,4,4)
// Callback 
// var data = [
//     {id:1,name: "Davkat", surname:"Nurillayev"},
//     {id:2,name: "Ozodbek", surname:"Nazarbekov"},
//     {id:3,name: "Muhammadrizo", surname:"Mamajanov"},
//     {id:4,name: "Zufar", surname:"Qilichboyev"},
//     {id:5,name: "Saidbek", surname:"Toshpo'latov"},
// ]

// function Users(){ 
//     setTimeout(() => {
//         var result = ''
//         data.forEach(element => {
//             result += `<li>${element.name} ${element.surname}</li>`
//         });
//         document.body.innerHTML = result
//     }, 2000);
// }
// Users()
// function addUser(user , callback){
//     setTimeout(() => {
//         data.push(user)
//         callback()
//     }, 3000);
// }
// addUser({id:data[data.length -1].id +1 ,name: "New", surname:"New"}, Users)
// Promise
// function Users(){
//         setTimeout(() => {
//             var result = ''
//             data.forEach(element => {
//                 result += `<li>${element.name} ${element.surname}</li>`
//             });
//             document.body.innerHTML = result
//         }, 2000);
//     }
//     Users()
//     function addUser(user){
//         return new Promise ((resolve , reject)=>{
//             setTimeout(() => {
//                 data.push(user)
//                 var error = true
//                 if(!error){
//                     reject("Nmadadur hatolik ketti")
//                 }else {
//                     resolve()
//                 }
//             }, 3000);
//         })
//     }
//     addUser({id:data[data.length -1].id +1 ,name: "New", surname:"New"}).then(Users)
// Asyn and Await
// function Users(){
//     setTimeout(() => {
//         var result = ''
//         data.forEach(element => {
//             result += `<li>${element.name} ${element.surname}</li>`
//         });
//         document.body.innerHTML = result
//     }, 2000);
// }
// Users()
// function addUser(user){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(() => {
//             data.push(user)
//             var error = true
//             if(!error){
//                 reject("Nmadadur hatolik ketti")
//             }else {
//                 resolve()
//             }
//         }, 3000);
//     })
// }
// async function result (){
//     await addUser({id:data[data.length -1].id +1 ,name: "New", surname:"New"})
//     Users()
    
// }
// result()
// This 
// o'zi turgan funksiyani qaytaradi 
// let count = 0
// function f1(){
//     console.log(count);
//     console.log(this);
//     this.textContent = count
//     count ++
// }
// document.querySelector('.b-1').addEventListener("click", f1)
// Arrow funksiya bilan ishlatish
// var count = 0
// const f2=()=>{
//     console.log(count);
//     console.log(this);
//     this.textContent = count
//     count ++
// }
// document.querySelector('.b-2').addEventListener("click", f2)
// Arrow funksiya thisga ega emas
// Arrow o'zi turgan funksiyana qaytarmaydi u window funksiyani qayatardi bu yerdxa b-2 buttoni tanlab olish kerak 
// Bind birorbir narsani birorbir nmaga ulash uchun ishlatiladi 
// call() ham funcksiyani chaqirish uchun ishlatiladi va qo'shimcha argumentlarni berib yuborish uchun ishlatiladi 
// f1.call(document.querySelector('.b-1'))
// f1.call(document.querySelector('.b-1'))
// f1.call(document.querySelector('.b-1'))
// f1.call(document.querySelector('.b-1'))
// boshqacha usulda tushuntirish
// document.querySelector('.b-1').addEventListener("click", ()=>{
// f1.call(document.querySelector('.b-1'))
// })
// .b-1 ni qiymatini o'gartirish
// document.querySelector('.b-1').addEventListener("click", ()=>{
// f1.call(document.querySelector('.b-2'))
// })
// b.2 ni qiymatini o'zgartirish
// Qiziq savol
// "use strict" // qatiy tekshirish
// foo() // bunda error qaytaradi 
// if(true){
//     function foo(){
//         console.log("Hi I'm a Foo");
//     }
// }else {
//     function foo(){
//         console.log("Hi I'm a Foo");
//     }
// }   
// "use strikt ishlatsak biga hatolik beradi"
// foo() // true if ^
// Expession function
// const foo = function (){
//     console.log("Hi I'm declaration function");
// }
// foo()
// var foo2 = foo // bunda biga () kerak emas
// Qiziqarli savol
// function foo1(){
//     console.log("Hi I'm foo1");
// }
// function foo2(){
//     console.log("Hi I'm foo2");
// }
// console.log(foo1 == foo2); //false
// var foo = function fooinside(){
//     console.log("Hi I'm foo");
// } // uzun usulda yozilgan 
// fooinside() // undefined

// Pure Function 
// function squad(n){
//     return n **2
// }
// console.log(squad(4));
// console.log(squad(4));
// console.log(squad(-4));
// Bu funksiya bizga problema tug'diradigon joylarni (ko'cha tili) kamaytirishda ishlatilad


// Simple Project using apply 
// document.querySelector('.s-1').addEventListener("change",f2)
// function f2(name){
//     // console.log(this);
//     document.querySelector('.out-2').textContent = document.querySelector('.s-1').value 
// }
// f2.apply(this, "Asadbek")

// var out = ""
// for(let i = 1 ; i < 7; i++){
//     for(let j = i; j > 0; j--){
//         out += `*`
//     }
//     out += "\n"
// }
// console.log(out);