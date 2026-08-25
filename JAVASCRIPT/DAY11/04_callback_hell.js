h1 = document.querySelector("h1");

function changeColor(color, delay,nextcolorChange){
    setTimeout(function(){
        h1.style.color= color;
        if(nextcolorChange) nextcolorChange();
    },delay);
     
}

changeColor("red",1000, ()=>{
    changeColor("orange",2000, ()=>{
        changeColor("green",1000);
    });
});

