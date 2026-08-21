let nums=[7,9,0,-2];
let n=3;
console.log(nums.slice(0,n));
let m=nums.length-n;
console.log(nums.slice(m));

let str="";
if(str.length===0){
    console.log("Blank");
}else{
    console.log("Not blank");
}


let str1="mohit";
let str2=str1.toLowerCase();
if(str1==str2){
    console.log("In LowerCase");
}else{
    console.log("Not in LowerCase");
}

let msg= prompt("enter");
console.log(`without change = ${msg}`);
console.log(`change = ${msg.trim()}`);



let arr=[65,'Mohit',90,4 ,56];
let item=4;

if(arr.indexOf(item)!=-1){
    console.log("exist");
}else{
    console.log("doen't");
}