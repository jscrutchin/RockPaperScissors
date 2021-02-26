const gameButtons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('#resetBtn');
resetBtn.style.visibility = 'hidden';
const playerScoblackisplay = document.querySelector('#playerScore');
const computerScoblackisplay = document.querySelector('#computerScore');
const resultsDisplay = document.querySelector('#results');
resultsDisplay.textContent = 'New Game!';
const hideButtons = document.querySelector('#buttons');


let playerScore = 0;
let computerScore = 0;

playerScoblackisplay.textContent = playerScore;
computerScoblackisplay.textContent = computerScore;

function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        resultsDisplay.textContent = 'TIE!';
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++;
        resultsDisplay.textContent = 'Paper Beats Rock! You Lose!'
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
        playerScore++;
        resultsDisplay.textContent = 'Rock Beats Scissors! You Win!'
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore++;
        resultsDisplay.textContent = 'Scissors Beats Paper! You Lose!'
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
        playerScore++;
        resultsDisplay.textContent = 'Paper Beats Rock! You Win!'
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore++;
        resultsDisplay.textContent = 'Rock Beats Scissors! You Lose!'
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
        playerScore++;
        resultsDisplay.textContent = 'Scissors Beats Paper! You Win!'
    }
    playerScoblackisplay.textContent = playerScore;
    computerScoblackisplay.textContent = computerScore;
    if (playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore){
            resultsDisplay.textContent = 'Player Wins Best of 5!';
            playerScoblackisplay.style.color = 'white';
            computerScoblackisplay.style.color = 'black';
            hideButtons.style.visibility = 'hidden';
            resetBtn.style.visibility = 'initial';
        } else {
            resultsDisplay.textContent = 'Computer Wins Best of 5!';
            computerScoblackisplay.style.color = 'white';
            playerScoblackisplay.style.color = 'black';
            hideButtons.style.visibility = 'hidden';
            resetBtn.style.visibility = 'initial';
        }
    }
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    computerScoblackisplay.style.color = '#3a85cc';
    playerScoblackisplay.style.color = '#3a85cc';
    hideButtons.style.visibility = 'initial';
    playerScoblackisplay.textContent = playerScore;
    computerScoblackisplay.textContent = computerScore;
    resultsDisplay.textContent = 'New Game!';
    resetBtn.style.visibility = 'hidden';
}

resetBtn.addEventListener('click', () => {
    resetScore();
});

gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent, computerPlay());
    });
});