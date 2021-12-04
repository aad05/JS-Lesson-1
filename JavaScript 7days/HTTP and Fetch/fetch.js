const requestURL = "https://jsonplaceholder.typicode.com/users"


function sendRequest (method, url, body=null){
    const headers = {
        "Content-type"  : "application/json"
    }
    return fetch(url, {
        method : method,
        body : JSON.stringify(body),
        headers : headers
    }).then(respone =>{
        // return respone.text() // text shaklida chiqarib beradi
        // return respone.json() 
        // Hatoni ham tekshirish
        // if(respone.status >= 400 ){
        //     return respone.json()
        // }
        // return respone.json().then(err=>{
        //     const e = new Error("Ooops something is wrong!")
        //     e.data = error
        //     throw e
        // })
    })
}

var body = {
    name : "Asadbek",
    age : 16
}
// sendRequest("POST", requestURL, body)
// .then(data=> console.log(data))
// .catch(err => console.log(err))
sendRequest("POST", requestURL, body)
.then(data=> console.log(data))
.catch(err => console.log(err))
