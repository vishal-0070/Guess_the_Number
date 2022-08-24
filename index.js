// Guess the number game
// Using javascript


let x = Math.floor((Math.random() * 100) + 1)
let a; 
var k=0
while(a!=x){
  a=prompt("Guess the number :")
  if (a>x){
    console.log("you have guess the larger number")
    ++k
    continue
  }
  else if(a<x){
    console.log("you have guess the smaller number")
    ++k
    continue
    
  } 
  else{
    console.log("correct guess",a)
  }
    
  }
let score = 100 - k; //To store the score of your game
console.log("\nCongratulations🥳🥳\nThe number generated was", x + " and you guessed it right😁\nYour final score is", score);

