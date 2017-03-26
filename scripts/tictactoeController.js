var tictactoeController = function(model, view) {
  var that = { model: model, view: view }

  that.model.updated.subscribe(that.view.renderState);
  that.model.won.subscribe(that.view.renderWin);
  that.model.won.subscribe(that.view.renderPlayers);
  that.model.drawn.subscribe(that.view.renderDraw);
  that.model.boardReset.subscribe(that.view.renderNewRound);

  that.view.tileClicked.subscribe(function(sender, args) {
    if (!that.model.isWon() && !that.model.isCompletelyFilled()) {
      that.model.update(args.row, args.col);
    }
  });

  $('.reset-btn').click(function() {
    that.model.resetBoard();
  });

  return that;
};
