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



