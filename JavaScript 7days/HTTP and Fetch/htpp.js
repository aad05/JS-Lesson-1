const requestURL = "https://jsonplaceholder.typicode.com/users"

 // AJAX

//  const foo = new XMLHttpRequest()
 //  HTTP so'rov yuborish uchun ishlatiladi buni yozganimizzadan keyingina biz serverga habar jo'natishimi yoki qabul qilishimiz mumkin!
//  foo.open("GET", requestURL)
//  Yangi ulanishni ochib beradi 2 ta qiymat oladi 
// 1. Nima ish qilishiligi yani (methods) // get- ma'lumot qabul qilib olsih uchun, post - ma'lumot yaratish uchun, delete- ma'lumot o'chirib tashlash uchun, put - ma'lumot yangilash uchun ishlatiladi, patch - elementni qisman yangilash uchun ishlatiladi. // open asosan biror bir ma'lumotni qabul qilib olish uchun ishlatiladi
// 2. Qayerda jo'natish yoki qabul qilib olish. 
// foo.responseType = "json"
// Response ni turini bildirib o'tamiz chunki javobni biz JSON.parse qilmaslik uchun
// foo.onload= ()=>{
    // if(foo.status >= 400){
    //     console.error("Ooops something is wrong!");
    // }else{
    //     console.log(foo.response);
    //     var data = foo.response;
    //     document.body.textContent = data[0].email
    // } // bu yer bizda hatrolikni tutib olishlik uchun ishlatiladi 
//     console.log(foo.response);
//     var data = foo.response;
//     document.body.textContent = data[0].email
// }
// HTTP Requestdan response kelgandi ushbu onload ishga tushadi 
// foo.onerror =()=>{
// console.log("Ooops something is wrong!");
// }
// HTTP Requestdan response kelmaganda hatolik ushbu onerror ga kelib tushadi bunda hatolikni qayta ishlash uncha tog'ri kelmydi hatolikni boshqa usul bilan tutib olishlik mumkin
// foo.send()
// jo'natish uchun ishlatiladi
// ^ Tepada ko'rsatib o'tilgan yo'l unchalik ham tog'ri kelmaydi chunki u Asinxronniy funksiya emas 


function sendRequest (method, url, body=null){
    return new Promise ((resolve , reject)=>{
        const foo = new XMLHttpRequest() 
        foo.open(method, url)
        foo.responseType = "json"
        foo.setRequestHeader("Content-type", "application/json")
        foo.onload=()=>{
            if(foo.status >= 400){
                reject(foo.response)
            }else {
                resolve(foo.response)
            }
        }
        foo.onerror=()=>{
            reject(foo.response)
        }
        foo.send(JSON.stringify(body))
    })
}
// sendRequest("GET", requestURL)
// .then(data=> console.log(data))
// .catch(err => console.log(err))
// GET 
var body = {
    name : "Asadbek",
    age : 16
}
sendRequest("POST", requestURL, body)
.then(data=> console.log(data))
.catch(err => console.log(err))
// POST o'zida qo'shimcha parametr oladi 




// Fetch Bilan ishlash Tugadi