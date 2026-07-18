let favMovie="moxi";
let guess= prompt("guess my favMovie");

while((guess!=favMovie)&&(guess!='quit')){

    guess = prompt("wrong guess: please try again ");
}
if(guess==favMovie){
    console.log("Congratulations")
}else{
    console.log("you Quited");
}