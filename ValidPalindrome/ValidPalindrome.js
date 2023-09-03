class Solution {
    isPalindrome(s) {
        let alphas = "";
        for (let i = 0; i < s.length; i++) {
            if (/[a-zA-Z0-9]/.test(s[i])) {
                alphas += s[i].toLowerCase();
            }
        }
        if (alphas.length === 0) {
            return true;
        }
        let beg = 0;
        let end = alphas.length - 1;
        while (beg < end) {
            if (alphas[beg] === alphas[end]) {
                beg += 1;
                end -= 1;
            } else {
                return false;
            }
        }
        return true;
    }
}

// Usage example:
const solution = new Solution();
const input = "A man, a plan, a canal: Panama";
const result = solution.isPalindrome(input);
console.log(result); // Output: true
