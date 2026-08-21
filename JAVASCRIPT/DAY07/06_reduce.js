// write in console

// [1,2,3,5,6].reduce((res,el)=>(res+el));

let nums=[2,4,5,3,6];

let max= nums.reduce((max,el) =>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});

console.log(max);