/**
 *  index.js
 *
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */
// Array functions
const countNumberOfArrays = require('./countNumberOfArrays');
const findNaNIndex = require('./findNaNIndex');
const isArrayFactorChain = require('./isArrayFactorChain');

// Object functions
const biggestLoser = require('./biggestLoser');
const participants = require('./participants');
const winnersObject = require('./winnersObject');

module.exports = {
    countNumberOfArrays,
    findNaNIndex,
    isArrayFactorChain,
    biggestLoser,
    participants,
    winnersObject
};