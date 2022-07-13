        //generating a number between 1-100
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        //needed elements
        const game = document.querySelector(".game");
        const guessField = document.querySelector('.guessField');
        const guessSubmit = document.querySelector('.guessSubmit');
        const guesses = document.querySelector('.guesses');
        const chances = document.querySelector('.chances');
        const lastResult = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');
        let guessCount = 1;
        let resetButton;
        //checking guess
        function checkGuess() {
            let userGuess = Number(guessField.value);
            // alert(typeof userGuess);
            if (guessCount === 1) {
                guesses.textContent = 'Previous Guesses: ';
                chances.textContent = '';
            }
            guesses.textContent += userGuess + ' - ';
            chances.textContent = 'chances left = ' + (10 - guessCount);

            if (userGuess === randomNumber) {
                lastResult.textContent = 'You Win!'
                lastResult.style.backgroundColor = 'green';
                lowOrHi.textContent = '';
                gameEnd();
            } else if (guessCount === 10) {
                lastResult.textContent = '!Game Over!'
                lastResult.style.backgroundColor = 'red';
                lowOrHi.textContent = '';
                gameEnd();
            } else {
                lastResult.textContent = 'Wrong!'
                lastResult.style.backgroundColor = 'orange';
                if (userGuess < randomNumber) {
                    lowOrHi.textContent = 'Your guess was low';
                } else if (userGuess > randomNumber) {
                    lowOrHi.textContent = 'Your guess was hight';
                }
            }
            guessCount++;
            guessField.value = '';
            guessField.focus();
        }
        guessSubmit.addEventListener("click", checkGuess);

        function gameEnd(){
            guessField.disabled = true;
            guessSubmit.disabled = true;
            resetButton = document.createElement('button');
            resetButton.textContent = 'start new game';
            game.appendChild(resetButton);
            resetButton.classList.add("btn","btn-outline-info","w-100");
            resetButton.addEventListener("click",resetGame);
        }
        function resetGame(){
            guessCount = 1;
            const resultParas = document.querySelectorAll('.resultParas p');
            for (let p = 0; p < resultParas.length; p++){
                resultParas[p].textContent = '';
            }
            resetButton.parentNode.removeChild(resetButton);
            guessSubmit.disabled = false;
            guessField.disabled = false;
            guessField.value = '';
            guessField.focus();
            lastResult.style.backgroundColor = 'transparent';
            randomNumber = Math.floor(Math.random()*100)+1;
        }