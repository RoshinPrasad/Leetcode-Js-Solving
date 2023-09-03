function twoSum(numbers, target) {
   
    let numWithIndex = numbers.map((num, index) => ({ num, index: index + 1 }));

   
    numWithIndex.sort((a, b) => {
        if (a.num === b.num) {
            return a.index - b.index;
        }
        return a.num - b.num;
    });

    let start = 0;
    let end = numWithIndex.length - 1;

    while (start < end) {
        let sum = numWithIndex[start].num + numWithIndex[end].num;

        if (sum === target) {
            
            return [numWithIndex[start].index, numWithIndex[end].index];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }

   
    return [];
}


const numbers = [2, 7, 11, 15];
const target = 9;
const result = twoSum(numbers, target);
console.log(result); // Output: [1, 2]
