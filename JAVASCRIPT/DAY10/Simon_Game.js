let gameSequence=[];
let userSequence=[];

let btns= ["yellow","red","purple","green"];
let started = false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        
    console.log("game started");
    started=true;
    levelup();

    }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
      btn.classList.remove("flash");
  }, 250);
 
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
      btn.classList.remove("userflash");
  }, 250);
 
}

function levelup(){
  level++;
  h2.innerText= `Level ${level}`; 
  

  let randomIdx=Math.floor(Math.random()*btns.length);
  let randomColor= btns[randomIdx];
  let randombtn = document.querySelector( `.${randomColor}`);
  console.log(randomIdx);
  console.log(randomColor);
  console.log(randombtn);
  gameFlash(randombtn);
}


function btnPress(){
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}