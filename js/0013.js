/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let number = 0;
    const computeSymbol = function (symbol) {
        switch (symbol) {
            case 'I':
                number = number + 1;
                break;
            case 'V':
                number = number + 5;
                break;
            case 'X':
                number = number + 10;
                break;
            case 'L':
                number = number + 50;
                break;
            case 'C':
                number = number + 100;
                break;
            case 'D':
                number = number + 500;
                break;
            case 'M':
                number = number + 1000;
                break;
            case 'IV':
                number = number + 4;
                break;
            case 'IX':
                number = number + 9;
                break;
            case 'XL':
                number = number + 40;
                break;
            case 'XC':
                number = number + 90;
                break;
            case 'CD':
                number = number + 400;
                break;
            case 'CM':
                number = number + 900;
                break;
        }
    }

    let lastCheckOfTwoDigitNumber = false;
    const twoDigitRomanNumbers = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    for (let i = 0; i < s.length; i++) {
        if (lastCheckOfTwoDigitNumber) {
            lastCheckOfTwoDigitNumber = false;
            continue;
        }

        if (twoDigitRomanNumbers.find((twoDigitRomanNumber) => s[i] + s[i + 1] === twoDigitRomanNumber)) {
            computeSymbol(s[i] + s[i + 1]);
            lastCheckOfTwoDigitNumber = true;
        } else {
            computeSymbol(s[i]);
        }
    }

    return number;
};

const romanToIntNew = function (s) {
    let answer = 0;
    let lastCheckOfTwoDigitNumber = false;

    const romanNumbers =         ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    const equalsOfRomanNumbers = [ 1,   5,   10,  50, 100, 500, 1000, 4,     9,   40,   90,   400, 900];

    for (let i = 0; i < s.length; i++) {
        if (lastCheckOfTwoDigitNumber) {
            lastCheckOfTwoDigitNumber = false;
            continue;
        }

        let index = romanNumbers.findIndex((romanNumber) => s[i] + s[i + 1] === romanNumber) + 1;

        if (index) {
            lastCheckOfTwoDigitNumber = true;
            answer = answer + equalsOfRomanNumbers[index - 1];
        } else {
            index = romanNumbers.findIndex((romanNumber) => s[i] === romanNumber);
            answer = answer + equalsOfRomanNumbers[index];
        }
    }

    return answer;
};

