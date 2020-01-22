const array = [4,3,16,8,3,4,67,9,5,2,34,6,8,98,1]

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const n = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > n) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = n
  }
  return array
}

console.log(insertionSort(array))
