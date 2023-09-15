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



function replaceIcon(playerID, choice) {
    //replaces the icon of the player or computer
    let id = document.getElementById(playerID);
    let selectedIcon = id.querySelector(".choice-icon");
    //remove current icon
    id.removeChild(selectedIcon)
    // create and append new icon
    let newIcon =document.createElement('div');
    newIcon.setAttribute('class', 'choice-icon');
    newIcon.textContent = `${choice}`
    id.appendChild(newIcon);
}

function getComputerChoice() {
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
    replaceIcon('player', playerChoice);
    //TODO: Display computer selection to computer's choice icon
    console.log(`Computer chooses ${computerSelection}`);
    replaceIcon('computer', computerSelection)
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
            computerScore++;
            break;
            case 'paper' : 
            console.log('You win!');
            playerScore++;
            break;
            case 'scissors' : 
            console.log('It\'s a draw, play again');
            break;
        }
    }
    console.log(`PLAYER SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
}