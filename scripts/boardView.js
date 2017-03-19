var boardView = function(model, $container) {
  var that = {}

  that.render = function() {
    $container.empty();
    $container.append(create$Board(model))
  };

  return that;
};

var create$Board = function(model) {
  var createTile = function(row, col) {
    var tileWidth = (0.433 * size + 106.89 / size - 7.6) + '%';
    var fontSize = (1349.8 / size - 68.6) + '%';

    var $tile = $('<div>').addClass('tile').width(tileWidth).css('padding-top', tileWidth);
    var $wrapper = $('<div>').addClass('wrapper');
    var $wrapperInner = $('<div>').addClass('wrapper-inner');
    var $content = $('<div>').addClass('content').data('row', row).data('col', col).css('font-size', fontSize);

    return $tile.append($wrapper.append($wrapperInner.append($content)));
  };

  var $board = $('<div>').addClass('board');

  model.foreach(function(row, rowIndex) {
    var $row = $('<div>');

    row.foreach(function(cell, colIndex) {
      $row.append(createTile(rowIndex, colIndex));
    });

    $board.append($row);
  });

  return $board;
};
