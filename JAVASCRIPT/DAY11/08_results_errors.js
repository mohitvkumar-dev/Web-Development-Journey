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
.then((result)=>{
    console.log(" data 1 saved ");
    console.log("result of promise : ",result);
   return saveDB("hello");  
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promise : ",result);
    return saveDB("Dont know");
}).then((result)=>{
    console.log("data 3 saved ")
    console.log("result of promise : ",result);
})
.catch((error)=>{
    console.log("promise is rejected");
    console.log("error of promise : ",error);
 
});