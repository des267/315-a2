# 315-a2
A collection of array and object functions.
## Purpose
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended to be used in professional production. This library was created for the intention of learning to create Javascript modules and upload it as an NPM package.**
## Usage
**Install it:**

`npm install @des267/315-a2`

**Require it:**

`const _ = require('@des267/315-a2');`

**Call it:**

`const results = _.functionName()`
## Documentation
The following functions are currently implemented:

**Array functions**
* `countNumberOfArrays(array)`: Counts the number of arrays nested in another array
* `findNaNIndex(array)`: Finds the indexes of each NaN occurrence in an array
* `isArrayFactorChain(array)`: Checks if an array of numbers forms a factor chain

**Object functions**

* `biggestLoser(matches)`: Finds the name of the participant with the most loser points
* `participants(matches)`: Finds the name of each participant from an array of match objects
* `winnersObject(matches)`: Creates an object of participants and the names of those they defeated
