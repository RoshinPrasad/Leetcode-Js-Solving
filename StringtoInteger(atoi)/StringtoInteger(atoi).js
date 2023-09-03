function atoi(str) {
    if (str === null) {
        return 0;
    }

    while (str[0] === ' ') {
        str = str.substring(1);
    }

    let minus = false;
    if (str[0] === '+') {
        str = str.substring(1);
    } else if (str[0] === '-') {
        str = str.substring(1);
        minus = true;
    }

    let value = 0;
    for (let i = 0; i < str.length; i++) {
        if ('0' <= str[i] && str[i] <= '9') {
            value *= 10;
            value += parseInt(str[i]);
        } else {
            break;
        }
    }

    if (minus) {
        value = -value;
    }

    if (value > 2147483647) {
        value = 2147483647;
    }

    if (value < -2147483648) {
        value = -2147483648;
    }

    return value;
}


const input = "   -42";
const result = atoi(input);
console.log(result); // Output: -42
