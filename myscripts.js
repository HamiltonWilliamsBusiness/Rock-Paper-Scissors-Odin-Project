//Global Variables
let playerChoice;
let computerSelection;
let aRandNum;
let playerWinCount = 0;
let compWinCount = 0;
let aTie = 0;

//Functions
function aGame(){
    console.log("Lets play rock paper scissors");
    getComputerChoice();
    getPlayerChoice();
    console.log(playRound(playerChoice, computerSelection));

    
}

function playRound(x,y) {
    if(playerChoice == 'rock'){
        switch(computerSelection){
            case 'rock':
                ++aTie;
                return 'You tied!';
                break;
            case 'paper':
                --playerWinCount;
                return 'You lost!';
                break; 
            case 'scissors':
                ++playerWinCount;
                return 'You won!';
                break; 
        }
    }
    if(playerChoice == 'paper'){
        switch(computerSelection){
            case 'paper':
                ++aTie;
                return 'You tied!';
                break;
            case 'scissors':
                --playerWinCount;
                return 'You lost!';
                break; 
            case 'rock':
                ++playerWinCount;
                return 'You won!';
                break; 
        }
    }
    if(playerChoice == 'scissors'){
        switch(computerSelection){
            case 'scissors':
                ++aTie;
                return 'You tied!';
                break;
            case 'rock':
                --playerWinCount;
                return 'You lost!';
                break; 
            case 'paper':
                ++playerWinCount;
                return 'You won!';
                break; 
        }
    }
}

function getPlayerChoice(){
    return playerChoice = prompt('Type in "rock", "paper", or "scissors"!');
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

aGame();