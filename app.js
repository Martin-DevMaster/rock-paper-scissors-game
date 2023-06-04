const container = document.querySelector('.container');
const gameStart = document.querySelector('.gameWindow');
const button = document.querySelectorAll('button');
const choice = document.querySelector('.choice');
const checkButton = document.querySelector('.button-agree');
const removeButton = document.querySelector('.button-disagree');
const playerLiveScore = document.querySelector('.playerScore');
const computerLiveScore = document.querySelector('.computerScore');

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

const getComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors'];
    return computerChoices[Math.floor(Math.random() * (computerChoices.length))]
};

checkButton.addEventListener('click', function() {
    container.style.display = 'none';
    gameStart.style.display = 'block';
    button.forEach((btn) => btn.addEventListener('click', function(e) {
        computerSelection = getComputerChoice();
        let playerChoice = e.currentTarget.id
        if((playerChoice === 'rock' && computerSelection === 'scissors') || 
           (playerChoice === 'paper' && computerSelection === 'rock')    ||
           (playerChoice === 'scissors' && computerSelection === 'paper')) {
             playerScore++
             playerLiveScore.textContent = playerScore;
        } else if(playerChoice === computerSelection) {
            alert("It's TIE, continue...");
            
        } else {
            computerScore++
            computerLiveScore.textContent = computerScore;
        }
        gameOver()
    }))

})

removeButton.addEventListener('click', function() {
    container.style.display = 'none';
    const h1 = document.createElement('h1');
    h1.innerText = 'You choose to surrender, good riddance!'
    choice.append(h1)
});

function gameOver() {
    if(playerScore === winningScore){
        gameStart.style.display = 'none';
        const gameOver = document.createElement('h1');
        const para = document.createElement('p');
        gameOver.innerText = `You are the winner with score ${playerScore} and computer lost with score ${computerScore}`
        para.innerText = 'This page will refresh in 10 Seconds.'
        para.style.cssText = 'font-size: 30px; color: red;'
        choice.appendChild(gameOver)
        choice.appendChild(para)
        setTimeout(pageRefresh, 10000)
    } if(computerScore === winningScore) {
        gameStart.style.display = 'none';
        const gameOver = document.createElement('h1');
        const para = document.createElement('p');
        gameOver.innerText = `You are the loser with score ${playerScore} and computer is winner with score ${computerScore}`
        para.innerText = 'This page will refresh in 10 Seconds.'
        para.style.cssText = 'font-size: 30px; color: red;'
        choice.appendChild(gameOver)
        choice.appendChild(para)
        setTimeout(pageRefresh, 10000)
    }
}

const pageRefresh = () => {
    window.location.reload(true)
}