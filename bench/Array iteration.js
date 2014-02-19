suite('Array iteration', function() {
  benchmark('util.each', function() {
    util.each([1, 2, 3, 4, 5], function(number) {
      return number;
    });
  });

  benchmark('Array.forEach', function() {
    [1, 2, 3, 4, 5].forEach(function(number) {
      return number;
    });
  });
});
