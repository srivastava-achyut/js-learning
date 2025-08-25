const myobj={
    ENG:"English",
    HN:"Hindi",
    MA:"Math",
    PHY:"Physics"

}
//to print object loop using
for(const key in myobj){
   // console.log(key) //only print ENG HN MA PHY
   //console.log(myobbj[key]) //only print English Hindi Math Physics
   console.log(`${key} : ${myobj[key]}`) //print like this ENG : English

}