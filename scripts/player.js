var player = function(name, token, isComputer) {
  var that = {}

  that.name = name;
  that.token = token;
  that.isComputer = !!isComputer;
  that.score = 0;

  that.incrementScore = function() {
    that.score += 1;
    return that;
  };

  return that;
};
