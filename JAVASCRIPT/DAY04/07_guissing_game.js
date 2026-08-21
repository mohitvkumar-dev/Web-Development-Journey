let max= prompt("enter the maximum number");


const  random = Math.floor(Math.random()*max)+1;    
let guess = prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("you are right!  Congratulations!!.")
        break;
    }else if(guess < random){
        guess = prompt("your guess was too small");
    }else{
        guess = prompt("your guess was too large" );
    }
    

}