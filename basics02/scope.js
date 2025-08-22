// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);
// if(true){
//     let a=3;
//     const b=4;
//     var c=5;
// }
// console.log(a);//not defined because a is inside if and act as local scope 
//  console.log(b);
// console.log(c);

// function one(){
//     const username="nishant";
//     function two(){
        
//         const website="youtube";
//         console.log(website);
//     }
//     two();
//    // console.log(website);
//     console.log(username);
// }
// one();

//*******************************************INTERESTING******************************** */
console.log(addone (5))
function addone(value){
    return value+1;             // this will run
}

console.log(addtwo(5))
const addtwo=function(num){     //this will not run
    return num+2;
}
