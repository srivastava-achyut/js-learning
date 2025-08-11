console.log(1==1) //true
console.log(1!=1)  //false
console.log(1>2) //false
console.log(2>1) //true
console.log("2"==2) //true
console.log(2=="2") //true (==) -> loose equality that's why it gives true first convert string into number
let input=(2=="2") 
console.log(typeof input)
console.log(2!="2") //false
console.log("2">1) //true
console.log(null>0) //false
console.log(null==0)  //false
console.log(null>=0); //true

console.log("2"===2) //false because === strict equality it also checks datatypes
