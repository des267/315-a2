/**
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

/**
 * countNumberOfArrays(array)
 * Counts and returns the number of arrays nested in an array
 * that is passed as a parameter.
 *
 * @param array - An array of values
 * @returns {number} - Number of arrays found
 */
const countNumberOfArrays = function (array) {
    let result = 0;
    array.forEach(function(value) {
        if (Array.isArray(value)) {
            result++;
        }
    })
    return result;
}

module.exports = countNumberOfArrays;