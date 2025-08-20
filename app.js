let userSequence=[];
let gameSequence=[];

let btns=["red","yellow","green","blue"];


let started=false;
let level=0;


let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started");
        started=true;

        levelup();
    }
});


function gameflash(randbtns){
    randbtns.classList.add("flash");
    setTimeout(function(){
        randbtns.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}

 function checkAns(idx){
    if(userSequence[idx]==gameSequence[idx]){
        if(userSequence.length==gameSequence.length){
            setTimeout(levelup,1000);
        }

    }else{
        h3.innerHTML=`Game over!!  Your score was <b>${level}</b> <br> Press any key to start the game`;
        document.querySelector(".mainCointainer").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector(".mainCointainer").style.backgroundColor="white";
        },150)
        gameReset();
    }
 }

function levelup(){
    userSequence=[];
    level++;
    h3.innerText=`level ${level}`;

    //randomly button wiil be selected
    let randindx= Math.floor(Math.random()*4);
    let randcolor=btns[randindx];
    let randbtns=document.querySelector(`.${randcolor}`);
    gameSequence.push(randcolor);
    console.log(gameSequence);
    gameflash(randbtns);
}

function userPress(){
    console.log(this);
  let btn=this;
  userFlash(btn);
  let userColor=btn.getAttribute("id");
  userSequence.push(userColor);

  checkAns(userSequence.length-1);
}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",userPress);
}

function gameReset(){
    started=false;
    level=0;
    userSequence=[];
    gameSequence=[];
}