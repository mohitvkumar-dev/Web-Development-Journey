

let nums=[1,2,3,4,5];
let sqr=nums.map((num)=> num*num);
console.log(sqr);


let sum = sqr.reduce((acc,cur)=> acc+cur,0);
let avg = sum/nums.length;
console.log(avg);

// question no:3
let arr=[2,4,5,6,7];
console.log(arr.map((el)=> el+5));

// question no:4
let str=["adam","mohit","rahul"];
console.log(str.map((char)=>char.toUpperCase()));


// question no:5
const mergObj=(obj1,obj2)=>({...obj1,obj2});
mergObj({a:1,b:2},{c:3,d:4});

