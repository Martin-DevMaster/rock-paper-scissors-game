// Making rock,paper scissors game...
// First I need an input(preferably prompt) for users to say if they choose rock or paper or scissors.
// I need a function for game and when function is called, the game begins.
// I need to make the input to take only three strings('rock', 'paper' and 'scissors').
let playerScore = 0;
let computerScore = 0;

function playRound() {
    for(let i = 0; i < 5; i++) {
        game()
    }
    if(playerScore > computerScore) {
        return console.log(`You are the winner, with score ${playerScore}. And computer loses with score ${computerScore}`)
    } else if(playerScore < computerScore){
        return console.log(`You are loser, with score ${playerScore}. And computer wins with score ${computerScore}`)
    } else {
        return console.log('Unfortunately, its tie..... better luck next time!')
    }
}

function game(playerSelection, computerSelection) {
    playerSelection = prompt('Enter your choice');
    computerSelection = getComputerChoice();
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return console.log('Its TIE!!!');
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors'){
        playerScore++
        return console.log('You win! Rock beats Scissors!');
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper'){
        computerScore++
        return console.log('You lose! Paper beats rock!');
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock'){
        playerScore++
        return console.log('You win! Paper beats Rock!');
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors'){
        computerScore++
        return console.log('You lose! Scissors beats paper!');
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper'){
        playerScore++
        return console.log('You win! Scissors beats Paper!');
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock'){
        computerScore++
        return console.log('You lose! Rock beats Scissors!');
    } else {
        playerSelection = prompt('Enter valid choice');
    } 
}
function getComputerChoice() {
    const computerChoices = {
        Rock: 'Rock',
        Paper: 'Paper',
        Scissors: 'Scissors'
    }
    return computerChoices[Object.keys(computerChoices)[Math.floor(Math.random()*Object.keys(computerChoices).length)]];
}

playRound()