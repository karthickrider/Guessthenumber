
// let userInput=document.getElementById("input");
// let score=document.getElementById("simple");
// let success=document.getElementById("para");
// let count =10;

// function on(){
// for(let i=10;i<count.value;i--){
//     if(userInput == score){
//         success.innerHTML="success";

//     }
//     else if(userInput > score){
//         success.innerHTML="Value is high";
//     }
//     else if(userInput < score){
//         success.innerHTML="Value is low";
//     }
//     else {
//         success.innerHTML="Invalid Input";
//     }
    

// }
// score.innerHTML=Math.floor(Math.random()*100)+1;
  
// }



let btnGuess=document.getElementById("guess");

let input_box = document.getElementById("input-box");
let scoreValue = document.getElementById("scoreValue");
let indication = document.getElementById("indication");
let remaining=document.getElementById("remaining");

var random_num = Math.floor(Math.random() * 100) + 1;

var guessing = 1;

function on() {
    var userInput = Number(input_box.value);

    if (guessing <= 10) {
        if (userInput < random_num) {
            scoreValue.textContent = `Your Guess is:${userInput}` ;
            indication.textContent = "Value is Too Low";
            remaining.innerHTML="Used Chances :"+guessing++;
            
            input_box.value = '';
        }
        else if (userInput > random_num) {
            scoreValue.textContent = `Your Guess is: ${userInput}`;
            indication.textContent = "Value is Too High";
            remaining.innerHTML="Used Chances :"+guessing++;
            
            input_box.value = '';
        }
        else {
            scoreValue.textContent = `Your Guess is: ${userInput}`;
            indication.textContent = "Congratulations!Successfully Guessed the Value";
            remaining.innerHTML="Used Chances :"+guessing++;
            input_box.value = '';
            gameOver();
        }
    }
    else {
        scoreValue.textContent = userInput;
        indication.textContent = "Game is Over, your chances are over.";
        
        input_box.value = '';
        gameOver();
    }
}

function gameOver() {
    btnGuess.disabled = true;
    input_box.disabled = true;
}






