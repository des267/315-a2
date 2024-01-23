/**
 *  participants.js
 *
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

const isMatchType = require('./isMatchType.js');

/**
 * participants(matches)
 * Accepts an array of matches and returns an array of all the
 * unique participant's names.
 *
 * @param matches - Array of matches
 * @returns {*[]} - Array of participant names
 */
const participants = function (matches) {
    try {
        if (!isMatchType(matches)) {
            throw "TypeError: Matches not passed in proper format."
        }
        let names = [];
        matches.forEach(function (value) {
            names.push(value.winner);
            names.push(value.loser);
        });
        return Array.from(new Set(names));
    } catch (err) {
        console.log(err);
    }

}

module.exports = participants;