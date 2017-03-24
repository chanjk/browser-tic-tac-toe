var playersUI = function($container) {
  var that = {}

  that.render = function(players) {
    $container.empty();

    var $playerOne = create$Player(players[0]).addClass('player-one');
    var $playerTwo = create$Player(players[1]).addClass('player-two');

    $container.append($playerOne).append($playerTwo);
  };

  return that;
};

var create$Player = function(player) {
  var $info = $('<p>').text(player.name + ': ' + player.token);
  var $wins = $('<p>').text('Wins: ').append($('<span>').addClass('win-count').text(player.score));

  return $('<div>').append($info).append($wins);
};
