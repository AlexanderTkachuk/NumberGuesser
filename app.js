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

    if(isNaN(guess) || guess < min || guess > max || (guessInput.value = '')) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if(guess === winningNum) {
        //game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    } else {
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            //game over - lost
           gameOver(false,`Game over, you lost. The correct number was ${winningNum}`);
        } else {
            //game continues - answer wrong
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //tell user its wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

//game over 
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    //chenge border color
    guessInput.style.borderColor = color;
    message.style.color = color;
    //set message
    setMessage(msg)
};

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
};