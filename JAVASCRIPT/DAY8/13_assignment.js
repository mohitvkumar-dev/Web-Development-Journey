// question : 1

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append (button)

// question : 2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


// question : 3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


// question : 4
let h1 = document.createElement("h1");
hl.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(hl);


let p = document.createElement("p") ;
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);