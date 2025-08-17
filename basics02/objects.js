//singleton

//object literals
const mysbl=Symbol("key1")
//console.log(typeof mysbl);  // symbol
const JSuser={
    name:"Hitesh",
    "full name": "Hitesh Chaubey",
    age:"18",
    [mysbl]:"key1",
    location: "Jaipur",
    email:"hotesh098@gmail.com",
    
}
// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser["full name"]);
// console.log(JSuser.mysbl) // key1 datatype is string not symbol if we define like mysym:"key1" 
// console.log(JSuser[mysbl]); // key1 datatype is symbol

JSuser.email="achyutnis@gmail.com" //change the value of email in object
//Object.freeze(JSuser);   //  it freeze the object and now we can not update our value in object
JSuser.email="narendramodi.com"
//console.log(JSuser)  //{
//   name: 'Hitesh',
//   'full name': 'Hitesh Chaubey',
//   age: '18',
//   location: 'Jaipur',
//   email: 'achyutnis@gmail.com',
//   [Symbol(key1)]: 'key1'
// }

JSuser.greeting=function(){
    console.log("hello JS user");

}
//console.log(JSuser.greeting); //[Function (anonymous)]
console.log(JSuser.greeting());   //hello JS user
JSuser.another=function(){
    console.log(`Hello JS user, ${this["full name"]}`)
}
console.log(JSuser.another());  //Hello JS user, Hitesh Chaubey
