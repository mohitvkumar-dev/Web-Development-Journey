let arr1 =[1,2,3];
let print = function(el){
    console.log(el);
};
arr1.forEach(print);


// or 

let arr =[1,2,3];
arr.forEach(function(el){
    console.log(el);
});
    
let arr2=[{
    name: "Mohit",
    cgpa: 9.7,
},
{
    name: "Aman",
    cgpa:9,
}];

arr2.forEach((students) =>{
    console.log(students);
    console.log(students.cgpa);

})