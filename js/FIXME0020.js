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


// FIXME: debug the '(){}}{' case
const isValidFix = function (s) {
    if (s.length < 2) return false;

    const temporaryArray = s.split('');

    for (let i = 0; i < temporaryArray.length; i++) {
        if (temporaryArray.length < 2) return false

        let searchingValue;

        if (temporaryArray[0] === '(') {
            searchingValue = ')';
        } else if (temporaryArray[0] === '[') {
            searchingValue = ']';
        } else if (temporaryArray[0] === '{') {
            searchingValue = '}';
        } else searchingValue = undefined;


        const index = temporaryArray.findIndex((value, index, array) => {
            if (index === 0) return searchingValue === array[index + 1]
            return searchingValue === value;
        })
        if (index + 1) {
            temporaryArray.shift();
            temporaryArray.splice(index, 1)
        } else return false;
    }

    return true;
};

console.log(isValidFix('(){}}{'))
