// function to get computer choice

function getComputerChoice() {
    //get random integer between 0 and 2
    let randomInteger = Math.floor(Math.random() * 3);
    switch (randomInteger){
        case 0 :
            return 'rock';
        case 1: 
            return 'paper';
        case 2 : 
            return 'scissors';
    }
}

let playerChoice = 'rock';
let computerSelection = getComputerChoice();

function playRound(playerChoice, computerSelection) {
    console.log(`You chose ${playerChoice}`);
    console.log(`Computer chooses ${computerSelection}`);
    if (playerChoice  === "rock") {
        switch(computerSelection){
            case 'rock' : 
            console.log('It\'s a draw, play again');
            break;
            case 'paper' : 
            console.log('You lose!');
            break;
            case 'scissors' : 
            console.log('You win!!!');
            break;
            
        }
    } else if (playerChoice === 'paper') {
        if (playerChoice  === "rock") {
            switch(computerSelection){
                case 'rock' : 
                console.log('You win!!');
                break;
                case 'paper' : 
                console.log('It\'s a draw, play again');
                break;
                case 'scissors' : 
                console.log('You lose');
                break;
                
            }
        }
    } else if (playerChoice === 'scissors') {
        switch(computerSelection){
            case 'rock' : 
            console.log('You win!!');
            break;
            case 'paper' : 
            console.log('It\'s a draw, play again');
            break;
            case 'scissors' : 
            console.log('You lose');
            break;
        }
    }
}

playRound(playerChoice,computerSelection);