let UserScore = 0;
let CompScore = 0;

const choices = ["Stone", "Paper","Scissor"];

const Stone = document.getElementById("stone");
const Paper = document.getElementById("paper");
const Scissor = document.getElementById("scissor");

const CompFinalScore = document.getElementById("comp");
const UserFinalScore = document.getElementById("you");
const FinalMessage = document.querySelector(".mess p")

Stone.addEventListener("click", ()=> playGame("Stone"))
Paper.addEventListener("click", ()=> playGame("Paper"))
Scissor.addEventListener("click", ()=> playGame("Scissor"))

function playGame(userChoice){
    const compChoice = choices[Math.floor(Math.random()*choices.length)];

    if (userChoice===compChoice) {
        FinalMessage.innerText = "It's a Draw"
        return;        
    }

    const userWins = 
    (userChoice=="Stone" && compChoice=="Scissor")||
    (userChoice=="Paper" && compChoice=="Stone")||
    (userChoice=="Scissor" && compChoice=="Paper");
     
    if(userWins){
        UserScore++
        UserFinalScore.innerText = UserScore;
        FinalMessage.innerText = `"Congrats!! YOU WON ${userChoice} beats ${compChoice}"`
    } else{
        CompScore++
        CompFinalScore.innerText = CompScore;
        FinalMessage.innerText = `"YOU LOSE ${compChoice} beats ${userChoice}"`
    }
}