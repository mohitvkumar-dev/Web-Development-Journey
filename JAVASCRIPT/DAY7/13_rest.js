function sum(...arg){
return arg.reduce((add,el)=> add+el);
}

console.log(sum(1,2,3,4));