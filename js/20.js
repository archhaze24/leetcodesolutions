/**
 * @param {string} s
 * @return {boolean}
 */
// FIXME: there is nested parenthesis and the solution doesn't consider them...
const isValid = function (s) {
    let checkIsValid = false;
    if (s.length < 2) return false;

    for (let i = 1; i < s.length; i++) {
        if (checkIsValid && i + 1 !== s.length) {
            checkIsValid = false;
            continue;
        }

        const pair = s[i - 1] + s[i];

        if (pair === '()' || pair === '[]' || pair === '{}') {
            checkIsValid = true;
        }
        else return false;
    }

    return true;
};

console.log(isValid('[)'))
