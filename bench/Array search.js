suite('Array search', function() {
  benchmark('util.contains', function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    util.contains(array, 0);
    util.contains(array, 1);
    util.contains(array, 5);
    util.contains(array, 10);
    util.contains(array, 11);
  });

  benchmark('Array.indexOf', function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array.indexOf(0) !== -1;
    array.indexOf(1) !== -1;
    array.indexOf(5) !== -1;
    array.indexOf(10) !== -1;
    array.indexOf(11) !== -1;
  });
});
