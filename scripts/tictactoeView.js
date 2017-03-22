var tictactoeView = function() {
  var that = {}

  that.tileClicked = event(that);

  that.boardUI = boardUI($('.board-container'));
  that.resultUI = resultUI($('.result'));

  that.renderState = function(sender) { return that.boardUI.render(sender.state); };
  that.renderWin = function(sender, args) { return that.resultUI.renderWin(args.winner); };
  that.renderDraw = function() { return that.resultUI.renderDraw(); };

  that.boardUI.container.on('click', '.content', function(e) {
    var $tile = $(e.target);

    if ($tile.text() === '') {
      that.tileClicked.publish({ row: $tile.data('row'), col: $tile.data('col') });
    }
  });

  return that;
}
