/**
 * test.js
 *
 * This file contains the test cases which demonstrate the
 * use and functionality of each function within this library.
 *
 * Author: Desmond Stular
 * Date: Desmond Stular
 */

const _ = require('./index.js')

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

// ##### ARRAY FUNCTIONS #####
console.log("**** ARRAY FUNCTIONS TEST CASES ****");

// Test case: findNaNIndex
// Find all indexes where NaN is located
console.log("### findNaNArray function test case ###");
let findNaNArray = [NaN, 10, 30, NaN, 50, 20];
let findNaNResult = _.findNaNIndex(findNaNArray); // = [0, 3]
console.log(`findNaNIndex array = [${findNaNArray}]`);
console.log(`findNaNIndex result = [${findNaNResult}]\n`);

// Test case: isArrayFactorChain
// Returns true or false if passed array is a factor chain
console.log("### isArrayFactorChain function test case 1 ###");
let isArrayFactorChainArray1 = [1, 2, 4, 8, 16, 48, 96];
let isArrayFactorChainResult1 = _.isArrayFactorChain(isArrayFactorChainArray1); // = true
console.log(`isArrayFactorChain array1 = [${isArrayFactorChainArray1}]`);
console.log(`isArrayFactorChain result1 = ${isArrayFactorChainResult1}\n`);

console.log("### isArrayFactorChain function test case 2 ###");
let isArrayFactorChainArray2 = [1, 2, 4, 6, 16, 48, 96];
let isArrayFactorChainResult2 = _.isArrayFactorChain(isArrayFactorChainArray2); // = false
console.log(`isArrayFactorChain array2 = [${isArrayFactorChainArray2}]`);
console.log(`isArrayFactorChain result2 = ${isArrayFactorChainResult2}\n`);

// Test case: countNumberOfArrays
// Returns true or false if passed array is a factor chain
console.log("### countNumberOfArrays function test case ###");
let countNumberOfArraysArray = [10, 20, [4, 2], 3, [2], [3, 2], 10];
let countNumberOfArraysResult = _.countNumberOfArrays(countNumberOfArraysArray); // = 3
console.log(`countNumberOfArrays array = [${countNumberOfArraysArray}]`);
console.log(`countNumberOfArrays result = ${countNumberOfArraysResult}`);

console.log("\n--------------------------------------\n");

/// ##### Object functions #####
console.log("**** OBJECT FUNCTIONS TEST CASES ****");


// Test case: participants
// Returns true or false if passed array is a factor chain
console.log("### participants function test case ###");
let participantsResult = _.participants(matches);
console.log(`participants result = `);
console.log(participantsResult);

// Test case: winnersObject
// Returns true or false if passed array is a factor chain
console.log("\n### winnersObject function test case ###");
let winnersObjectResult = _.winnersObject(matches);
console.log(`winnersObject result = `);
console.log(winnersObjectResult);

// Test case: biggestLoser
// Returns true or false if passed array is a factor chain
console.log("\n### biggestLoser function test case ###");
let biggestLoserResult = _.biggestLoser(matches);
console.log(`biggestLoser result = ${biggestLoserResult}`);


console.log("\n--------------------------------------\n");


// #### MANIPULATION EXAMPLES USING LIBRARY FUNCTIONS ####
console.log("**** MANIPULATION EXAMPLES USING FUNCTIONS ****\n");

// Example # 1: Use findNaNIndex to get NaN index and then
//              remove them using splice.
console.log("Example #1: Remove NaN by index using findNaNIndex");
let example1Array = [NaN, 10, 32, NaN, 44, NaN, 100];
let example1Result = findNaNIndex(example1Array);
console.log(example1Result);
console.log("Array before");
console.log(example1Array);
let count = 0;
example1Result.forEach(function (value) {
    example1Array.splice(value - count, 1);
    count++;
});
console.log("Array after");
console.log(example1Array);


// Example # 2: Remove player from winners object if 0 wins
console.log("\nExample #2: Remove players from winners object if no wins");
let example2Object = _.winnersObject(matches);
console.log("Winners object before:");
console.log(example2Object);
Object.keys(example2Object).forEach(function (key) {
    if (example2Object[key].length === 0) {
        delete example2Object[key];
    }
});
console.log("Winners object after:");   // Bob deleted
console.log(example2Object);