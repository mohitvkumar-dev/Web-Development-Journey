function outer(){
    let x=4;
    let y=5;
    function inner(){
        console.log(x);
    }

    inner();
}
console.log(outer());