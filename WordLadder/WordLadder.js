class Solution {
    ladderLength(start, end, dict) {
        let queue = [[start, 1]];
        let visited = new Set();
        
        while (queue.length > 0) {
            let [current, steps] = queue.shift();
            
            if (current === end) {
                return steps;
            }
            
            let neighbors = this.getNeighbors(current, dict);
            
            for (let word of neighbors) {
                if (!visited.has(word)) {
                    visited.add(word);
                    queue.push([word, steps + 1]);
                }
            }
        }
        
        return 0;
    }

    getNeighbors(word, dict) {
        let neighbors = [];
        
        for (let i = 0; i < word.length; i++) {
            let copyword = word.split('');
            
            for (let ch = 'a'; ch <= 'z'; ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
                copyword[i] = ch;
                let newWord = copyword.join('');
                
                if (dict.has(newWord)) {
                    neighbors.push(newWord);
                }
            }
        }
        
        return neighbors;
    }
}

// Usage example:
const solution = new Solution();
const start = "hit";
const end = "cog";
const dict = new Set(["hot", "dot", "dog", "lot", "log", "cog"]);
const result = solution.ladderLength(start, end, dict);
console.log(result); // Output: 5 (Shortest ladder length)
