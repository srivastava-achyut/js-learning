/////array/////
const myarr=[1,2,3,4]
const heroes=["Salman","sahrukh","hrithik","varun"]
//console.log(myarr[0]) //  output will be 1
//console.log(heroes[0],heroes[1])  //salman sahrukhm
// myarr.push(7);
// myarr.push(8);
// console.log(myarr); //[ 1,2,3,4,7,8 ]
// myarr.pop()
// console.log(myarr); // [ 1, 2, 3, 4, 7 ]

// myarr.unshift(0);
// console.log(myarr); // add at start [ 0, 1, 2, 3, 4 ]
// myarr.shift()
// console.log(myarr);  //remove from the start [ 1, 2, 3, 4 ]

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(1));

// const newarr=myarr.join();

// console.log(myarr);
// console.log(typeof newarr);

//slice and splice
//console.log("A",myarr);
//const xy=myarr.slice(1,3);
//console.log(myarr);  // slice property not change the original array
//console.log(xy);  //   [ 2, 3 ] index 1 and 2 element will be the output

//const xyz=myarr.splice(1,3);
//.log(myarr);  // splice property change the original array  [ 1 ]
//console.log(xyz);    //[ 2, 3, 4 ] 
//myarr.push(heroes);
// console.log(myarr);  // [ 1, 2, 3, 4, [ 'Salman', 'sahrukh', 'hrithik', 'varun' ] ]
// const all=myarr.concat(heroes);
// console.log(myarr); //[ 1, 2, 3, 4, [ 'Salman', 'sahrukh', 'hrithik', 'varun' ] ]
const newarr = [...myarr, ...heroes];
console.log(newarr);   //[ 1, 2, 3, 4, 'Salman', 'sahrukh', 'hrithik', 'varun' ]
const another=[1,2,3, [4,5,6],[2,3,[4,5]]];
const real_another=another.flat(Infinity);
// console.log(real_another);  [
//   1, 2, 3, 4, 5,
//   6, 2, 3, 4, 5
// ]
console.log(Array.isArray("Hitesh"));  //false
console.log(Array.from("Achyut"));  //[ 'A', 'c', 'h', 'y', 'u', 't' ]
console.log(Array.from({name:"Achyut"}));  //[] empty array important for interview
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); [100,200,300]
