//random color generator

const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalid
const startChangingColor=function(){
  intervalid=  setInterval(changecolor,1000)
function changecolor(){
      document.body.style.backgroundColor=randomcolor();
}
}
const stopchangingcolor=function(){
  clearInterval(intervalid);
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopchangingcolor)