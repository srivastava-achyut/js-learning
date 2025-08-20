function saymyname(){
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("Y");
    console.log("U");
    console.log("T");

}
saymyname()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(112,134)

function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;

}
const result=addTwoNumbers(3,5)
console.log("Result :",result);  //Result : 8

function loginusername(username){
    return `${username} is logged in`;
}
const print=loginusername("hitesh");
console.log(print);

