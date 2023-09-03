function longestPalindrome(s) {
    let beg = 0;
    let end = 0;
    let longest = 1;
    let dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(false));

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        dp[i + 1][i] = true;
    }

    for (let d = 1; d < s.length; d++) {
        for (let i = 0, j = i + d; j < s.length; i++, j++) {
            dp[i][j] = false;

            if (s[i] === s[j]) {
                dp[i][j] |= dp[i + 1][j - 1];
            }

            if (dp[i][j] && longest < j - i + 1) {
                beg = i;
                end = j;
            }
        }
    }

    return s.substring(beg, end + 1);
}


const input = "babad";
const result = longestPalindrome(input);
console.log(result); // Output: "bab" or "aba"
