const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoises = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1) // or you can use possibleChoises.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}