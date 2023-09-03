let playerScore = 0;
let computerScore = 0;

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
            computerScore++
            break;
            case 'scissors' : 
            console.log('You win!!!');
            playerScore++
            break;
        }
    } else if (playerChoice === 'paper') {
        if (playerChoice  === "rock") {
            switch(computerSelection){
                case 'rock' : 
                console.log('You win!!');
                playerScore++;
                break;
                case 'paper' : 
                console.log('It\'s a draw, play again');
                break;
                case 'scissors' : 
                console.log('You lose');
                computerScore++;
                break;
                
            }
        }
    } else if (playerChoice === 'scissors') {
        switch(computerSelection){
            case 'rock' : 
            console.log('You win!!');
            playerScore++;
            break;
            case 'paper' : 
            console.log('It\'s a draw, play again');
            break;
            case 'scissors' : 
            console.log('You lose');
            computerScore++;
            break;
        }
    }
    console.log(`PLAYER SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`ROUND ${i}:`)
        let playerChoice = prompt('Choose rock, paper or scissors!');
let computerSelection = getComputerChoice();
        playRound(playerChoice,computerSelection);
    }
}
game();