const random=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')

const guesses=document.querySelector('.guesses')
const remaininig=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevguess=[]
let attempt=1;
let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validate(guess){
    
}
function checkguess(guess){

}
function display(guess){

}
function displaymess(message){

}
