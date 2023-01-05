module.exports = function reverse(n) {
    n = Math.abs(n);
    let result = 0;
    while (n >= 1) {
        result = result * 10 + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    return result;
};
