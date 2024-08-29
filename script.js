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

computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
    prompt("say rock paper or scissors on 3: 1 2 3:")
    
}
