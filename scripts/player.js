var player = function(token, isComputer) {
  var that = {}

  that.token = token;
  that.isComputer = !!isComputer;
  that.score = 0;

  that.incrementScore = function() {
    that.score += 1;
    return that;
  }

  return that;
};
