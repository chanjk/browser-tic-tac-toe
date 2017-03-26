var tictactoeView = function() {
  var that = {}

  that.tileClicked = event(that);
  that.resetButtonClicked = event(that);

  that.boardUI = boardUI($('.board-container'));
  that.resultUI = resultUI($('.result'));
  that.playersUI = playersUI($('.stats'));

  that.renderState = function(sender) { that.boardUI.render(sender.state()); };
  that.renderWin = function(sender, args) { that.resultUI.renderWin(args.winner); };
  that.renderDraw = function() { that.resultUI.renderDraw(); };
  that.renderPlayers = function(sender) { that.playersUI.render(sender.players); };
  that.renderNewRound = function(sender) {
    that.resultUI.renderNone();
    that.renderState(sender);
  };

  that.boardUI.container.on('click', '.content', function(e) {
    var $tile = $(e.target);

    if ($tile.text() === '') {
      that.tileClicked.publish({ row: $tile.data('row'), col: $tile.data('col') });
    }
  });

  $('.reset-btn').click(function() {
    that.resetButtonClicked.publish();
  });

  return that;
};
