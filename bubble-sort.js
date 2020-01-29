const data = [4,3,16,8,3,4,67,9,5,2,34,6,8,98,1]

const bubbleSort = (data) => {
  let count = 0
  flag = 1
  while (flag) {
    flag = 0 
    for (let i = data.length ; i >= 1 ; i--) {
      if (data[i] < data[i-1]) {
        const tmp = data[i]
        data[i] = data[i - 1]
        data[i - 1] = tmp
        count++
        flag = 1
      }
    }
  }
  console.log(count)
  return data
}

console.log(bubbleSort(data))
