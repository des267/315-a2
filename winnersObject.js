/**
 *  winnersObject.js
 *
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

const isMatchType = require('./isMatchType.js');

/**
 * winnersObject(matches)
 * Creates an object containing each player's name as a key
 * and an array of names of those they beat as a value.
 * Accepts an array of matches as a parameter.
 *
 * @param matches - An array of matches
 * @returns {{}} - An object of participants names and those they beat.
 */
const winnersObject = function (matches) {
    try {
        // If matches, is not of proper format and types, throw exception
        if (!isMatchType(matches)) {
            throw "TypeError: Matches not passed in proper format.";
        }
        let winners = {};
        matches.forEach(function (value) {
            // Add winner name to winners object if not already
            if (!(value.winner in winners)) {
                winners[value.winner] = [];
            }
            // Add loser name to winners object if not already
            if (!(value.loser in winners)) {
                winners[value.loser] = [];
            }
            // If loser name not found already in winner array, add name
            if (winners[value.winner].indexOf(value.loser) === -1) {
                winners[value.winner].push(value.loser);
            }
        })
        return winners;
    } catch (err) {
        console.log(err);
    }
}

module.exports = winnersObject;