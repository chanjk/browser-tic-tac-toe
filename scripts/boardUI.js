var boardUI = function($container) {
  var that = { container: $container }

  that.render = function(state) {
    $container.empty();
    $container.append(create$Board(state));
  };

  return that;
};

var create$Board = function(state) {
  var createTile = function(row, col, token) {
    var size = state.length;
    var tileWidth = (0.433 * size + 106.89 / size - 7.6) + '%';
    var fontSize = (1349.8 / size - 68.6) + '%';

    var $tile = $('<div>').addClass('tile').width(tileWidth).css('padding-top', tileWidth);
    var $wrapper = $('<div>').addClass('wrapper');
    var $wrapperInner = $('<div>').addClass('wrapper-inner');
    var $content = $('<div>').addClass('content').data('row', row).data('col', col).css('font-size', fontSize).text(token);

    return $tile.append($wrapper.append($wrapperInner.append($content)));
  };

  var $board = $('<div>').addClass('board');

  state.forEach(function(row, rowIndex) {
    var $row = $('<div>');

    row.forEach(function(cell, colIndex) {
      $row.append(createTile(rowIndex, colIndex, cell));
    });

    $board.append($row);
  });

  return $board;
};
