# Simon Says Game

## Description

This is a simple Simon Says game built with HTML, CSS, and JavaScript. It challenges the player to remember a sequence of colored buttons and replicate it by clicking the corresponding buttons. The game increases in difficulty with each successful round.

## Features

- Four colored buttons (red, green, yellow, blue)
- Randomly generated sequence of colors
- Audio cues for each color
- Visual feedback when clicking buttons
- Difficulty increases with each level
- Game over state with restart functionality

## How to Play

1. **Start the game**: Press the spacebar key.
2. **Watch the sequence**: The game will light up a sequence of colored buttons. Pay close attention to the order!
3. **Repeat the sequence**: Click the colored buttons in the same order as they were shown.
4. **Level Up!**: If you successfully replicate the sequence, the game will generate a new sequence with one additional color.
5. **Game Over**: If you click the wrong button, the game will play a "wrong" sound effect, display a "GAME OVER" message, and reset the game. You can restart by pressing the spacebar key again.

## Dependencies

- jQuery library (included in the `index.html` file)

## Running the Game

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Project Structure

- `index.html`: The main HTML file that defines the game structure.
- `styles.css`: The CSS file that styles the game elements.
- `game.js`: The JavaScript file that contains the game logic.
- `sounds`: A folder containing the sound files used in the game.

## Contributing

Contributions are welcome! Please feel free to fork this repository and submit pull requests.
