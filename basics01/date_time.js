//dates

  let myDate=new Date();
  console.log(myDate.toString()); //Fri Aug 15 2025 06:25:59 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString());       //Fri Aug 15 2025
  //console.log(myDate.toISOString());     //2025-08-15T06:33:14.039Z
//  console.log(myDate.toJSON());          //2025-08-15T06:33:14.039Z
//  console.log(myDate.toLocaleString());   // 8/15/2025, 6:33:14 AM
//  console.log(myDate.toTimeString());      //06:33:14 GMT+0000 (Coordinated Universal Time)
  //console.log(typeof myDate);           //object It is interview type question
//  let createdate=new Date(2025,12,23);  //Fri Jan 23 2026 because of giving 12 in month it turned to first month of next year 2025 to 2026
// console.log(createdate.toDateString());  //Fri Jan 23 2026
// let createnewdate=new Date(2025,12,23,12,25,54,876);
//console.log(createnewdate.toLocaleString());   //   1/23/2026, 12:25:54 PM
let myTime= Date.now();
console.log(myTime);
let newDate=Date.now();
newDate.toLocaleString('default', {
  weekday:"narrow",
  
})

//***************DATE PROTOTYPE ***************************** */
//  1))) getDate()  //GIVE ONLY DATE
// getDay()     //GIVE ONLY DAY
// getFullYear()  GIVE FULL YEAR
// getHours()     GIVE HOURS
// getMilliseconds() GIVE MILISECOND
let end, start;

start = new Date();
for (let i = 0; i < 10000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);  //Operation took 1 msec
const today = new Date();
const weekday = today.getUTCDay();
console.log(today)  //2025-08-15T12:27:33.209Z
console.log(weekday)         //5  friday



