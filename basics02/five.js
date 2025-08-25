// const coding=["pw","cw","gw", "rw", "mw"]
// coding.forEach(function name(val) {
//     console.log(val)
// })
// coding.forEach((val)=>{
//     console.log(val)
// })
//forEach does not returtn any value
// const coding=["helo", "hello","hi"]
// const vaue=coding.forEach(function name(val){
//     console.log(val)
// })
//onsole.log(vaue); //undefined means ForEach doesa  not return any value

// const nums=[1,2,3,4,5,6];
// let newnums=nums.filter((num)=> {
//    return num>5
// })
// console.log(newnums);

// const mynums=[1,2,3,4,5,6,7,8,9];
// //const newnums=mynums.map((num)=>num+10)
// //console.log(newnums);     11,12,13,14,15,16,17,18,19
// const newnums=mynums.map((num) => num*10).map((num)=>num+10);  //first multiplication then addiion both will run
// console.log(newnums);

const nums=[1,2,3]

const mytotal=nums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},4)
console.log(mytotal)
