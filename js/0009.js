/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    return String(x) === String(x).split('').reverse().join('')
};
