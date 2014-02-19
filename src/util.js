var util = {};

util.each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

util.contains = function(haystack, needle) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
};
