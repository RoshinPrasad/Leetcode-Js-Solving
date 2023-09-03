function longestConsecutive(nums) {
    let set = new Set(nums);
    let ret = 1;
    let maxlen = 1;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            maxlen = 1;

            while (set.has(current + 1)) {
                current += 1;
                maxlen += 1;
            }

            ret = Math.max(maxlen, ret);
        }
    }

    return ret;
}


const input = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(input);
console.log(result); // Output: 4
