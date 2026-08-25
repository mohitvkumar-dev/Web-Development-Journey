
function saveDB(data, ){
    return new Promise((resolve, reject)=>{
    let internateSpeed = Math.floor(Math.random()*10)+1;
     if(internateSpeed >4){
        resolve("success : data was saved");
     }else{
        reject("failure : weak connection");
     }
    });
    
}


saveDB("Mohit Kumar Paswan")
.then(()=>{
    console.log(" data 1 saved ");
   return saveDB("hello");  
})
.then(()=>{
    console.log("data 2 saved");
    return saveDB("Dont know");
}).then(()=>{
    console.log("data 3 saved ")
})
.catch(()=>{
    console.log("promise is rejected");
 
});