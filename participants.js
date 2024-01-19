/**
 * participants(matches)
 * Accepts an array of matches and returns an array of all the
 * unique participant's names.
 *
 * @param matches - Array of matches
 * @returns {*[]} - Array of participant names
 */
const participants = function (matches) {
    let names = [];
    matches.forEach(function (value) {
        names.push(value.winner);
        names.push(value.loser);
    })
    return Array.from(new Set(names));
}

module.exports = participants;