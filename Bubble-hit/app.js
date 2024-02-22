let timer = 60;
let scoreVal = 0;
let rnNum = 0;


function totalScore(){
    scoreVal += 10;
    document.querySelector('#scorevalue').textContent = scoreVal;
}



function randomHit(){
    rnNum = Math.floor(Math.random()*30);
    document.querySelector('#hitval').textContent=rnNum;

}

function makeBubble(){
    let bubbleContainer = "";
    let rn = "";

    for(let i = 1; i<=160; i++){
        rn = Math.floor(Math.random()*30);
        bubbleContainer += `<div class="bubble">${rn}</div>`;
}
    document.querySelector('#bottom_pannel').innerHTML = bubbleContainer;

}


function timerCount(){
    
   let timercountNum = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#runtimer").textContent = timer;
        }
        else{
            clearInterval(timercountNum);
            let pannel = document.querySelector("#bottom_pannel");
            pannel.innerHTML=`Game over ! `
        }
    },1000)
} 

document.querySelector("#bottom_pannel")
.addEventListener("click" , function(details){
    let clickedNum = Number(details.target.textContent); 

    if(clickedNum === rnNum){
        totalScore();
        makeBubble();
        randomHit();
        
    }
})


    randomHit();
    timerCount();
    makeBubble();
    