## Memory Game - Flipped Cards

This repository contains the code for a simple memory-based card game built using HTML, CSS, and JavaScript. The game is played by flipping over pairs of cards to find matches. 

### Files:

* **index.html:** This is the main HTML file for the game. It contains the basic structure of the game, including the game board, the reset button, and the score and step counters. 
* **game.html:** This file is the game board that displays the cards to be flipped. It is linked to the CSS file for styling and the JavaScript file for the game logic. 
* **style.css:**  This file contains the CSS styles for the game. It styles the elements of the game board, including the cards, the reset button, and the score and step counters.
* **index.js:** This file contains the JavaScript code for the game logic. It handles the shuffling of the cards, the flipping of the cards, and the scoring of the game.

### Getting Started:

1. **Clone the repository:**  Use `git clone <repository_url>` to clone the repository to your local machine.
2. **Open the index.html file in your web browser:** This will load the game.
3. **Click the "Start" button to start the game.**

### How to Play:

1.  The game begins with a grid of cards face down.
2.  Click on a card to flip it over and reveal the image underneath.
3.  Click on a second card to try to find a match.
4.  If the two cards match, they will remain flipped over.
5.  If the two cards do not match, they will flip back over after a short delay.
6.  Continue flipping cards until you have found all the matches.

### Game Logic (index.js):

* **emojis:**  An array of emojis used for the cards.
* **score:**  A variable that tracks the player's score.
* **steps:** A variable that tracks the number of steps taken in the game.
* **gameStarted:** A variable that tracks whether the game has started or not.
* **updateScore() & updateSteps():** Functions to update the score and step count displayed on the page.
* **resetGame():**  Resets the game by clearing the game board, resetting the score and steps, shuffling the emojis, recreating the board, and updating the gameStarted flag.
* **createBoard():** Creates the game board by dynamically generating HTML elements for each emoji.
* **Event Listener for the reset button:**  Handles the event of clicking the "Start" button, calling `resetGame()` to reset the game.
* **Game Logic inside `createBoard()`:**
    * **onclick function:**  
        * Sets `gameStarted` to true if it's the first click.
        * Flips the card, adding the `boxOpen` class.
        * Compares the flipped cards:
            * If they match, adds `boxMatch` class, increases the score, and checks if the player has won.
            * If they don't match, removes `boxOpen` class after a delay.

### CSS Styling (style.css):

The CSS file provides styling for the game elements:

* **General Styling:** Sets font, margin, padding, and box sizing.
* **Container Styling:** Styles the game container, providing background color, padding, border-radius, and alignment.
* **h1 Styling:** Styles the game title.
* **reset-button Styling:** Styles the reset button with color, padding, font size, and hover effects.
* **Game Grid Styling:**  Styles the grid of cards, setting width, height, gap, and columns/rows using grid layout.
* **Card Styling (item):**  Styles each card, including background color, border-radius, and flip animation.
* **Score & Step Counter Styling:** Styles the score and step counter text.

###  Additional Notes for Beginners:

* **HTML Structure:** The `game.html` file uses a `div` with the class `game` to create the grid of cards.  The `index.js` file dynamically creates the card elements within this div.
* **JavaScript:** The `index.js` file uses functions to handle different aspects of the game. It also uses event listeners to respond to user interactions (like clicking the reset button or the cards).
* **CSS:** The `style.css` file uses selectors to target specific HTML elements and apply styles to them.  For example, the `item` selector styles the individual cards, and the `.reset-button` selector styles the reset button.
* **Dynamic Content:** The game dynamically creates the card elements in the `createBoard()` function. This is done by using JavaScript to create HTML elements and then adding them to the page.
* **Animation:** The `boxOpen` and `boxMatch` classes are used to create the flip animation for the cards.  When a card is clicked, the `boxOpen` class is added, causing the card to flip over. If the cards match, the `boxMatch` class is added, preventing them from flipping back.

This game provides a good starting point for learning about using HTML, CSS, and JavaScript together to create interactive web applications.  Feel free to explore the code, experiment with different styles, and add new features to customize the game! 
