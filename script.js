// console.log("testiiiing!");

function getComputerChoice() {

    const computerNumber = Math.floor( Math.random() * 3) + 1;
    
    switch (computerNumber) {
        case 1: 
            return "rock";
            break; 
        case 2: 
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
        default:
            console.log("Sorry the random number generator (" + computerNumber + ") or the computer selection does not seem to be working");
    }
}

// let computerChoice = getComputerChoice();
// console.log("Computer: "+computerChoice);

function getHumanChoice() {
    
    let humanChoice = prompt("do you choose rock paper or scissors?", "");
    
    let feedback = ( humanChoice.toLowerCase() === "rock" | humanChoice.toLowerCase() === "paper" | humanChoice.toLowerCase() === "scissors") ? "thanks you chose: "+humanChoice : "sorry that's not a valid weapon. please try again";
    
    alert(feedback);

    return humanChoice;
}

// let humanChoice = getHumanChoice();
// console.log("Human: "+humanChoice);

const play = document.querySelector(".start");
let counterComputer;
let counterHuman; 
let winner;

function playGame() {
    

    const Computer = getComputerChoice();
    const Human = getHumanChoice();
    

winner = counterHuman >= 5 ? "human" : ( counterComputer >= 5 ? "computer" : "");

    if (counterComputer < 5 && counterHuman < 5) 
        normal process


    else alert("game over: "+if counterComputer=5, "computer"  
}

play.addEventListener("click",playGame);
