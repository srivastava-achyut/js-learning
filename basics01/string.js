const name="hitesh"
const repocount=10
// console.log(name+repocount+"value")
// console.log(`hello my name is Achyut Srivastava ${name} ${repocount} value`)
const gameName=new String('HitesgHit') //string
// console.log(gameName[0]);  //H
// console.log(gameName[1]);  //i
// console.log(gameName.__proto__) //{} //empty
// console.log(gameName.length)  //give length of string
// console.log(gameName.toUpperCase()) //  // convert into uppercase
// console.log(gameName.charAt(2))// output is-> t give char at index 2
// console.log(gameName.indexOf('t')); //give the index of t
const newString=gameName.substring(0,5);
// console.log(newString);
 const another=gameName.slice(0,4);
const another1=gameName.slice(-8,4);
// console.log(another)
// console.log(another1);

const newstr="   nishant    "
console.log(newstr)  // print nishant with spaces
console.log(newstr.trim())  //remove spaces   trimLeft trimRight trimStart trimEnd

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))
console.log(newString.split('-'));


