var tictactoeModel = function() {
  var that = {}

  var isTokenOf = function(player) { return function(token) { return token === player.token; }; };
  var tokenCountOf = function(player) {
    return that.state().reduce(function(count, row) {
      return count + row.filter(isTokenOf(player)).length;
    }, 0);
  };

  that.updated = event(that);
  that.won = event(that);
  that.drawn = event(that);
  that.boardReset = event(that);

  that.board = board(3);
  that.players = [player('Player 1', 'O'), player('Player 2', 'X')];

  that.state = function() { return that.board.state; };
  that.isWon = function() { return that.board.isWon(); };
  that.isCompletelyFilled = function() { return that.board.isCompletelyFilled(); };

  that.currentPlayer = function() {
    if (tokenCountOf(that.players[0]) > tokenCountOf(that.players[1])) {
      return that.players[1];
    }

    return that.players[0];
  };

  that.update = function(row, col) {
    var currentPlayer = that.currentPlayer();

    that.board.update(row, col, currentPlayer.token);
    that.updated.publish({ lastMoveBy: currentPlayer });
    return that;
  };

  that.resetBoard = function() {
    that.board = board(3);
    that.boardReset.publish();
  };

  that.updated.subscribe(function(sender, args) {
    if (that.isWon()) {
      that.won.publish({ winner: args.lastMoveBy });
    } else if (that.isCompletelyFilled()) {
      that.drawn.publish();
    }
  });

  that.won.subscribe(function(sender, args) { args.winner.incrementScore(); });

  return that;
};
