/**
 * Array of emojis used in the game.
 * @type {string[]}
 */
const emojis = ["😊", "😊", "💔", "💔", "😂", "😂", "😵", "😵", "💘", "💘", "😘", "😘", "🤯", "🤯", "😜", "😜"];

/**
 * The score of the game.
 * @type {number}
 */
let score = 0;

/**
 * The number of steps taken in the game.
 * @type {number}
 */
let steps = 0;

/**
 * Indicates whether the game has started or not.
 * @type {boolean}
 */
let gameStarted = false;

/**
 * Updates the score displayed on the page.
 */
function updateScore() {
  document.getElementById('score').textContent = score;
}

/**
 * Updates the step count displayed on the page.
 */
function updateSteps() {
  document.getElementById('step-count').textContent = steps;
}

/**
 * Resets the game by clearing the game board, resetting the score and steps,
 * shuffling the emojis, recreating the board, and updating the gameStarted flag.
 */
function resetGame() {
  document.querySelector('.game').innerHTML = '';
  score = 0;
  steps = 0;
  updateScore();
  updateSteps();
  shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 1 : -1);
  createBoard();
  gameStarted = false; 
  document.querySelector('.reset-button').textContent = 'Start'; 
}

/**
 * Creates the game board by dynamically generating HTML elements for each emoji.
 */
function createBoard() {
  for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function () {
      if (!gameStarted) {
        gameStarted = true;
        document.querySelector('.reset-button').textContent = 'Reset';
      }
      if (!this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
        this.classList.add('boxOpen');
        setTimeout(function () {
          let openBoxes = document.querySelectorAll('.boxOpen');
          if (openBoxes.length > 1) {
            steps++;
            updateSteps();
            if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
              openBoxes[0].classList.add('boxMatch');
              openBoxes[1].classList.add('boxMatch');
              openBoxes[0].classList.remove('boxOpen');
              openBoxes[1].classList.remove('boxOpen');
              score++;
              updateScore();

              if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                alert('You win!');
              }
            } else {
              openBoxes[0].classList.remove('boxOpen');
              openBoxes[1].classList.remove('boxOpen');
            }
          }
        }, 500);
      }
    }
    document.querySelector('.game').appendChild(box);
  }
}

// Event listener for the reset button
document.querySelector('.reset-button').addEventListener('click', function() {
  resetGame();
});

// Start the game
resetGame();
