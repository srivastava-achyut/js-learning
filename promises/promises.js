const promiseOne = new Promise(function(resolve,reject){
     //db calls,cryptography, network
     setTimeout(function(){
        console.log('Async task is complete')
        resolve() //when we use resolve then promise consumed will be print
     },1000)
})
promiseOne.then(function(){
    console.log("promise consumed")
})
const promisetwo=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"Nishant",Email:"achyutnishant08@gmail.com"})
    },1000)
})
promisetwo.then(function(user){
    console.log(user);
})
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let a=2;
        let b=2;
        let error=true;
        if(a+b===5){
            error=true;
        }
        else
            error=false;
        
        if(!error){
            resolve({username:"Achyut",password:"123456"})
        }
        else{
            reject('ERROR:Something went Wrong')
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username)
}).catch(function(error){
    console.log(error);    
})

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
let error=true;
    if(!error){
        resolve({username:"javascript",password:"12345"})
    }
    else{
        reject('ERROR: JS went wrong')
    }
    },1000)
})
// async function consumepromisefive({
//        const responseawait promisefive
// })