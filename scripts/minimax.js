const _ = require('./lodash');

const MAX_PLAYER = { isMaxPlayer: true },
      MIN_PLAYER = { isMinPlayer: true };

var node = function(board, children, player) {
  var that = { board: board, children: children, player: player }

  that.search = function(board) {
    return _.isEqual(that.board, board) ? that : that.children.find(function(child) { return _.isEqual(child.board, board); });
  };

  [that.score, that.depthFactor] = (function() {
    var sortedScoresDepthFactors = _.sortBy(that.children.map(function(child) { return [child.score, child.depthFactor]; }), [0, 1]);

    return that.player.isMaxPlayer ? _.last(sortedScoresDepthFactors) : _.first(sortedScoresDepthFactors);
  })();

  that.winChance = (function() {
    return that.children.map(function(child) {
      return child.winChance;
    }).reduce(function(acc, chance) {
      if (acc[0] === chance[0]) {
        return [acc[0], acc[1] + chance[1]];
      }

      if (that.player.isMaxPlayer) {
        return acc[0] < chance[0] ? acc : chance;
      }

      return acc[0] > chance[0] ? acc : chance;
    });
  })();

  that.bestNext = function() {
    var candidates = _.shuffle(that.children.filter(function(child) {
      return child.score === that.score && child.depthFactor === that.depthFactor;
    }));

    var sortedByWinChances = _.sortBy(candidates, [
      function(candidate) { return candidate.winChance[0]; },
      function(candidate) { return candidate.winChance[1]; }
    ]);

    if (that.player.isMaxPlayer) {
      return _.last(sortedByWinChances);
    }

    return _.first(sortedByWinChances);
  };

  return that;
};

var leaf = function(board, score, depthFactor, winChance) {
  var that = { board: board, score: score, depthFactor: depthFactor, winChance: winChance }

  that.search = function(board) {
    return that.board === board ? that : null;
  };

  return that;
};

var minimax = function(board) {
  var grow = function(board, currentPlayer) {
    return _.flatMap(_.range(0, board.state.length), function(rowIndex) {
      return _.range(0, board.state.length).filter(function(colIndex) {
        return board.isEmptyCell(board.state[rowIndex][colIndex]);
      }).map(function(colIndex) {
        return board.update(rowIndex, colIndex, currentPlayer);
      });
    });
  };

  var iter = function(board, currentPlayer, nextPlayer, depth) {
    if (board.isWon() || board.isCompletelyFilled()) {
      var score;

      if (currentPlayer.isMaxPlayer) {
        score = board.isWon() ? -10 : 0;
        return leaf(board, score, depth, [score, -1]);
      }

      score = board.isWon() ? 10 : 0;
      return leaf(board, score, -depth, [score, 1]);
    }

    var children = grow(board, currentPlayer).map(function(child) {
      return iter(child, nextPlayer, currentPlayer, depth + 1);
    });

    return node(board, children, currentPlayer);
  };

  return iter(board, MAX_PLAYER, MIN_PLAYER, 0);
};

debugger
