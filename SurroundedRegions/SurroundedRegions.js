const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

class Solution {
    solve(board) {
        if (board.length === 0) return;
        this.row = board.length;
        this.col = board[0].length;

        for (let i = 0; i < this.row; i++) {
            if (board[i][0] === 'O') this.dfs(i, 0, board);
            if (board[i][this.col - 1] === 'O') this.dfs(i, this.col - 1, board);
        }
        for (let j = 1; j < this.col; j++) {
            if (board[0][j] === 'O') this.dfs(0, j, board);
            if (board[this.row - 1][j] === 'O') this.dfs(this.row - 1, j, board);
        }
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                if (board[i][j] === 'O') board[i][j] = 'X';
                else if (board[i][j] === 'B') board[i][j] = 'O';
            }
        }
    }

    dfs(x, y, board) {
        board[x][y] = 'B';

        for (let k = 0; k < 4; k++) {
            let i = x + dx[k];
            let j = y + dy[k];
            if (this.check(i, j) && board[i][j] === 'O') {
                this.dfs(i, j, board);
            }
        }
    }

    check(x, y) {
        return x >= 0 && x < this.row && y >= 0 && y < this.col;
    }
}

// Example usage:
const solution = new Solution();
const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'X', 'X', 'X']
];
solution.solve(board);
console.log(board);
