var board = $('.board');
var tokens = ['X', 'O'];

board.on('click', '.token', function(event) {
  event.target.textContent = tokens[0];
  tokens.reverse();
})
