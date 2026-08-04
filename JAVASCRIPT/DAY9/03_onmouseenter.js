let btns=document.querySelectorAll("button");
for(btn of btns){

    btn.onmouseenter=function(){
        btn.onclick=sayhello;
      console.log("you entered a button");
    }
    btn.onclick = sayhello;
   
}

function sayhello(){
 alert("Hello!");
}