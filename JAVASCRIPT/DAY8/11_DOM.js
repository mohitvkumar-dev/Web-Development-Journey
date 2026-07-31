 let btn= document.createElement('button');
console.dir(btn.innerHTML="New button");
let p= document.querySelector('p');
console.dir(p.insertAdjacentElement('beforebegin',btn));


let header=document.querySelector('header');
console.dir(header.removeChild(btn));


console.dir(header.remove());