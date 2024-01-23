/**
 * isMatchType.js
 *
 * This file contains a helper function used by the
 * object functions within this library to check if
 * the match objects passed are proper.
 *
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

/**
 * isMatchType(matches)
 * Checks if an array of matches has proper format, key
 * names, and its values are of the correct type.
 *
 * @param matches array of match objects
 * @return true if proper format, otherwise false
 */
const isMatchType = function (matches) {
    let testKeys = ["winner", "loser", "loser_points"];
    // Check first if matches in array, false if not
    if (!Array.isArray(matches)) {
        return false;
    }
    // Cycle each match object
    for (let i = 0; i < matches.length; i++) {
        let match = matches[i];
        let keys = Object.keys(match);
        // If match not an object, null, or an array, return false
        if (typeof match !== 'object' || match === null || Array.isArray(match)) {
            return false;
        }
        // If match keys length or keys don't match expected, return false
        if (!(testKeys.every(r => keys.includes(r))) || keys.length !== 3) {
            return false;
        }
        // If the key values are not right type, return false
        if (typeof match["winner"] !== 'string' || typeof match['loser'] !== 'string' || typeof match['loser_points'] !== 'number') {
            return false;
        }
    }
    return true;
}

module.exports = isMatchType;