var swap = require('../utils');

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var j = i;
    while (j > 0 && arr[j] > arr[j - 1]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
  return arr;
}

module.exports = insertionSort;

