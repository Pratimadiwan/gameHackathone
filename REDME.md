
I have created a flipped cards game which is a memory based game in which Js, Html and css are used. Here are the files from the code : html file and css file. Create a proper readme file
for this with as much explanation as possible for a beginner user. Use markdown embedding in following formate:

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <style>
        .container {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
        .container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .btn-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            padding: 0.5rem 1.5rem;
            background-color: rgb(85, 85, 241);
            margin-top: 30px;
        }
        .btn-center:hover{
            background-color: yellow;
        }
        a{
            color: antiquewhite;
        }
        a:hover{
            color: black;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://www.codester.com/static/uploads/items/000/048/48553/preview.jpg" alt="Background Image">
        <button class="btn btn-primary btn-center"> <a href="game.html"> PLAY </a></button>
    </div>
</body>
</html>
```
game.html
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Memory Game | JavaScript</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="index.js" defer></script>
    </head>
    <body>
        <div class="container">
            <h1>Memory Game</h1>
            <div class="game"></div>
            <button class="reset-button">Start</button>
            <p id="para">Score: <span id="score">0</span></p>
            <p id="steps">Steps: <span id="step-count">0</span></p>
        </div>
    </body>
</html>
```


style.css
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image:url('https://img.freepik.com/premium-photo/3d-illustration-sticky-note-papers-cream-wall-work-organization-theme_551230-455.jpg?semt=ais_user');
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: #0d614b;
  padding: 40px 60px;
  border-radius: 50px;
}

h1 {
  font-size: 3em;
  color: #fff;
  letter-spacing: 0.1em;
}

.reset-button {
  padding: 15px 20px;
  color: #267c65;
  background: #fff;
  border: none;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  border-radius: 16px;
}

.reset-button:focus {
  color: #fff;
  background: #267c65;

}

.game {
  width: 420px; 
  height: 420px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: repeat(4, 1fr); 
  gap: 10px;
}

.item {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  background: #fff;
  transition: 0.25s;
}

.item.boxOpen {
  transform: rotateY(180deg);
  border-radius: 50px;
}

.item::after {
  content: '';
  position: absolute;
  inset: 0;
  background:#FFC5C5;
  transition: 0.25s;
  transform: rotateY(0deg);
  backface-visibility: hidden;
  border-radius: 50px;
}

.boxOpen::after,
.boxMatch::after {
  transform: rotateY(180deg);
}
p{
  font-size: 2em;
  color: #fff;
  text-transform: 0.1em;
  letter-spacing: 0.1em;
}
```

index.js
```javascript
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
```

