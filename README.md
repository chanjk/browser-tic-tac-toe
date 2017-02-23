# Browser Tic-Tac-Toe

`HTML` `CSS` `JavaScript` `jQuery`

## Want to jump straight in?
Play the game at https://chanjk.github.io/browser-tic-tac-toe/.

<sup>No installation needed, isn't that great?! :metal:</sup>

## Table of contents
WIP

## Introduction
This is a browser version of a very familiar game (if you don't know it, ask Wikipedia (or the person beside you)).

While not exactly an MMORPG, this game will provide countless hours of fun, and I'm sure you will appreciate the replay value as much as I did making the game.

## How to play
Click on an empty tile to place your move. The turn then switches to the other player's. Play continues likewise until there's a winner or the game ends in a draw.

## The nerdy details

### The game layout
 > TODO

### The board
```
        |        |
 (0, 0) | (0, 1) | (0, 2)
        |        |
--------------------------
        |        |
 (1, 0) | (1, 1) | (1, 2)
        |        |
--------------------------
        |        |
 (2, 0) | (2, 1) | (2, 2)
        |        |
```

Internally, the board is represented as an array of arrays (i.e. 2-D array); each sub-array represents a row, and each element in the sub-array represents a cell/tile.

Example: `board[1][2]` refers to cell `(1, 2)`.

Why a 2-D array?&mdash;

* It seems like an obvious choice for a board made of rows and columns, as the row and column can be used directly to refer to a cell.

* Another alternative is to use a 1-D array, but the index of a cell would have to be computed each time from its row and column.

***

Externally, each tile is represented by `div`s, and dynamically created on page load.

This dynamic creation allows the game to be easily extended to bigger board sizes in the future (because 6 x 6 Tic-Tac-Toe is so much more fun), and makes the HTML file cleaner.

jQuery and native DOM methods (in a basically 99 : 1 ratio) are used to query, traverse and manipulate the DOM.

### The players
Initially, there was only one player-related variable, `playerTokens`, which was an array used to store the tokens for the players. `playerTokens[0]` would be the token for the current player, and after a move was made, `playerTokens` would be `reverse`d to ensure that the correct token was used the next turn.

Later on, I also wanted to track the number of wins for each player, as well as display the name of the winning player (if any). However, creating new variables &agrave; la `playerTokens` for these wasn't a very maintainable solution.

So I decided to store each player as an `object`, with properties for the `name`, `token`, number of `wins`, and the `view` corresponding to the HTML element for that player.

Example:
```javascript
  var playerOne = { name: 'Player 1', token: 'X', wins: 0, $view: $('.player-one') }
```

### Detecting wins and draws

#### The plan
On paper, determining the result of a game is simple:

1. If a player makes a move and gets a three-in-a-row/column/diagonal, that player wins.

2. Else, if the board has been completely filled, the game is a draw.

3. Else, play continues.

Simple plan. Great. But how to code it? <sup>Isn't that always the problem?</sup>

#### The execution

##### For wins
I considered two approaches:

1. Checking every row, column and diagonal of the board after every move

2. Checking only the row, column and diagonal(s) relevant to the most recent move

At first, I went with the second approach:

* A function `isWinningMove` that, given the position of a cell, would check the row and column containing that cell, as well as the two diagonals (checking both diagonals every time was easier than determining which diagonal(s), if any, the cell was part of).

* This function would be called every time a move was made; the position of the move will be passed to the function, and the result returned.

And it worked. But it wasn't very general-purpose&mdash;I couldn't use it to check the state of the board _before_ a move was made (not without storing the last move made somewhere). Something more versatile would allow me to maybe detect if the game was already over when a tile is clicked, so that it can be properly ignored.

So I switched to the first, slightly-more-brute-force approach:

* A function `isWon` takes the entire `board` array and checks every row, column and diagonal (the array methods `some` and `every` were especially helpful).

* Again, this function would be called every time a move was made.

* This function, together with `isCompletelyFilled` (in case of a draw; see below), is also used to determine if the game is already over when a tile is clicked. If it is, the click event is ignored.

##### For draws
I really only tried one approach here: the `isCompletelyFilled` function iterates over the `board` array, and returns `true` if there is no cell equal to the empty cell (designated as `null`).

### Multiple rounds and keeping score
If the game ends in a win, the winner's `wins` property is incremented by 1, and the displayed score is updated.

Clicking the **Play Again** button resets the `board` array and the HTML elements, while preserving the scores.

### Unsolved problems
* Not using `view`
* Better `reset` approach
* Getting enough sleep

_More to come..._

### Conclusions and lessons learnt
_More to come..._

### Disclaimer
