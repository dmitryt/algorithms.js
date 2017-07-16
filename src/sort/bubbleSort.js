var swap = require('../utils');

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var swapped = false;
    for (var j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

module.exports = bubbleSort;