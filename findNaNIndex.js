/**
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

/**
 * findNaNIndex(array)
 * Accepts an array of values as a parameter and finds each index
 * where NaN is found and adds them to an array to be returned.
 *
 * @param array - An array of values
 * @returns {*[]} - An array of index numbers where NaN was found
 */
const findNaNIndex = function(array) {
    try {
        // Throw exception if parameter not array type
        if (!Array.isArray(array)) {
            throw "TypeError: Parameter is not of type Array.";
        }
        var results = [];
        array.forEach(function (value, index) {
            if (isNaN(value)) {
                results.push(index);
            }
        });
        return results;
    } catch(err) {
        console.log(err);
    }
}

module.exports = findNaNIndex;