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
    try {
        // If parameter is not of type array, throw exception
        if (!Array.isArray(array)) {
            throw "TypeError: Parameter is not of type Array.";
        }
        let result = 0;
        array.forEach(function(value) {
            if (Array.isArray(value)) {
                result++;
            }
        })
        return result;
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = countNumberOfArrays;