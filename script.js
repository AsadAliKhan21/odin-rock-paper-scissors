const choices = ["Rock", "Paper", "Scissors"];


function getComputerChoice(choices) {
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}