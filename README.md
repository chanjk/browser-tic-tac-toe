# Browser Tic-Tac-Toe
## Want to jump straight in?
Play the game at https://chanjk.github.io/browser-tic-tac-toe/.

<sup>No installation needed, isn't that great?! :metal:</sup>

## Introduction
This is a browser version of a very familiar game (if you don't know it, ask Wikipedia (or the person beside you)).

While not exactly an MMORPG, this game will provide countless hours of fun, and I'm sure you will appreciate the replay value as much as I did making the game.

## The nerdy details
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
***
Externally, each tile is made up of 4 nested `div`s:
```html
  <div class="tile">
    <div class="wrapper">
      <div class="wrapper-inner">
        <div class="content"></div>
      </div>
    </div>
  </div>
```
Why? &mdash;
* The outermost `div`, `.tile`, displays the perfectly square tile, achieved by giving it a `padding-top` equal to its `width`, which is set as a percentage of its parent's to allow for responsive design.

jQuery and native DOM methods (in a basically 99 : 1 ratio) were used to query, traverse and manipulate the DOM.

_More to come..._

### The players
_More to come..._

### Detecting wins and draws
_More to come..._

### Playing again
_More to come..._

### Unsolved problems
_More to come..._

### Conclusions
_More to come..._
