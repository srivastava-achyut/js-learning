Project Related to DOM

## Project2

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Fstyle.css)
```JavaScript
const form=document.querySelector('form')
//parseInt(document.querySelector('#height').value);
// this use will give empty value

form.addEventListener('submit', function(e){
    e.preventDefault()

  const height=  parseInt(document.querySelector('#height').value);
  const weight=  parseInt(document.querySelector('#weight').value);
  const results= document.querySelector('#results');

  if(height === ''||height<0||isNaN(height)){
       results.innerHTML="please give a valid height"
  }
  //results.innerHTML = '${height}';

  else if(weight === ''||weight<0||isNaN(weight)){
       results.innerHTML="please give a valid weight"
  }
  else{
    //calculate BMI

    const BMI=(weight/((height*height)/10000)).toFixed(2)
  
    //show the result
    if(BMI<=18.6){
         results.innerHTML= `<span>${BMI}</span><br>Under Weight`
    }
    
    if(BMI<=24.9 && BMI>18.6){
         results.innerHTML= `<span>${BMI}</span><br>Normal Range`
    }
if(BMI>24.9){
         results.innerHTML= `<span>${BMI}</span><br>Over Weight`
    }
  }
  
})


```
## Project3 javascript code
```JavaScript

const clock=document.getElementById('clock')
//const clock =document.querySelector('#clock')


setInterval(function(){
let date=new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();

},1000);

```