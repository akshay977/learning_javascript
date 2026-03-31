/*
	Coding Interview questions - Part-1
	https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-1-a0e5bb606eaf
	Coding Interview questions - Part-2
	https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-2-42250060345c
	Coding Interview questions - Part-3
	https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-3-2250ed68f614
	Coding Interview questions - Part-4
	https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-4-748960cb8354
	Coding Interview questions - Part-5
	https://medium.com/deno-the-complete-reference/10-javascript-coding-interview-questions-part-5-83ca32b8939b
*/

/*
	Question 1: Can you write a function in JavaScript to reverse the order of words in a given string?
*/
const reversedString = str => str.split(' ').reverse().join(' ');

/*
	Question 2: Can you write a function in JavaScript to remove duplicate elements from an array?
*/

const removeDuplicates = arr => [...new Set(arr)];

/*
	Question 3: Can you write a function in JavaScript to merge two objects without overwriting existing properties?
*/
const mergeObjects = (obj1, obj2) => {
	const result = {...obj1};

	for (const key in obj2) {
		if (!result.hasOwnProperty(key)) {
			result[key] = obj2[key];
		}
	}
	return result;
}

/*
	Question 4: Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?
*/
const currentDate = () => new Date().toISOString().split('T')[0];

/*
	Question 5: Can you write a function in JavaScript to calculate the cumulative sum of an array?
*/
const cumulativeSum = arr => arr.reduce((acc, value) => [...acc, acc.length ? acc[acc.length-1] + value : value], []);
/*
	 Input array => 10, 15, 20, 25, 30.
	 Output array => 10, 25, 45, 70, 100.
*/

/*
	Question 6: Can you write a function in JavaScript to split an array into chunks of a specified size?
*/
const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length)/size }, (el, index) => arr.slice(index*size, index*size + size));
/*
	chunk_size=2
	inputArray = [1, 2, 3]

	outputArray = [[1, 2], [3]]
*/

const FindLargestGroupAfterSplit = (arr, element) => Math.max(...arr.join('').split(element).map(group => group.length));

/*
	Question 8: Can you write a function in JavaScript to transpose a 2D matrix?

	Input:
	[
		[1, 2, 3], [4, 5, 6], [7, 8, 9]	
	]

	Output:
	[
		[1, 4, 7], [2, 5, 8], [3, 6, 9]
	]
*/
const transposeMatrix = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));

/*
	Question 9: Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?
*/
const toCamelCase = str => str.replace(/[_-](.)/g, (_, p1) => c.toUpperCase());

/*
	Question 10: Can you write a line of code in JavaScript to swap the values of two variables without using a temporary variable?
*/

[a, b] = [b, a];

/*
	Question 11: Can you write a function in JavaScript to create a countdown from a given number?
*/
const createCountdown = (size) => Array.from({ length: size }, (val, index) => size-index);

/*
	Question 12: Can you write a function in JavaScript to convert a string to an integer while 
	handling non-numeric characters gracefully?
*/
const stringToInteger = str => +str === +str ? +str : 0;

/*
	Question 13: Can you write a function in JavaScript to convert a decimal number to its binary representation?
*/
const decimalToBinary = num => num.toString(2);

/*
	Question 14: Can you write a function in JavaScript to calculate the factorial of a given non-negative integer?
*/
const getFactorial = (n) => n === 0 ? 1 : Array.from({ length: n }, (val, i) => i+1).reduce((acc, num) => acc*num, 1);

/*
	Question 15: Write a concise function to safely access a deeply nested property of an object 
	without throwing an error if any intermediate property is undefined.

	const nestedObject = { a: { b: { c: 42 } } };
	const propertyPath = 'a.b.c';
	const result = deepAccess(nestedObject, propertyPath);
	// result: 42
*/

const deepAccess = (obj, path) => path.split('.').reduce((acc, key) => acc && acc[key], obj);

/*
	Question 16: Can you write a function in JavaScript to generate a random integer between a 
	specified minimum and maximum value (inclusive)?
*/
const randomInRange = (min, max) => Math.floor(Math.random*(max - min + 1)) + min;

/*
	Question 17: Can you write a function in JavaScript to count the occurrences of each element 
	in an array and return the result as an object?
*/
const countOcurrencesEachElement = arr => arr.reduce((acc, value) => {
	acc[val] = (acc[val] || 0) + 1
	return acc;
},{});

/*
	Alternate solution:
	const countOccurrences = (arr) => arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
*/

/*
	Question 18: Can you write a function to capitalize the first letter of each word in a given sentence?
*/
const capitalizeWords = (sentence) => sentence.replace(/\b\w/g, char => char.toUpperCase());

/*
	Question 19: Can you write a function to reverse a given string?
*/
const reverseString = (str) => str.split('').reverse().join('');

/*
	Question 20: Can you write a function in JavaScript to find the longest word in a given sentence?
*/
const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');