var player = function(name, token, isComputer) {
  var that = { name: name, token: token, isComputer: !!isComputer, score: 0 }

  that.incrementScore = function() {
    that.score += 1;
    return that;
  };

  return that;
};
