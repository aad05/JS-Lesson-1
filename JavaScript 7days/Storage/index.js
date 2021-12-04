window.addEventListener("storage", storageEventHandler)
function storageEventHandler (){
    console.log("storage");
}
var a = [1,23,4,5]
localStorage.setItem("key", JSON.stringify(a))
var b = localStorage.getItem("key")
b = JSON.parse(b)
console.log(b);
var c = {
    name:"Asadbek",
    surname:"Abduvoitov",
    age: 16
}
localStorage.setItem("c", JSON.stringify(c))
var d = localStorage.getItem("c")
d = JSON.parse(d)
console.log(d.age);