function multi(func,n){
    for(let i=0 ; i<n ; i++){
        func();
    }

}

    let greet = function(){
        console.log("hello");
    }

multi(greet ,5);
