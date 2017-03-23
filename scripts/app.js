var model = tictactoeModel(),
    view = tictactoeView(),
    controller = tictactoeController(model, view);

view.renderState(model);
view.renderPlayers(model);
