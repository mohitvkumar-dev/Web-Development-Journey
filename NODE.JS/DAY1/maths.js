// moduleexports sum = (a,b) => a+b;
// moduleexports mul = (a,b) => a*b;
// moduleexports g = 9.8;
// moduleexports PI = 3.14;

// let obj ={
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
// };

// module.exports = obj;
 
//or

//   module.exports ={
//        sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
//   } 

//or

module.exports.sum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;
module.exports.g = 9.8;
module.exports.PI = 3.14;