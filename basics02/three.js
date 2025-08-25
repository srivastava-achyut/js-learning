//for of
// const arr=[1,2,3,4,5];
// for(const iteration of arr){
//     console.log(iteration); // 1 2 3 4 5
//     const greetings="hello good morning";
// for(const num of greetings){
//     console.log(num); 
// }

//}
// const greetings="hello good morning";
// for(const num of greetings){
//     console.log(num); //hello good morning
// }

//MAps

 const map=new Map()                          //      Map(3) {
map.set('IN', "India")                   // IN' => 'India',
map.set('USA',"United States America");                //   'USA' => 'United States America',
map.set('AS',"Achyut Srivastava");                          // 'AS' => 'Achyut Srivastava'
//console.log(map);                                //        }
for(const [key , value] of map){
    console.log(key,':',value);
}
const myobject={
    game1:"BGMI",
    game2:"freefire"
}
// for(const [key, value] of myobject){  iteration is not possible for objects
// console.log()
// }

