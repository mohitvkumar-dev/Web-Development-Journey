
// creating new paragraph
let newPara= document.createElement('p');
console.dir(newPara.innerText="Hi I'm new Para.");

// appendChild
let body=document.querySelector('body');
console.dir(body.appendChild(newPara));

let header=document.querySelector('header');
console.dir(header.appendChild(newPara));

// append
console.dir(newPara.append("This is new Line"));

// prepend
console.dir(header.prepend(newPara));

// insertAdjacent
let btn= document.createElement('button');
console.dir(btn.innerHTML="New button");
let p= document.querySelector('p');
console.dir(p.insertAdjacentElement('beforebegin',btn));

console.dir(p.insertAdjacentElement('afterbegin',btn));

console.dir(p.insertAdjacentElement('beforeend',btn));