/**
 *  isArrayFactorChain.js
 *
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
    try {
        // If parameter not array, throws exception
        if (!Array.isArray(array)) {
            throw "TypeError: Parameter is not of type Array.";
        }
        // Cannot be factor chain if less than 2 values in array
        if (array.length < 2) {
            return false;
        }
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] % array[i] !== 0) {
                return false;   // return false if next element not factor of current
            }
        }
        return true;    // If loop completes, it is a factor chain
    }
    catch(err) {        // Catches if parameter not an array
        console.log(err);
    }
};

module.exports = isArrayFactorChain;