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
const gameTally = document.querySelector(".game-tally");
const newLine = document.createElement("p");

let counterComputer;
let counterHuman;
let counterTies;
let battleWinner;
let warWinner;

function playGame() {
    
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if ( (computerChoice = "rock" && humanChoice = "scissors") | (computerChoice = "scissors" && humanChoice = "paper") | (computerChoice = "paper" && humanChoice = "rock")) {
        battleWinner = "computer" ;
    }   else if ( (computerChoice = "rock" && humanChoice = "paper") | (computerChoice = "scissors" && humanChoice = "rock") | (computerChoice = "paper" && humanChoice = "scissors") ) { 
        battleWinner = "human" ; 
    }   else {
        battleWinner = "no one";
    }

    console.log("battlewinner: " + battleWinner);

    if (battleWinner === "computer") {
        counterComputer += 1;
    }   else if (battleWinner === "human") {
            counterHuman += 1;
    }   else {
        counterTies += 1;
    }

    newLine.textContent = "Human: " + humanChoice + "; Computer: " + computerChoice + " => " + battleWinner + " wins the battle. The score is now " + counterHuman + " - " + counterComputer + "." ;

    if (counterComputer >= 5) {
        newLine.textContent = newLine.textContent + " Computer wins the war."
    }   else if (counterHuman >= 5) {
        newLine.textContent = newLine.textContent + "Human wins the war."
    }   else {
        newLine.textContent = newLine.textContent + "The war continues."
    }

    gameTally.appendChild(NewLine);
            
    if (counterComputer >= 5) {
        alert("The computer won. Better luck next time. Play again?"
    }   else if (counterHuman >= 5) {
        alert("Congratulations, you won! It was never in doubt. Play again?"
    }   

}

function startAgain() {
    gameTally.removeChild("p");
    counterComputer = 0;
    counterHuman = 0;
    playGame();
}

function playMatch() {
    if (counterComputer>=5 | counterHuman >=5) : startAgain : playGame ;
}

play.addEventListener("click",playMatch);
