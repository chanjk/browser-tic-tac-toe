var tictactoeModel = function() {
  var that = {}

  that.updated = event(that);
  that.won = event(that);
  that.drawn = event(that);
  that.boardReset = event(that);

  that.board = board(3);
  that.players = [player('Player 1', 'O'), player('Player 2', 'X')];

  that.state = function() { return that.board.state; };
  that.isWon = function() { return that.board.isWon(); };
  that.isCompletelyFilled = function() { return that.board.isCompletelyFilled(); };
  that.currentPlayer = function() { return that.players[0]; };

  that.update = function(row, col) {
    that.board.update(row, col, that.players[0].token);
    that.updated.publish();
    that.players.reverse();
    return that;
  };

  that.resetBoard = function() {
    that.board = board(3);
    that.boardReset.publish();
  };

  that.updated.subscribe(function() {
    if (that.isWon()) {
      that.won.publish({ winner: that.currentPlayer() });
    } else if (that.isCompletelyFilled()) {
      that.drawn.publish();
    }
  });

  that.won.subscribe(function(sender, args) { args.winner.incrementScore(); });

  return that;
};
