let humanScore = 0;

let computerScore = 0;

function getComputerChoice(rock, paper, scissors) {
    let randomGenerator = randomizer(0,2);
    rock = "Rock";
    paper = "Paper";
    scissors = "Scissors";

    if ( randomGenerator === 0) {
        return rock.toUpperCase();
    } else if (randomGenerator === 1){
        return paper.toUpperCase();
    } else if (randomGenerator === 2){
        return scissors.toUpperCase();
    }
}

function getHumanChoice (choice){
choice = prompt(`Please Choose your weapon!
    (Rock, Paper or Scissors)`);
    return choice.toUpperCase();
}

function randomizer (min, max){
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    let youWin = `You Win! ${humanChoice} beats ${computerChoice}!`;

    if (humanChoice === "rock" && computerChoice === "scissors"){

    }

    return computerChoice;
}

console.log(playRound());
// console.log(getHumanChoice());
// console.log(getComputerChoice());