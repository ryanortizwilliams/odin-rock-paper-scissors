let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector(".score-container");
scoreBoard.addEventListener('click', () => alert('test'));

// DOM ELEMENTS
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


function updateResult(result) {
    const scoreBoard = document.querySelector(".score-container");
    let oldResult = scoreBoard.querySelector(".result");
    scoreBoard.removeChild(oldResult);
    let newResult = document.createElement('div');
    newResult.setAttribute('class', 'result');
    if (result === 'win' || result === 'lose') {
        newResult.textContent = `You ${result}`
    } else {
        newResult.textContent = `I's a ${result}`
    }
    scoreBoard.appendChild(newResult)
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
    console.log(`You chose ${playerChoice}`);
    replaceIcon('player', playerChoice);
    console.log(`Computer chooses ${computerSelection}`);
    replaceIcon('computer', computerSelection)
    //TODO: Update score container 
    if (playerChoice  === "rock") {
        switch(computerSelection){
            case 'rock' : 
            console.log('It\'s a draw, play again');
            updateResult('draw')
            break;
            case 'paper' : 
            console.log('You lose!');
            updateResult('lose')
            computerScore++
            break;
            case 'scissors' : 
            console.log('You win!!!');
            updateResult('win')
            playerScore++
            break;
        }
    } else if (playerChoice === 'paper') {
            switch(computerSelection){
                case 'rock' : 
                console.log('You win!!');
                updateResult('win')
                playerScore++;
                break;
                case 'paper' : 
                console.log('It\'s a draw, play again');
                updateResult('draw')
                break;
                case 'scissors' : 
                console.log('You lose');
                computerScore++;
                updateResult('lose')
                break;
                }
    } else if (playerChoice === 'scissors') {
        switch(computerSelection){
            case 'rock' : 
            console.log('You lose!');
            updateResult('lose')
            computerScore++;
            break;
            case 'paper' : 
            console.log('You win!');
            updateResult('win')
            playerScore++;
            break;
            case 'scissors' : 
            console.log('It\'s a draw, play again');
            updateResult('draw')
            break;
        }
    }
    console.log(`PLAYER SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
}