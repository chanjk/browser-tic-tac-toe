var tictactoeController = function(model, view) {
  var that = {}

  model.updated.subscribe(view.renderState);
  model.won.subscribe(view.renderWin);
  model.won.subscribe(view.renderPlayers);
  model.drawn.subscribe(view.renderDraw);

  view.tileClicked.subscribe(function(sender, args) {
    if (!model.isWon() && !model.isCompletelyFilled()) {
      model.update(args.row, args.col);
    }
  });

  return that;
};
