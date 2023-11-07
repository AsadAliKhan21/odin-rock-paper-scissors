"use strict";

const btnRock = document.querySelector(".opt-rock");
const btnPaper = document.querySelector(".opt-paper");
const btnScissors = document.querySelector(".opt-scissors");

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice());
    game();
});

btnPaper.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice());
    game();
});

btnScissors.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice());
    game();
});

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function playRound(playerSelection, computerSelection) {
    const roundWinner = document.querySelector(".round-winner");

    if (playerSelection === computerSelection) {
        roundWinner.textContent = "It's a Tie!";
        updateRoundInfo("");
        updateCurrentOpt(playerSelection, computerSelection);
        return;
    }

    const win = "You Win!";
    const lose = "You Lose!";
    const paperOnRock = "Paper beats Rock";
    const scissorsOnPaper = "Scissors beat Paper";
    const rockOnScissor = "Rock beat Scissors";

    updateCurrentOpt(playerSelection, computerSelection);

    switch (playerSelection + "-" + computerSelection) {
        case "ROCK-PAPER":
            roundWinner.textContent = lose;
            updateRoundInfo(paperOnRock);
            break;
        case "PAPER-ROCK":
            roundWinner.textContent = win;
            updateRoundInfo(paperOnRock);
            break;
        case "PAPER-SCISSORS":
            roundWinner.textContent = lose;
            updateRoundInfo(scissorsOnPaper);
            break;
        case "SCISSORS-PAPER":
            roundWinner.textContent = win;
            updateRoundInfo(scissorsOnPaper);
            break;
        case "SCISSORS-ROCK":
            roundWinner.textContent = lose;
            updateRoundInfo(rockOnScissor);
            break;
        case "ROCK-SCISSORS":
            roundWinner.textContent = win;
            updateRoundInfo(rockOnScissor);
            break;
        default:
            break;
    }

    updateScore(roundWinner);
}

function updateScore(roundWinner) {
    roundWinner = roundWinner.textContent;
    if (roundWinner.includes("Win")) {
        const plScoreEl = document.querySelector("#plScore");
        playerScore++;
        plScoreEl.textContent = playerScore;
    } else if (roundWinner.includes("Lose")) {
        const compScoreEl = document.querySelector("#compScore");
        computerScore++;
        compScoreEl.textContent = computerScore;
    }
}

function updateRoundInfo(infoText) {
    const roundInfo = document.querySelector(".round-info");
    roundInfo.textContent = infoText;
}

function updateCurrentOpt(playerSelection, computerSelection) {
    const plCurrentOpt = document.querySelector(".pl-current-opt");
    const compCurrentOpt = document.querySelector(".comp-current-opt");

    plCurrentOpt.textContent =
        playerSelection === "ROCK"
            ? "✊"
            : playerSelection === "PAPER"
            ? "✋"
            : "✌";
    compCurrentOpt.textContent =
        computerSelection === "ROCK"
            ? "✊"
            : computerSelection === "PAPER"
            ? "✋"
            : "✌";
}

function gameOver() {
    const modalWindow = document.querySelector(".modal-window");
    const modalText = document.querySelector(".modal-text");
    if (playerScore === 5) {
        openModal();
        modalText.textContent = "You Won!";
        modalWindow.style.backgroundColor = "green";
        return true;
    } else if (computerScore === 5) {
        openModal();
        modalText.textContent = "You Lost!";
        modalWindow.style.backgroundColor = "darkred";
        return true;
    } else {
        return false;
    }
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("hidden");
}

function openModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("hidden");
}

function restart() {
    closeModal();
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".round-winner").textContent = "";
    updateRoundInfo("");
    document.querySelector("#plScore").textContent = "0";
    document.querySelector("#compScore").textContent = "0";
}

function game() {
    if (!gameOver()) {
        return;
    }

    const tryAgain = document.querySelector(".try-again");
    tryAgain.addEventListener("click", restart);
}
