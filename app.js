//game values

let min  = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
    minNum= document.querySelector('.min-num'),
    maxNum= document.querySelector('.max-num'), 
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', (e)=>{
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if(guess === winningNum) {
        //Gissable input
        guessInput.disabled = true;
        //chenge border color
        guessInput.style.borderColor = 'green';
        //set message
        setMessage(`${winningNum} is correct! YOU WIN!`, 'green')
    } else {

    }

    // if(!(isNaN(guess)) && guess> min && guess < max) {
    //     message.textContent ='';
    // }
})

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}