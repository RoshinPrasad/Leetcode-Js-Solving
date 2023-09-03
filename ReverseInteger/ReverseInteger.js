function reverse(x) {
    let minus = false;
    if (x < 0) {
        x = -x;
        minus = true;
    }

    let res = 0;
    while (x) {
        res *= 10;
        res += x % 10;
        x = Math.floor(x / 10);
    }

    return minus ? (-res) : res;
}

// Example usage:
const input = 123;
const result = reverse(input);
console.log(result); // Output: 321
