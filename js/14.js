/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let prefixStillExists = true;
    let prefix = '';
    let iterations = 0;

    while (prefixStillExists) {
        if (iterations === strs[0].length || strs[0][0] === undefined) return prefix;
        const letter = strs[0][iterations];

        if (strs.every((string) => string[iterations] === letter)) {
            prefix = prefix + strs[0][iterations];
            iterations++;
        } else prefixStillExists = false;
    }

    return prefix;
};

console.log(longestCommonPrefix([""]))
