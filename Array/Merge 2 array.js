function mergeArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    for (let k = 0; k < arr1.length + arr2.length; k++) {
      if (i >= arr1.length) {
        mergedArray.push(arr2[j]);
        j++;
      } else if (j >= arr2.length) {
        mergedArray.push(arr1[i]);
        i++;
      } else if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    return mergedArray;
  }
  

  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4];
  const mergedArray = mergeArrays(arr1, arr2);
  console.log(mergedArray);