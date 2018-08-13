function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    let min = arr[i];

    for(let k = i + 1; k < arr.length; k++) {
      if (arr[k] < min) {
        minIndex = k
        min = arr[k]
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}
