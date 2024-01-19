/**
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

/**
 * isArrayFactorChain(array)
 * Checks an array of numbers to see if it is an array factor
 * chain.
 *
 * @param array - An array of numerical values.
 * @returns {boolean} - True if factor chain, false if not.
 */
const isArrayFactorChain = function (array) {
    if (array.length < 2) {  // not factor if array < 2 values
        return false;
    }
    for (let i= 0; i < array.length - 1; i++) {
        if (array[i+1] % array[i] !== 0) {
            return false;   // return false if next element not facto
        }
    }
    return true;    // If loop completes, a factor chain
};

module.exports = isArrayFactorChain;