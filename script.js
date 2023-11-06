const choices = ["Rock", "Paper", "Scissors"];

const btnRock = document.querySelector('.opt-rock');
const btnPaper = document.querySelector('.opt-paper');
const btnScissors = document.querySelector('opt-scissors');

btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

btnPaper.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

btnScissors.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})



function getComputerChoice() {
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function playRound(playerSelection, computerSelection) {
    const lowerCasePS = playerSelection.toLowerCase();
    const lowerCaseCS = computerSelection.toLowerCase();
    if (lowerCasePS === lowerCaseCS) {
        return "It's a Tie!";
    } else {
        const win = "You Win! "
        const lose = "You Lose! "
        const paperOnRock = "Paper beats Rock";
        const scissorOnPaper = "Scissors beat Paper";
        const rockOnScissor = "Rock beat Scissors";
        if (lowerCasePS === 'rock' && lowerCaseCS === 'paper') {
            return lose + paperOnRock;
        } else if (lowerCasePS ==='paper' && lowerCaseCS === 'rock') {
            return win + paperOnRock;
        } 
        
        else if (lowerCasePS === 'paper' && lowerCaseCS === 'scissors') {
            return lose + scissorOnPaper;
        } else if (lowerCasePS === 'scissors' && lowerCaseCS === 'paper') {
            return win + scissorOnPaper;
        } 
        
        else if (lowerCasePS === "scissors" && lowerCaseCS === 'rock') {
            return lose + rockOnScissor;
        } else {
            return win + rockOnScissor;
        }
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Your selection: ");
//         const computerSelection = getComputerChoice();
//         const winner = playRound(playerSelection, computerSelection);
//         winner.includes("You Win!") ? playerScore++ : computerScore++;
//     }

//     if (playerScore > computerScore) {
//         console.log("You Win!");
//     } else if (playerScore < computerScore) {
//         console.log('Computer Wins!')
//     } else {
//         console.log("Tie!");
//     }
// }

// game()