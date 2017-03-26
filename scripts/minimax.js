const MAX_PLAYER = {}
const MIN_PLAYER = {}

var node = function(state, children, player) {
  var that = { state: state, children: children, player: player }

  var winChanceCompareFunction = function(a, b) {
    var [winChanceA, winChanceB] = [a.winChance(), b.winChance()];

    return winChanceA[0] === winChanceB[0] ? winChanceA[1] - winChanceB[1] : winChanceA[0] - winChanceB[0];
  };

  that.search = function(state) {
    return that.state === state ? that : that.children.find(function(child) { return child.state === state; });
  };

  that.score = function() {
    var childScores = that.children.map(function(child) { return child.score(); });

    return that.player === MAX_PLAYER ? Math.max(...childScores) : Math.min(...childScores);
  };

  that.depthFactor = function() {
    var childDepthFactors = that.children.map(function(child) { return child.depthFactor(); });

    return that.player === MAX_PLAYER ? Math.max(...childDepthFactors) : Math.min(...childDepthFactors);
  };

  that.winChance = function() {
    return that.children.map(function(child) {
      return child.winChance();
    }).reduce(function(acc, chance) {
      if (acc[0] === chance[0]) {
        return [acc[0], acc[1] + chance[1]];
      }

      if (that.player === MAX) {
        return acc[0] < chance[0] ? acc : chance;
      }

      return acc[0] > chance[0] ? acc : chance;
    });
  };

  that.bestNext = function() {
    var candidates = that.children.filter(function(child) {
      return [child.score(), child.depthFactor()] === [that.score(), that.depthFactor()];
    });

    if (candidates.length === 1) {
      return candidates[0];
    }

    if (that.player === MAX_PLAYER) {
      return candidates.sort(function(a, b) { return winChanceCompareFunction(b, a); })[0];
    }

    if (that.player === MIN_PLAYER) {
      return candidates.sort(winChanceCompareFunction)[0];
    }
  };

  return that;
};

var leaf = function(state, score, depthFactor, winChance) {
  var that = { state: state, score: score, depthFactor: depthFactor, winChance: winChance}

  that.search = function(state) {
    return that.state === state ? that : null;
  };

  return that;
};
