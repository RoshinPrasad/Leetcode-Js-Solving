function pivotElement(arr, start = 0, end = arr.length) {
    let pivot = arr[start]
    let pvtIndex = start

    for (let i = start+1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            pvtIndex++
            [[arr[pvtIndex]], [arr[i]]] = [[arr[i]], [arr[pvtIndex]]]
        }
    }

    [[arr[pvtIndex]], [arr[start]]] = [[arr[start]], [arr[pvtIndex]]]

    return pvtIndex
}
 

function quickSort(arr,left=0,right=arr.length){
    if (left < right) {
        let pivot = pivotElement(arr,left,right)
        //left
        quickSort(arr,left,pivot-1)
        //right
        quickSort(arr,pivot+1,right)
    }
    return arr
}
let arr = [4,5,6,7,21,64,82,36,15,94,65,12,11]
quickSort(arr)
console.log(arr)