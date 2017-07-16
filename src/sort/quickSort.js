var swap = require('../utils');

function quickSort(arr, start, end) {
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = arr.length - 1;
  }
  function partition(arr, start, end) {
    var pivot = arr[end];
    var partitionIdx = start;
    for (var i = start; i <= end; i++) {
      if (arr[i] < pivot) {
        if (i !== partitionIdx) {
          swap(arr, i, partitionIdx);
        }
        partitionIdx++;
      }
    }
    swap(arr, end, partitionIdx);
    return partitionIdx;
  }

  if (start < end) {
    var partitionIdx = partition(arr, start, end);
    quickSort(arr, start, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, end);
  }
}

module.exports = quickSort;