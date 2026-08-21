let btn = document.querySelector("button");
let p = document.querySelector("p");
let h5 = document.querySelector("h5");


function changeColor(){
   console.dir(this.innerText); 
   this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h5.addEventListener("click", changeColor);


