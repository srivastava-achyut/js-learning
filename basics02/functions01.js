// function saymyname(){
//     console.log("A");
//     console.log("C");
//     console.log("H");
//     console.log("Y");
//     console.log("U");
//     console.log("T");

// }
// saymyname()
// // function addTwoNumbers(number1,number2){
// //     console.log(number1+number2);
// // }
// // addTwoNumbers(112,134)

// function addTwoNumbers(number1,number2){
//     let result=number1+number2;
//     return result;

// }
// const result=addTwoNumbers(3,5)
// console.log("Result :",result);  //Result : 8

// function loginusername(username){
//     return `${username} is logged in`;
// }
// const print=loginusername("hitesh");
// console.log(print);

function calculateCarPrice(num1){
    return num1;
}
console.log(calculateCarPrice(2)); //2

function calculateCarPrice(...num1){
    return num1;
}
console.log(calculateCarPrice(200,400,500)); //[200,400,600]

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) 
}
//when 
handleObject(user); // Username is hitesh and price is 199
handleObject({
    username:"sam",  //Username is sam and price is 399
    price: 399,
})
const myarray=[200,400,100,600]
function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(myarray))         //  400

