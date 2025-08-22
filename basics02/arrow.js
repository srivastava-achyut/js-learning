// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//        // console.log(this) 
//     }

// }
// user.welcomeMessage();           //hitesh , welcome to website
// user.username="Sam"
// user.welcomeMessage();        //Sam , welcome to website
// console.log(this);          //{} empty

// function chai(){
//          console.log(this);
// }
// chai();

const chai = ()=>{        //arrow function
        let username="hitesh"
        let price=900
        console.log(this.username);  // undefined
        console.log(this);  //{}
}
  ///chai();

  const diff_two=(num1,num2)=>(num1-num2);
  console.log(diff_two(90,10));             //80

  const addtwo=(num1,num2)=>({username:"nishant"});      //{ username: 'nishant' }
  console.log(addtwo(3,4))
