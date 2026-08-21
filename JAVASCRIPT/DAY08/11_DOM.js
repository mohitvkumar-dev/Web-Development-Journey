 let btn= document.createElement('button');
console.dir(btn.innerHTML="New button");
let p= document.querySelector('p');
console.dir(p.insertAdjacentElement('beforebegin',btn));

// removeChild()
let header=document.querySelector('header');
console.dir(header.removeChild(btn));

// remove()
console.dir(header.remove());