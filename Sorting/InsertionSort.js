function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
    return arr;
}
const arr = [8, 20, -2, 4, -6]
console.log(InsertionSort(arr));


function InsertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        for ( j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentElement;
    }
    return arr
}

console.log(InsertionSort2(arr));