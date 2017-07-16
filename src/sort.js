function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

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

function binarySearch(sortedArr, item, offset) {
  var baseIdx = Math.floor(sortedArr.length / 2);
  var base = sortedArr[baseIdx];
  if (offset === undefined) {
    offset = 0;
  }
  if (sortedArr.length === 0) {
    return -1;
  }
  console.log(sortedArr, offset, base);
  if (item === base) {
    return offset + baseIdx;
  }
  if (item > base) {
    return binarySearch(sortedArr.slice(baseIdx + 1), item, offset + baseIdx + 1)
  }
  if (item < base) {
    return binarySearch(sortedArr.slice(0, baseIdx), item, offset)
  }
  return -1;
}

// DORA, ODRA, ORDA, ORAD
function anagrams(word) {
  var result = [];
  var mix = function(word) {
    var result = [];
    for (var i = 0; i < word.length; i++) {

    }
  };
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    var list = anagrams(word.slice(0, i) + word.slice(i+1));
    for (var j = 0; j < list.length; j++) {
      result.push(sub.slice(0, j) + letter + sub.slice(j));
    }
  }
  return result;
}