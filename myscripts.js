//Global Variables
let playerChoice;
let computerSelection;
let aRandNum;
let playerWinCount = 0;
let compWinCount = 0;
let aTie = 0;
let roundCounter = 0;
let matchResult;

const container = document.querySelector('#holder');

// Result Showing Div Creation

let gameTitle = document.createElement('h1');
gameTitle.textContent = "ROCK PAPER SCISSORS";
gameTitle.classList.add("text");

let roundNum = document.createElement('h2');
roundNum.textContent = `Round ${roundCounter}`;
roundNum.classList.add("text");

let playerScore = document.createElement('h3');
playerScore.textContent = `Player Win Count: ${playerWinCount}`;
playerScore.classList.add("text");

let cpuScore = document.createElement('h3');
cpuScore.textContent = `Computer Win Count: ${compWinCount}`;
cpuScore.classList.add("text");

let tieScore = document.createElement('h3');
tieScore.textContent = `Number of Ties: ${aTie}`;
tieScore.classList.add("text");

let matchDisplay = document.createElement('h4');
matchDisplay.textContent = ``;
matchDisplay.classList.add("text");

let finalDisplay = document.createElement('h4');
finalDisplay.classList.add("text");



container.append(gameTitle, roundNum, playerScore, cpuScore, tieScore, matchDisplay, finalDisplay);


// Button Creation
let rockBtn = document.createElement('BUTTON');
rockBtn.textContent = "rock";
rockBtn.addEventListener('click', rock);


let paperBtn = document.createElement('BUTTON');
paperBtn.textContent = "paper";
paperBtn.addEventListener('click', paper);


let scissorsBtn = document.createElement('BUTTON');
scissorsBtn.textContent = "scissors";
scissorsBtn.addEventListener('click', scissors);

container.append(rockBtn, paperBtn, scissorsBtn);

// Button Function Creation

function rock() {
    // alert("You pressed rock");
    playerChoice = 'rock';
    matchResult = playRound(getComputerChoice(), 'rock')
    printMatchResult()
    gameReset()
}

function paper() {
    // alert("You pressed paper");
    playerChoice = 'paper';
    matchResult = playRound(getComputerChoice(), 'paper')
    printMatchResult()
    gameReset()
}

function scissors() {
    // alert("You pressed scissors");
    playerChoice = 'scissors';
    matchResult = playRound(getComputerChoice(), 'scissors')
    printMatchResult()
    gameReset()
}


//Functions
// function aGame(){
//     console.log("Lets play rock paper scissors!");
//     for (let i = 0; i < 5; i++) {
//         console.log("This is Round " + (i + 1));
//         getComputerChoice();
//         getPlayerChoice();
//         console.log(playRound(playerChoice, computerSelection));
        // console.log('Your score is ' + playerWinCount);
        // console.log('You chose ' + playerChoice);
        // console.log("The computer's score is " + compWinCount);
        // console.log("The computer chose " + computerSelection);
        // console.log("This is the end of Round " + (i + 1));
//      }
//      console.log("Number of ties " + aTie);

//      if(playerWinCount > compWinCount){
//         console.log("You win out of 5 rounds!");
//      }
//      else if(playerWinCount == compWinCount){
//         console.log("You Tied out of 5 rounds!");
//      }
//      else{
//         console.log("You lost out of 5 rounds!");
//      }

// }

function gameReset(){

    if (roundCounter == 1) {
        finalDisplay.textContent = ``;
    }
    if (roundCounter >= 5){
        console.log("The game is complete!" + roundCounter + "\n press a rock/paper/scissors button to play again");
        // Resetting Game Values to 0
        playerWinCount = 0;
        compWinCount = 0;
        aTie = 0;
        roundCounter = 0;
    }
}

function playRound(cpuSelection, playerSelection) {
    if(playerSelection == 'rock'){
        switch(cpuSelection){
            case 'rock':
                ++aTie;
                return 'You tied this round!';
                break;
            case 'paper':
                ++compWinCount;
                return 'You lost this round!';
                break; 
            case 'scissors':
                ++playerWinCount;
                return 'You won this round!';
                break; 
        }
    }
    if(playerSelection == 'paper'){
        switch(cpuSelection){
            case 'paper':
                ++aTie;
                return 'You tied this round!';
                break;
            case 'scissors':
                ++compWinCount;
                return 'You lost this round!';
                break; 
            case 'rock':
                ++playerWinCount;
                return 'You won this round!';
                break; 
        }
    }
    if(playerSelection == 'scissors'){
        switch(cpuSelection){
            case 'scissors':
                ++aTie;
                return 'You tied this round!';
                break;
            case 'rock':
                ++compWinCount;
                return 'You lost this round!';
                break; 
            case 'paper':
                ++playerWinCount;
                return 'You won this round!';
                break; 
        }
    }
}

function printMatchResult(){
    // console.log(matchResult)
    // console.log('Your score is ' + playerWinCount);
    // console.log('You chose ' + playerChoice);
    // console.log("The computer's score is " + compWinCount);
    // console.log("The computer chose " + computerSelection);
    // console.log("This is the end of Round " + (++roundCounter));


    roundNum.textContent = `Round ${++roundCounter}`;

    playerScore.textContent = `Player Win Count: ${playerWinCount}`;

    cpuScore.textContent = `Computer Win Count: ${compWinCount}`;

    tieScore.textContent = `Number of Ties: ${aTie}`;

    matchDisplay.textContent = matchResult;


    if (roundCounter >= 5){
        if(playerWinCount > compWinCount) {
            finalDisplay.textContent = `You beat the cpu within five rounds, congratulations!` + "\n Press a rock/paper/scissors button to play again!";
        }
        else if(compWinCount > playerWinCount) {
            finalDisplay.textContent = `You lost to the cpu within five rounds, try again next time!` + "\n Press a rock/paper/scissors button to play again!";
        }
        else {
            finalDisplay.textContent = `You tied to the cpu within five rounds, not bad!` + "\n Press a rock/paper/scissors button to play again!";
        }
        
    }
    
}

function getComputerChoice(){
    //Creates a random integer from 0 to 2
    aRandNum = Math.floor(Math.random()* 3); 
    //Selects Rock Paper or Scissors 
    switch(aRandNum){
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
    }

    return computerSelection;
}

// aGame();