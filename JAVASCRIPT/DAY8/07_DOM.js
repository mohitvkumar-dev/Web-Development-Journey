let img= document.querySelector('img');

console.dir(img);
console.dir(img.style);

let heading = document.querySelector('h1');

console.dir(heading);
console.dir(heading.style);
console.dir(heading.style.color='purple');


let links=document.querySelectorAll(".box a");
for(let i =0 ; i<links.length; i++){
    links[i].style.color="green";
}
