const requestURL = "https://jsonplaceholder.typicode.com/users"


function ls(method, url, body){
    var header = {
        "Content-type" : "application/json"
    }
   return fetch(url, {
       method: method,
       body: JSON.stringify(body),
       headers: header
   }).then(response=>{
       if(response.status <= 400 ){
           return response.json()
       }else {
           const e = new Error("Ooops something is wrong!")
           e.data = error
           throw e
       }
    })
}
var body = {
    name : "Asadbek",
    surname : "Abduvoitov",
    age : 16
}
ls("POST", requestURL,body)
.then(data=> console.log(data))
.catch(err => console.error(err))