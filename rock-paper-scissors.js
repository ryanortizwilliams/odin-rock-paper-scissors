let playerScore = 0;
let computerScore = 0;

//DOM ELEMENTS
//Play area
const player = document.getElementById('player');
let playerIcon = player.querySelector(".choice-icon")

const computer = document.getElementById('computer');
let computerIcon = computer.querySelector(".choice-icon")

//Buttons
const rock = document.getElementById('rock');
rock.addEventListener('click', playRound.bind(null,'rock'));

const paper = document.getElementById('paper');
paper.addEventListener('click', playRound.bind(null,'paper'));

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', playRound.bind(null,'scissors'));


//functions for DOM manipulation
// TODO: create a function for removing an icon of player and replacing it with player choice

function replaceIcon(player, playerChoice) {
    
}

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

function playRound(playerChoice) {
    let computerSelection = getComputerChoice();
    //TODO: Change delete print, display player choice as choice icon
    console.log(`You chose ${playerChoice}`);
    //TODO: Display computer selection to computer's choice icon
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
            console.log('You lose!');
            playerScore++;
            break;
            case 'paper' : 
            console.log('You win!');
            break;
            case 'scissors' : 
            console.log('It\'s a draw, play again');
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

        playRound(playerChoice,computerSelection);
    }
}
//game();

// DOM manipulation 

