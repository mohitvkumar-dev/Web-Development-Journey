let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onclick=sayhello;
    btn.onmouseenter=function(){
    console.log("you entered a button");
    }
    btn.onclick = sayhello;
   
}

function sayhello(){
 alert("Hello!");
}