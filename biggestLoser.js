/**
 *  Author: Desmond Stular @github/des267
 *  January 19, 2024
 */

/**
 * biggestLoser(matches)
 * Finds the name of the player with the most loser points
 * from an array that is passed as a parameter containing
 * matches.
 *
 * @param matches - An array of matches
 * @returns {string} - Name of the player
 */
const biggestLoser = function(matches) {
    let losses = {};
    matches.forEach(function (value) {
        // Add loser name to winners object if not already
        if (!(value.loser in losses)) {
            losses[value.loser] = 0;
        }
        // Add loser points to player entry in losses obj
        losses[value.loser] += value.loser_points;
    })
    // Find player in losses obj w/ most loser points
    let loser = ["", -1];
    for (const [key, value] of Object.entries(losses)) {
        if (value > loser[0]) {
            loser[0] = key;
            loser[1] = value;
        }
    }
    return loser[0];
}

module.exports = biggestLoser;