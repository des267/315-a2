/**
 * findNaNIndex(array)
 * Accepts an array of values as a parameter and finds each index
 * where NaN is found and adds them to an array to be returned.
 *
 * @param array - An array of values
 * @returns {*[]} - An array of index where NaN was found
 */
const findNaNIndex = function(array) {
    var results = [];
    array.forEach(function (value, index) {
        if (isNaN(value)) {
            results.push(index);
        }
    });
    return results;
}

module.exports = findNaNIndex;