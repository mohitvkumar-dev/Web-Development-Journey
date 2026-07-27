let nums=[10,4,56,8];

let min = nums.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
 
console.log(min);