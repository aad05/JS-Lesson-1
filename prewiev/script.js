// const person = Object.create({},{
//   name : {
//       value:"Asadbek",
//       enumerable:true,
//       writable:true,
//       configurable:true
//   },
//   birthYear : {
//       value:"1993",
//       enumerable:false,
//       writable:false,
//       configurable:false
//   }

// })
// delete  person.name
// for(let key in person){
//     console.log("Key", key,person[key ]);
// }



var arr = [[],[],[],[]]
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        var randomInt =  -30 + Math.random() *50
        randomInt = parseInt(randomInt)
        arr.push([randomInt])
    }
    console.log(arr);
}