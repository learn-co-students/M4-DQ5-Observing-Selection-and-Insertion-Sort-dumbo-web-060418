function selectionSort(array) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let temp;

  for (let i = 0; i < array.length; i++) {
    let mi = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[mi]) {
        mi = j
      }

    }
    temp = array[i]
    array[i] = array[mi]
    array[mi] = temp
  }
}
