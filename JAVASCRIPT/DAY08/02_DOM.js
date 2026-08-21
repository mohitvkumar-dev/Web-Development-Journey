
// to access objects
let collection= document.getElementsByClassName("heroImg");
console.dir(collection);
console.dir(document.getElementsByClassName("heroImg")[0]);
console.dir(document.getElementsByClassName("heroImg")[1]);
console.dir(document.getElementsByClassName("heroImg")[2]);

// for source
console.dir(document.getElementsByClassName("heroImg")[0].src);
console.dir(document.getElementsByClassName("heroImg")[1].src);
console.dir(document.getElementsByClassName("heroImg")[2].src);

//update

console.dir(document.getElementsByClassName("heroImg")[2].src="https://picsum.photos/700/350");