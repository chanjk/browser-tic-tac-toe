var updateDisplayedWinCount = function(textElement, winCount) {
  textElement.text(winCount);
}

var reset = function(board, $board, resultTextElement) {
  var resetBoard = function() {
    board.forEach(function(row) {
      row.fill(emptyCell);
    });
  };

  var reset$Board = function() {
    $board.find('.content').text('');
  };

  var resetResultTextElement = function() {
    resultTextElement.text('');
    resultTextElement.hide();
  };

  resetBoard();
  reset$Board();
  resetResultTextElement();
};
