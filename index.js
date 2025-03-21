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
    return randomNumber;
}

// The logic for Rock Paper Scissors.
function rpsLogic (humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

     let youWin = `You Win! ${humanChoice} beats ${computerChoice}!`;

     let youLose = `You lose! ${computerChoice} beats ${humanChoice}!`;

     let tie = `It's a tie! Reload the page to play again!`;

    //  the logic part, in order, Winning, Losing, and Tie.

     if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
        humanChoice === "PAPER" && computerChoice === "ROCK"){
            ++humanScore;
            console.log(youWin);
        } else if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
                humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
                humanChoice === "SCISSORS" && computerChoice === "ROCK") {
                    ++computerScore;
                    console.log(youLose);
        } else if (humanChoice === "ROCK" && computerChoice === "ROCK" ||
                   humanChoice === "PAPER" && computerChoice === "PAPER" ||
                   humanChoice === "SCISSORS" && computerChoice === "SCISSORS"){
                    console.log(tie);
                   }
}

// plays a single round of RPS.
function playRound(currentScore, played){
    played = `Your Oppenent played ${getComputerChoice()}`;
    currentScore = "The current score is Human:" + humanScore + " Computer:" + computerScore;

    
    rpsLogic();

    console.log(played);

    console.log(currentScore);
    
}

// plays a game, or 5 rounds of RPS.
function playGame(){

    for (let i = 0; i<= 5; i++){
        playRound(i);
    }
}
console.log(playGame());
