const a = "rock";
const b = "paper";
const c = "scissors";

function getComputerChoice() {
    const playerChoice = [a, b, c]
    const output = playerChoice[Math.floor(Math.random()*playerChoice.length)]
    return output;
}

function playRound(playerSelection
    , computerSelection) {
    const playerChoice = [a, b, c]
    if (playerChoice.includes(playerSelection))

    if (playerSelection === a && computerSelection === b) {
        return "Paper beats rock. You lose!";
    } else if (playerSelection === a && computerSelection === c) {
        return "Rock beats scissors. You win!";
    } else if (playerSelection === b && computerSelection === a) {
        return "Paper beats rock. You win!";
    } else if (playerSelection === b && computerSelection === c) {
        return "Scissors beats paper. You lose!";
    } else if (playerSelection === c && computerSelection === a) {
        return "Rock beats scissors. You lose!";
    } else if (playerSelection === c && computerSelection === b) {
        return "Scissors beats paper. You win!";
    } else {
        return "It's a draw!";
    }
    else {
        return "Something went wrong..."
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoose = prompt("Rock, Paper or Scissors?:");
        const playerSelection = playerChoose
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        const points = `You: ${playerScore}, Computer: ${computerScore}`;
        console.log(roundResult, points);
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }
    console.log(`You: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a draw!");
    }
    return;
}

game();