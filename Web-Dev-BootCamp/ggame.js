alert("Your guess wizard journey is here")

var guess = prompt("Guess a number");
var secretnum = 4;

if(Number(guess)===secretnum){
    alert("Young Wizard !! You Guessed It Right");
}else if(Number(guess) > secretnum){
    alert("Ooops Too large!! Refresh and try again");
}else if(Number(guess) < secretnum){
    alert("Ooops Too Small!! Refresh and try again");   
} else{
    alert("What did you just type?")
}
