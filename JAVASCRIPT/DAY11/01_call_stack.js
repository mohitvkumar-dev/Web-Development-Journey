function hello(){
    console.log("inside hello fxn");
    console.log("hello");

}
function demo(){
    console.log("calling hello fxn"); 
    hello();
}

console.log("calling demo fxn");
demo();

console.log("done");