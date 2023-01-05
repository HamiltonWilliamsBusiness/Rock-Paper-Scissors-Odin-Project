//Global Variables
let playerChoice;
let computerSelection;
let aRandNum;
let playerWinCount = 0;
let compWinCount = 0;
let aTie = 0;

//Functions
function aGame(){
    console.log("Lets play rock paper scissors!");
    for (let i = 0; i < 5; i++) {
        console.log("This is Round " + (i + 1));
        getComputerChoice();
        getPlayerChoice();
        console.log(playRound(playerChoice, computerSelection));
        console.log('Your score is ' + playerWinCount);
        console.log('You chose ' + playerChoice);
        console.log("The computer's score is " + compWinCount);
        console.log("The computer chose " + computerSelection);
        console.log("This is the end of Round " + (i + 1));
     }

     if(playerWinCount > compWinCount){
        console.log("You win out of 5 rounds!");
     }
     else if(playerWinCount == compWinCount){
        console.log("You Tied out of 5 rounds!");
     }
     else{
        console.log("You lost out of 5 rounds!");
     }

}

function playRound(x,y) {
    if(playerChoice == 'rock'){
        switch(computerSelection){
            case 'rock':
                ++aTie;
                return 'You tied!';
                break;
            case 'paper':
                ++compWinCount;
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
                ++compWinCount;
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
    //Input Validation
    while(true){
        playerChoice = prompt('Type in "rock", "paper", or "scissors"!');
        playerChoice = playerChoice.toLowerCase();
        if(playerChoice == 'paper'){break;}
        if(playerChoice == 'scissors'){break;}
        if(playerChoice == 'rock'){break;}
        console.log('You typed in incorrect input! Please Type in "rock", "paper", or "scissors"!')
    }
    return playerChoice;
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