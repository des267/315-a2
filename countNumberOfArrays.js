const countNumberOfArrays = function (array) {
    let result = 0;
    array.forEach(function(element) {
        if (Array.isArray(element)) {
            result++;
        }
    })
    return result;
}

module.exports = countNumberOfArrays;