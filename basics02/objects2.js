//const tinderUser=new Object();
const tinderUser={};
//console.log(tinderUser);
tinderUser.id="123abc"
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const regularuser={
    email:"sum@gmail.com",
    fullname:{
        username:{
            firstname:"hitesh",
            lastname:"chaubey"
        }
    }
}
// console.log(regularuser) //{  email: 'sum@gmail.com',  fullname: { username: { firstname: 'hitesh', lastname: 'chaubey' } }
// console.log(regularuser.fullname) //{ username: { firstname: 'hitesh', lastname: 'chaubey' } }
// console.log(regularuser.fullname.username) //{ firstname: 'hitesh', lastname: 'chaubey' }

const obj1={1: "a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2} //object inside object

const obj4=Object.assign({},obj1,obj2)
console.log(obj4);
const obj5={...obj1,...obj2}
console.log(obj5);
console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('id'))  //true;

