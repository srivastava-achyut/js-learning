//Immediately Invoked Function Expressions(IIPE)

// function chai(){
//     console.log("DB Connected");  //DB Connected
// }
// chai();

 (function chai(){
  console.log("DB Connected");  //DB Connected
 })(); // if we not use semicolon and try to print another iife like this function it will show error

//()() first parentheses is function call and second is execution

( ()=>{
    console.log("DB Connected two") //DB Connected two
})()

