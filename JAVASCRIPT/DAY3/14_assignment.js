let arr=[1,2,3,4,5,6,2,3];
let num= 2;

for(let i =0 ; i<arr.length ; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
   
}
console.log(arr);


let number=287152;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy =Math.floor(copy/10);
}
console.log(count);


let number1=287152;
let copy1 = number1;
let sum=0;
while(copy1>0){
    digit= copy%10;
    sum= sum+digit;
    copy= Math.floor(copy1/10);
}
console.log(sum);


let n= 5;
for(let i=0 ; i<=5; i++){
    let fact= n*i;
}
console.log(`factorial of ${n} is ${fact}`);


let msg=[10,2,3,5,7,9,3];
let largest=0;
for(let i=0 ; i<msg.length; i++){
    if(msg[i]>largest){
        largest=msg[i];
    }
}
console.log(largest);