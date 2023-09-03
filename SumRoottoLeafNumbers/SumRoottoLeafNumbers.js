class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    sumNumbers(root) {
        let sum = 0;
        this.dfs(root, 0, sum);
        return sum;
    }

    dfs(node, val, sum) {
        if (node === null) {
            return;
        }

        val *= 10;
        val += node.val;

        if (node.left === null && node.right === null) {
            sum += val;
            return;
        }

        if (node.left) {
            this.dfs(node.left, val, sum);
        }
        if (node.right) {
            this.dfs(node.right, val, sum);
        }
    }
}


const solution = new Solution();
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(solution.sumNumbers(root)); // Output: 25
