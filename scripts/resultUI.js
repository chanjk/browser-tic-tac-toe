var resultUI = function($container) {
  var that = { container: $container }

  that.renderWin = function(winner) {
    $container.text(winner.token + ' Wins!');
    $container.show();
  };

  that.renderDraw = function() {
    $container.text('It\'s a Draw');
    $container.show();
  };

  that.renderNone = function() {
    $container.text('');
    $container.hide();
  };

  return that;
};
