var Timer =60;
var hitRn;
function createBubble(){
   var clutter =``;
    for(var i = 0;i<178;i++){
        clutter +=`<div id="bubble"> ${
            Math.floor(Math.random() * 10)
        }</div>`;
    }
    document.querySelector("#blockDown").innerHTML= clutter;
}
function runTimer()
{
    setInterval(function(){
        if(Timer>0){
            Timer--;
           var TimerInt= document.querySelector("#timeInterval").textContent =Timer ;
        }
        else{
            clearInterval(TimerInt)
            

        }
    },1000)
}
function hitVal(){
hitRn = Math.floor(Math.random() * 10);
document.querySelector("#hitt").textContent =hitRn;
}
function increaseScore(){
    score+=10;
}
function final(){
    document.querySelector("#blockDown").addEventListener("click" , function(details){
        var clickedNumber = details.target.textContent;
        if(hitRn === clickedNumber){
            increaseScore();
            createBubble();
            hitVal();
        }
    })
}
createBubble();
runTimer();
hitVal();