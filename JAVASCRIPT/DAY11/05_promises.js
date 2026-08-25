
// function saveDB(data, success, failure){
//     let internateSpeed = Math.floor(Math.random()*10)+1;
//     if(internateSpeed>4){
//         success();
  
//     }else{
//        failure();
//     }
    
// }

saveDB("Mohit",()=>{
  console.log(" success : your data was saved");
  saveDB("Hello! " ,()=>{
    console.log("success 2 : data2 saved");
  }, ()=>{
    console.log("failure 2 : weak connection 2");
  });
},()=>{
  console.log(" failure :weak connection . your data is not saved");
});




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

