/** The Odin Project exercise :)
 * Coded by ercode1337
 * Pseudocode in README.md
*/


/** Choice variables */
const a = "rock";
const b = "paper";
const c = "scissors";

let playerChoose;
let playerScore = 0;
let computerScore = 0;

const result = document.getElementById('result');
const points = document.getElementById('points');
const newgame = document.getElementById('newgame');
const resultComp = document.getElementById('resultComp');
const resultPlayer = document.getElementById('resultPlayer');

/** Computer's function for random choice */
function getComputerChoice() {
    const playerChoice = [a, b, c]
    const output = playerChoice[Math.floor(Math.random()*playerChoice.length)]
    return output;
}

/** Game logics */
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
        return "Scissors beats paper. You Win!";
    } else {
        return "It's a draw!";
    }
    else {
        return "Something went wrong..."
    }
}

/** Paper rock scissors game loop start */
function game() {
        playerScore = 0;
        computerScore = 0;

        const roBtn = document.getElementById('roBtn');
        roBtn.addEventListener('click', function(){
        playerChoose = a;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerChoose, computerSelection);
        const points = `You: ${playerScore}, Computer: ${computerScore}`;
        result.innerText = roundResult; /** Individual rounds results */
        if (playerScore === 5 || computerScore === 5) {
            result.innerText = points; /** Individual rounds results */
        }
        if (playerScore === 5 || computerScore === 5) {
            document.getElementById("game-over").style.display = "block";
            document.getElementById("content").style.filter = "blur(5px)";
            newgame.innerText = 'Restart Game';
            resultComp.innerText = `Computer: ${computerScore}`;
            resultPlayer.innerText = `You: ${playerScore}`;
            newgame.addEventListener('click', function(){
                document.location.reload(true);
            });
            return;
        }
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    });
    roBtn.innerText = 'Rock';

    const paBtn = document.getElementById('paBtn');
    paBtn.addEventListener('click', function(){
        playerChoose = b;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerChoose, computerSelection);
        const points = `You: ${playerScore}, Computer: ${computerScore}`;
        result.innerText = roundResult; /** Individual rounds results */
        if (playerScore === 5 || computerScore === 5) {
            result.innerText = points; /** Individual rounds results */
        }
        if (playerScore === 5 || computerScore === 5) {
            document.getElementById("game-over").style.display = "block";
            document.getElementById("content").style.filter = "blur(5px)";
            newgame.innerText = 'Restart Game';
            resultComp.innerText = `Computer: ${computerScore}`;
            resultPlayer.innerText = `You: ${playerScore}`;
            newgame.addEventListener('click', function(){
                document.location.reload(true);
            });
            return;
        }
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    });
    paBtn.innerText = 'Paper';

    const scBtn = document.getElementById('scBtn');
    scBtn.addEventListener('click', function(){
        playerChoose = c;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerChoose, computerSelection);
        const points = `You: ${playerScore}, Computer: ${computerScore}`;
        result.innerText = roundResult; /** Individual rounds results */
        if (playerScore === 5 || computerScore === 5) {
            result.innerText = points; /** Individual rounds results */
        }
        if (playerScore === 5 || computerScore === 5) {
            document.getElementById("game-over").style.display = "block";
            document.getElementById("content").style.filter = "blur(5px)";
            newgame.innerText = 'Restart Game';
            resultComp.innerText = `Computer: ${computerScore}`;
            resultPlayer.innerText = `You: ${playerScore}`;
            newgame.addEventListener('click', function(){
                document.location.reload(true);
            });
            return;
        }
        if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    });
    scBtn.innerText = 'Scissors';


    
    /** Game results */
    if (playerScore === 5 || computerScore === 5) {
        const points = `You: ${playerScore}, Computer: ${computerScore}`;
        result.innerText = points; /** Individual rounds results */
    if (playerScore > computerScore) {
            result.innerText = "You won the game!";
        } else if (playerScore < computerScore) {
            result.innerText = "You lost the game!";
        } else {
            result.innerText = "It's a draw!";
        }
        return;
    }
}

/** end */
game();