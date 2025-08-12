// # Primitive datatype
//7 category: String , Number, Boolean, NULL, undefined, Symbol, BigInt 

// Reference (Non Primitive)
// Array, Objects, Functions, 

//const score=100  // number number
// const scorevalue=100.3  //string string
// const isLoggedIn=false; // boolean boolean
// const outsideTemp=null; //null object
// let usermail; // undefined undefined
// const id=Symbol('123'); //symbol symbol
// const anotherID=Symbol('123');
// const bigNumber=34567890922445456890; // BigInt bigint
// const heros=["shaktiman", "nagraj","doga"]; //object
// let myobj={
// name:"Achyut", //object
// age:22,
// }
// const myFunction = function(){
//     console.log("Hello World");  //function
// }
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myobj);
// console.log(typeof id);
// console.log(typeof myFunction);

//*************************************************************************** */

//STACK                        HEAP                     STACK                    HEAP          STACK

//stack(Primitive)                    heap(non primitive)

let myYoutubename="nishantgaming";
let anothername=myYoutubename;
anothername ="achyutnishant";

console.log(myYoutubename);
console.log(anothername);
let user={
    email:"usergoogle@gmail.com",
    upi_id:12345

}
let usertwo=user;
usertwo.email="nishant@gmail.com"
console.log(user.email)
console.log(usertwo.email)
