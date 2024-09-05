let choice = "";

console.log("test");
console.log("test: " + choice);

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

// function getHumanChoice() {
//     let humanChoice = prompt("do you choose rock paper or scissors?", "");
//     let feedback = ( humanChoice.toLowerCase() === "rock" | humanChoice.toLowerCase() === "paper" | humanChoice.toLowerCase() === "scissors") ? "thanks you chose: "+humanChoice : "sorry that's not a valid weapon. please try again";
//     alert(feedback);
//     return humanChoice;
// }

// ADD BUTTONS

// const rockButton = document.querySelector("#rockButton");
// rockButton.classList.add("weapon");
// rockButton.id="rockButton";
// rockButton.textContent="ROCK";
// rockButton.setAttribute("style: background=blue");
// const paperButton = document.querySelector("#paperButton");
// paperButton.classList.add("weapon");
// paperButton.id="paperButton";
// paperButton.textContent="PAPER";

// const scissorsButton = document.querySelector("#scissorsButton");
// scissorsButton.classList.add("weapon");
// scissorsButton.id="scissorsButton";
// scissorsButton.textContent="SCISSORS";

// const gameButtons = document.querySelector(".gameButtons");
// gameButtons.appendChild(rockButton);
// gameButtons.appendChild(paperButton);
// gameButtons.appendChild(scissorsButton);

// rockButton.addEventListener("click", e => {
//     // if (Event.target.id = "rockButton") {
//     console.log(e.target.textContent.toLowerCase());
//     humanChoice = e.target.textContent.toLowerCase();
//     playMatch(humanChoice);
//     // }
// });

// paperButton.addEventListener("click", Event => {
//     console.log(Event);
//     humanChoice = e.target.textContent.toLowerCase();
//     playMatch(humanChoice);
// });

// scissorsButton.addEventListener("click", Event => {
//     console.log(Event);
//     humanChoice = e.target.textContent.toLowerCase();
//     playMatch(humanChoice);
// });

// weapon.addEventListener("click", (e) => {
//     console.log(e);     
// });
// let target = Event.target;

//     switch(e.target) {
//         case '#rockButton':
//             console.log('Human selected rock');
//             break;
//         case '#paperButton':
//             console.log('Human selected paper');
//             break;
//         case '#scissorsButton':
//             console.log('Human selected scissors');
//             break;
//     }
// });

// let humanChoice = getHumanChoice();
// console.log("Human: "+humanChoice);
// const playButton = document.querySelector(".startButton");
const gameTally = document.querySelector(".gameTally");

let counterComputer = 0;
let counterHuman = 0;
let counterTies = 0;
let battleWinner = "no one";

function playGame() {
    
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const humanChoice = choice; //e.target.textContent.toLowerCase(); 
    // console.log(humanChoice);

    if (humanChoice === "rock" | humanChoice === "paper" | humanChoice === "scissors") {
        if ( (computerChoice === "rock" && humanChoice === "scissors") | (computerChoice === "scissors" && humanChoice === "paper") | (computerChoice === "paper" && humanChoice === "rock")) {
            battleWinner = "computer" ;
        }   else if ( (computerChoice === "rock" && humanChoice === "paper") | (computerChoice === "scissors" && humanChoice === "rock") | (computerChoice === "paper" && humanChoice === "scissors") ) { 
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

        const newLine = document.createElement("p");

        newLine.textContent = "Human: " + humanChoice + "; Computer: " + computerChoice + " => " + battleWinner + " wins the battle. The score is now " + counterHuman + " - " + counterComputer + "." ;

        if (counterComputer >= 5) {
            newLine.textContent = newLine.textContent + " Computer wins the war."
        }   else if (counterHuman >= 5) {
            newLine.textContent = newLine.textContent + " Human wins the war."
        }   else {
            newLine.textContent = newLine.textContent + " The war continues."
        }

        gameTally.insertBefore(newLine, gameTally.firstChild);
            
        if (counterComputer >= 5) {
            alert("The computer won. Better luck next time. Play again?");
        }   else if (counterHuman >= 5) {
            alert("Congratulations, you won! It was never in doubt. Play again?");
        }   
    } else {
        choice = "";
        return "ERROR";
    }

    choice = "";
}

function startAgain() {
    while (gameTally.firstChild) {
        gameTally.removeChild(gameTally.firstChild);
    }
    counterComputer = 0;
    counterHuman = 0;
    playGame();
    }

function playMatch() {
    if (counterComputer>=5 | counterHuman >=5) {
        startAgain();
    }   else {
        playGame();
    }
}

rockButton.addEventListener("click", function(e) {
    console.log(e);
    choice = e.target.textContent.toLowerCase();
    console.log(choice);
    playMatch();
});

paperButton.addEventListener("click", function(e) {
    console.log(e);
    choice = e.target.textContent.toLowerCase();
    console.log(choice);
    playMatch();
});

scissorsButton.addEventListener("click", function(e) {
    console.log(e);
    choice = e.target.textContent.toLowerCase();
    console.log(choice);
    playMatch();
});