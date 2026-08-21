
let str=["Mohit","Kumar","Paswan"];

function con(str){
    let res="";
    for(let i=0; i<str.length; i++){
        res= res+str[i];
    }
    return res;

}

console.log(con(str));