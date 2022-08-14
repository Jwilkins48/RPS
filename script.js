const rockBtn = document.getElementsByClassName('rockBtn');
const paperBtn = document.getElementsByClassName('paperBtn');
const ScissorsBtn = document.getElementsByClassName('scissorsBtn');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const oppScoreDisplay = document.getElementById('oppScoreDisplay');
const buttons = document.querySelectorAll('div.btnContainer button');
const computerChoices = ['rock', 'paper', 'scissors'];
const resultDisplay = document.getElementById('resultDisplay');
const starIconContainer = document.querySelector('.starIconContainer')
const oppStarIconContainer = document.querySelector('.oppStarIconContainer')

let playerChoice;
let playerScore = 0;
let computerScore = 0;
let slideIndex = 0;

const playGame = (playersChoice) => {
    let opponentsChoice = computersChoice();

    if (playersChoice === 'rock' && opponentsChoice === 'scissors' || playersChoice === 'paper' && opponentsChoice === 'rock' || playersChoice === 'scissors' && opponentsChoice === 'paper') {
        playerPoint()
        resultDisplay.innerHTML = `${playersChoice} beats ${opponentsChoice}. Good job!`
    } else if (playersChoice == opponentsChoice) {
        resultDisplay.innerHTML = `You both chose ${playersChoice}. It's a tie!`
    } else {
        computerPoint()
        resultDisplay.innerHTML = `${opponentsChoice} beats ${playersChoice}. Try again!`
    }
}

const computersChoice = () => {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//Increment player points and stop after 5 wins
const playerPoint = () => {
    if (playerScore >= 5) {
        gameOver()
    } else {
        playerScore += 1;
        console.log(playerScore);

        const playerIcons = document.createElement('div');
        playerIcons.innerHTML = `<i class="fa-solid fa-star playerStarIconActive"></i>`
        starIconContainer.appendChild(playerIcons);
    }
}

//Increment computer points and stop after 5 wins
const computerPoint = () => {
    if (computerScore >= 5) {
        gameOver()
    } else {
        computerScore += 1;
        console.log(computerScore);

        const computerIcons = document.createElement('div');
        computerIcons.innerHTML = `<i class="fa-solid fa-star oppStarIconActive"></i>`
        oppStarIconContainer.appendChild(computerIcons);
    }
}

//Disable buttons on game over
const gameOver = () => {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
    console.log('Game over');
}

//Event listener for all buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playGame(button.name);
    });
});