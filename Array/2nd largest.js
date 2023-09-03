function findSecondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] != largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  
  let arr = [5, 3, 8,10, 2, 9, 1];
  let secondLargest = findSecondLargest(arr);
  
  console.log(secondLargest);
  