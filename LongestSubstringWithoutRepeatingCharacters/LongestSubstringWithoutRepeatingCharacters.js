function lengthOfLongestSubstring(s) {
    let hash = new Array(256).fill(-1);
    let maxlen = 0;
    let i = 0;

    for (let j = 0; j < s.length; j++) {
        if (hash[s.charCodeAt(j)] === -1) {
            hash[s.charCodeAt(j)] = j;
            maxlen = Math.max(maxlen, j - i + 1);
        } else {
            while (i <= hash[s.charCodeAt(j)]) {
                hash[s.charCodeAt(i)] = -1;
                i += 1;
            }
            hash[s.charCodeAt(j)] = j;
        }
    }

    return maxlen;
}


const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(result); // Output: 3
