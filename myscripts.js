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

let roundNum = document.createElement('h2');
roundNum.textContent = `Round: ${roundCounter}`;
roundNum.classList.add("text");

let gameTitle = document.createElement('h1');
gameTitle.textContent = "ROCK PAPER SCISSORS";
gameTitle.classList.add("text");
gameTitle.classList.add("gameTitles");

let playerScore = document.createElement('h3');
playerScore.textContent = `Player Score: ${playerWinCount}`;
playerScore.classList.add("text");

let cpuScore = document.createElement('h3');
cpuScore.textContent = `Cpu Score: ${compWinCount}`;
cpuScore.classList.add("text");

let tieScore = document.createElement('h3');
tieScore.textContent = `Ties: ${aTie}`;
tieScore.classList.add("text");

let matchDisplay = document.createElement('h4');
matchDisplay.textContent = ``;
matchDisplay.classList.add("text");

let finalDisplay = document.createElement('h4');
finalDisplay.classList.add("text");

// Div allows flex box on scores
// let infoHolder = document.createElement('div');
// infoHolder.classList.add("infoHolder");
// infoHolder.appendChild(playerScore);
// infoHolder.appendChild(tieScore);
// infoHolder.appendChild(cpuScore);
// infoHolder.appendChild(matchDisplay);
// infoHolder.appendChild(finalDisplay);


// Button Creation
let rockBtn = document.createElement('BUTTON');
// rockBtn.textContent = "rock";
rockBtn.addEventListener('click', rock);
rockBtn.classList.add("button");

// Creating rock image
let rockImage = document.createElement('img');
rockImage.src = "images/rock.jpg";
rockBtn.appendChild(rockImage);


let paperBtn = document.createElement('BUTTON');
// paperBtn.textContent = "paper";
paperBtn.addEventListener('click', paper);
paperBtn.classList.add("button");

// Creating paper image
let paperImage = document.createElement('img');
paperImage.src = "images/paper.jpg";
paperBtn.appendChild(paperImage);


let scissorsBtn = document.createElement('BUTTON');
// scissorsBtn.textContent = "scissors";
scissorsBtn.addEventListener('click', scissors);
scissorsBtn.classList.add("button");

// Creating scissors image 
let scissorsImage = document.createElement('img');
scissorsImage.src = "images/scissors.jpg";
scissorsBtn.appendChild(scissorsImage);

// let buttonHolder = document.createElement('div');
// buttonHolder.classList.add("buttonHolder");
// buttonHolder.appendChild(rockBtn);
// buttonHolder.appendChild(paperBtn);
// buttonHolder.appendChild(scissorsBtn);

// container.append(buttonHolder);

// Div Holders
let upperHolder = document.createElement('div');
upperHolder.classList.add("upperHolder");
upperHolder.append(roundNum, gameTitle)
let middleHolder = document.createElement('div');
middleHolder.classList.add("middleHolder");
middleHolder.append(matchDisplay, finalDisplay);
let lowerHolder = document.createElement('div');
let firstHolder = document.createElement('div');
let secondHolder = document.createElement('div');
let thirdHolder = document.createElement('div');
lowerHolder.classList.add("lowerHolder");
firstHolder.classList.add("firstHolder");
secondHolder.classList.add("secondHolder");
thirdHolder.classList.add("thirdHolder");
firstHolder.append(playerScore, rockBtn);
secondHolder.append(tieScore, paperBtn);
thirdHolder.append(cpuScore, scissorsBtn)
lowerHolder.append(firstHolder, secondHolder, thirdHolder);
container.append(upperHolder, middleHolder, lowerHolder);

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

    playerScore.textContent = `Player Score: ${playerWinCount}`;

    cpuScore.textContent = `Cpu Score: ${compWinCount}`;

    tieScore.textContent = `Ties: ${aTie}`;

    matchDisplay.textContent = matchResult;


    if (roundCounter >= 5){
        if(playerWinCount > compWinCount) {
            finalDisplay.textContent = `You won!` + "\n Press a button to play again!";
        }
        else if(compWinCount > playerWinCount) {
            finalDisplay.textContent = `You lost!` + "\n Press a button to play again!";
        }
        else {
            finalDisplay.textContent = `You tied!` + "\n Press a button to play again!";
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