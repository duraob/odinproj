/* FUNCTIONS - GAMEPLAY */
function computerPlay() {
    let options = ["ROCK", "PAPER", "SCISSORS"]
    rand = Math.floor(Math.random() * options.length);
    return options[rand];
}

function playRound(playerThrow,computerThrow) {
    console.log("COMPUTER THROWS: " + computerThrow + "\n" + "PLAYER THROWS: " + playerThrow);

    if(playerThrow == "ROCK" && computerThrow == "SCISSORS") {
        return "Round won!";
    } else if(playerThrow == "ROCK" && computerThrow == "PAPER") {
        return "Round lost.";
    } else if(playerThrow == "SCISSORS" && computerThrow == "PAPER") {
        return "Round won!";
    } else if(playerThrow == "SCISSORS" && computerThrow == "ROCK") {
        return "Round lost.";
    } else if(playerThrow == "PAPER" && computerThrow == "ROCK") {
        return "Round won!";
    } else if(playerThrow == "PAPER" && computerThrow == "SCISSORS") {
        return "Round lost.";
    } else {
        return "Tie";
    }
}

function endGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        end.textContent = "PLAYER WINS!";
    } else if (playerScore < computerScore) {
        end.textContent = "COMPUTER WINS!";
    } else {
        end.textContent = "ITS A TIE!";
    }

    results.appendChild(end);
}

/* VARIABLES FOR SETUP AND PLAY */
let playerSelection;
let computerSelection;
let matchResult;
let playerScore = 0;
let computerScore = 0;
let gameRound = 1;
let roundLimit = 6;
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const match = document.createElement('div');
match.setAttribute('id', 'match');
match.style.justifySelf = 'center';
match.style.alignSelf = 'center';
const score = document.createElement('div');
score.setAttribute('id', 'score');
score.style.justifySelf = 'center';
score.style.alignSelf = 'center';
const end = document.createElement('div');
end.setAttribute('id', 'endGame');
end.style.justifySelf = 'center';
end.style.alignSelf = 'center';

/* EVENTS */
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = (button.id);
        computerSelection = computerPlay();
        matchResult = playRound(playerSelection, computerSelection);

        if (document.getElementById("endGame")) { //resets game if not the first in session
            results.removeChild(end);
            results.removeChild(match);
            playerScore = 0;
            computerScore = 0;
        }

        match.textContent = matchResult;
        results.appendChild(match);

        if(matchResult == "Round won!") {
            playerScore++;
            
        } 
        if (matchResult == "Round lost.") {
            computerScore++;
        }

        score.textContent = "Round: " + String(gameRound) + " | " + "Player: " + playerScore + " | " + "Computer: " + computerScore;
        results.appendChild(score);
        gameRound++;
        if(gameRound >= roundLimit) {
            endGame(playerScore, computerScore);
            gameRound = 1;
        }
    });
});