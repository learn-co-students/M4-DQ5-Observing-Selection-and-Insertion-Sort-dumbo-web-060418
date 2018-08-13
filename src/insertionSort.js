function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    checkAndSwap(i, arr)
  }

  return arr
}

function checkAndSwap(i, arr) {

  if(arr[i] < arr[i - 1]) {
    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
    checkAndSwap(i - 1, arr)
  }
  return arr
}
