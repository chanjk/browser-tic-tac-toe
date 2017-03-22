var event = function(sender) {
  var that = { listeners: [] }

  that.subscribe = function(listener) {
    that.listeners.push(listener);
  };

  that.publish = function(args) {
    that.listeners.forEach(function(listener) {
      listener(sender, args);
    });
  };

  return that;
};
