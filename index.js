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

function rpsLogic (humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

     let youWin = `You Win! ${humanChoice} beats ${computerChoice}!`;

     let youLose = `You lose! ${computerChoice} beats ${humanChoice}!`;

     let tie = `It's a tie! Reload the page to play again!`;

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
    // if (humanChoice === "ROCK" && computerChoice === "SCISSORS"){
    //     humanScore++;
    //     console.log(youWin);
    // } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER"){
    //     humanScore++;
    //     console.log(youWin);
    // } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
    //     humanScore++;
    //     return console.log(youWin);
    // } else if (humanChoice === "PAPER" && computerChoice === "SCiSSORS"){
    //     computerScore++;
    //     return console.log(youLose);
    // } else if (humanChoice === "ROCK" && computerChoice === "PAPER"){
    //     computerScore++;
    //     return console.log(youLose);
    // } else if (humanChoice === "SCISSORS" && computerChoice === "ROCK"){
    //     computerScore++;
    //     return console.log(youLose);
    // } else if (humanChoice === "ROCK" && computerChoice === "ROCK"){
    //     return console.log(tie);
    // } else if (humanChoice === "PAPER" && computerChoice === "PAPER"){
    //     return console.log(tie);
    // } else if (humanChoice === "SCISSORS" && computerChoice === "SCISSORS") {
    //     return console.log(tie);
    // }
}

// function humanWin(humanChoice, computerChoice, win) {
//     win = `you win! ${getHumanChoice()} beats ${getComputerChoice}!`
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice()

//     if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
//         humanChoice === "SCISSORS" && computerChoice === "PAPER" ||
//         humanChoice === "PAPER" && computerChoice === "ROCK") {
//             humanScore++;
//         }
//         return console.log(win);
// }

// function youLose (lose){
//     lose = `You lose! ${computerChoice} beats ${humanChoice}!`;

//     if (getHumanChoice() === "ROCK" && getComputerChoice() === "PAPER" ||
//         getHumanChoice() === "PAPER" && getComputerChoice() === "SCISSORS" ||
//         getHumanChoice() === "SCISSORS" && getComputerChoice() === "ROCK"){
//             computerScore++;
//             return console.log(lose);
//     }
// }

// function tied (tie){
//     tie = `It's a tie! Reload the page to play again!`;

//     if (getHumanChoice() === "ROCK" && getComputerChoice() === "ROCK" ||
//         getHumanChoice() === "PAPER" && getComputerChoice() === "PAPER" ||
//         getHumanChoice() === "SCISSORS" && getComputerChoice() === "SCISSORS"){
//             return console.log(tie);
//         }
// }

function playRound(currentScore, played){
    played = `Your Oppenent played ${getComputerChoice()}`;
    currentScore = "The current score is Human:" + humanScore + " Computer:" + computerScore;

    
    rpsLogic();

    console.log(played);

    console.log(currentScore);
    
}

function playGame(){

    for (let i = 0; i<= 5; i++){
        playRound(i);
    }
}
console.log(playGame());
// console.log(playGame());
// console.log("The current score is Human:" + humanScore + " Computer:" + computerScore);