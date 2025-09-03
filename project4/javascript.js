let random=parseInt(Math.random()*100+1)
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
        validate(guess)
    })
}
function validate(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
 alert('Please enter a valid number')
    }
    else if(guess>100){
        alert('Please enter a valid number less than 100')
    }
    else{
        prevguess.push(guess)
        if(attempt===11){
            display(guess)
            displaymess(`GAME OVER!! Random number was random`)
            endgame()
        }
        else{
            display(guess)
            attempt++
            checkguess(guess)
        }
    }
}
function checkguess(guess){
      if(guess===random){
        displaymess(`you guessed it right`)
        endgame()
      }
    else  if(guess<random){
        displaymess(`number is TOO low`)
    }
  else  if(guess>random){
        displaymess(`number is TOO high`)
    }

}
function display(guess){
userinput.value=''
  guesses.innerHTML+=`${guess} `
  //attempt++;
  remaininig.innerHTML=`${11-attempt}`
}
function displaymess(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
  userinput.value=''
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newgame">Start new game</h2>`
  startover.appendChild(p)
  playgame=false
  newgame()
}
function newgame(){
const newgamebutton=document.querySelector('#newgame')
newgamebutton.addEventListener('click',function(e){
    random=parseInt(Math.random()*100+1)
    prevguess=[]
    attempt=1
    guesses.innerHTML=''
    remaininig.innerHTML=`${10-attempt}`
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true

})
}