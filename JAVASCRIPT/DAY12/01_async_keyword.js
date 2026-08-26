 async function greet(){
    // throw "404 page not found";
    return "hello";
}

greet()
.then((result)=>{
   console.log("promise was resolved");
   console.log("result was : ", result);

})
.catch((err)=>{
    console.log("promise was rejected with error", err);
});


// or

let demo = async ()=>{
    return 5;
};