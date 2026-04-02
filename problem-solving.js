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
	Q.1: Can you write a function in JavaScript to reverse the order of words in a given string?
*/
const reversedString = str => str.split(' ').reverse().join(' ');

/*
	Q.2: Can you write a function in JavaScript to remove duplicate elements from an array?
*/

const removeDuplicates = arr => [...new Set(arr)];

/*
	Q.3: Can you write a function in JavaScript to merge two objects without overwriting existing properties?
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
	Q.4: Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?
*/
const currentDate = () => new Date().toISOString().split('T')[0];

/*
	Q.5: Can you write a function in JavaScript to calculate the cumulative sum of an array?
*/
const cumulativeSum = arr => arr.reduce((acc, value) => [...acc, acc.length ? acc[acc.length-1] + value : value], []);
/*
	 Input array => 10, 15, 20, 25, 30.
	 Output array => 10, 25, 45, 70, 100.
*/

/*
	Q.6: Can you write a function in JavaScript to split an array into chunks of a specified size?
*/
const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length)/size }, (el, index) => arr.slice(index*size, index*size + size));
/*
	chunk_size=2
	inputArray = [1, 2, 3]

	outputArray = [[1, 2], [3]]
*/

const FindLargestGroupAfterSplit = (arr, element) => Math.max(...arr.join('').split(element).map(group => group.length));

/*
	Q.8: Can you write a function in JavaScript to transpose a 2D matrix?

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
	Q.9: Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?
*/
const toCamelCase = str => str.replace(/[_-](.)/g, (_, p1) => c.toUpperCase());

/*
	Q.10: Can you write a line of code in JavaScript to swap the values of two variables without using a temporary variable?
*/

[a, b] = [b, a];

/*
	Q.11: Can you write a function in JavaScript to create a countdown from a given number?
*/
const createCountdown = (size) => Array.from({ length: size }, (val, index) => size-index);

/*
	Q.12: Can you write a function in JavaScript to convert a string to an integer while 
	handling non-numeric characters gracefully?
*/
const stringToInteger = str => +str === +str ? +str : 0;

/*
	Q.13: Can you write a function in JavaScript to convert a decimal number to its binary representation?
*/
const decimalToBinary = num => num.toString(2);

/*
	Q.14: Can you write a function in JavaScript to calculate the factorial of a given non-negative integer?
*/
const getFactorial = (n) => n === 0 ? 1 : Array.from({ length: n }, (val, i) => i+1).reduce((acc, num) => acc*num, 1);

/*
	Q.15: Write a concise function to safely access a deeply nested property of an object 
	without throwing an error if any intermediate property is undefined.

	const nestedObject = { a: { b: { c: 42 } } };
	const propertyPath = 'a.b.c';
	const result = deepAccess(nestedObject, propertyPath);
	// result: 42
*/

const deepAccess = (obj, path) => path.split('.').reduce((acc, key) => acc && acc[key], obj);

/*
	Q.16: Can you write a function in JavaScript to generate a random integer between a 
	specified minimum and maximum value (inclusive)?
*/
const randomInRange = (min, max) => Math.floor(Math.random*(max - min + 1)) + min;

/*
	Q.17: Can you write a function in JavaScript to count the occurrences of each element 
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
	Q.18: Can you write a function to capitalize the first letter of each word in a given sentence?
*/
const capitalizeWords = (sentence) => sentence.replace(/\b\w/g, char => char.toUpperCase());

/*
	Q.19: Can you write a function to reverse a given string?
*/
const reverseString = (str) => str.split('').reverse().join('');

/*
	Q.20: Can you write a function in JavaScript to find the longest word in a given sentence?
*/
const longestWord = (sentence) => sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');

/*
	Q.21: Can you write a function in JavaScript to rename a specific property in an object?
*/
const renameProperty = (obj, oldName, newName) => ({ ...obj, obj[newName]: obj[oldName], ...(delete obj[oldName], obj)});

/*
	Q.22: Can you write a function in JavaScript to find the second-largest element in an array?
*/
const findSecondLargest = (arr) => [...new Set(arr)].sort((a, b) => b-a)[1];

/*
	Q.23: Can you write a JavaScript function to group an array of objects by a specified property?

	Input:
	const people = [
	  { id: 1, name: 'Alice', age: 25 },
	  { id: 2, name: 'Bob', age: 30 },
	  { id: 3, name: 'Alice', age: 28 },
	];

	Output:
	{
	  Alice: [
	    { id: 1, name: 'Alice', age: 25 },
	    { id: 3, name: 'Alice', age: 28 }
	  ],
	  Bob: [ { id: 2, name: 'Bob', age: 30 } ]
	}
*/
const groupByProperty = (arr, property) => {
  return arr.reduce((acc, val) => ({
    ...acc,
    [val[property]]: [...(acc[val[property]] || []) , val]
  }), {});
}

/*
	Q.24: Can you write a JavaScript function to find the missing number in an array of consecutive integers from 1 to N?
*/
const findMissingNumber = (arr) => (arr.length*(arr.length+1))/2 - arr.reduce((acc, num) => acc+num, 0);

/*
	Q.25: Can you write a JavaScript function to reverse the key-value pairs of an object?
*/
const reverseKeyValues = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

/*
	Q.26: Can you write a JavaScript function to check if a given string has balanced parentheses?
*/
const isBalancedParenthesis = (str) => str.split('').reduce((count, el) => (count >= 0 ? (count + (el === '(' ? 1 : el === ')' ? -1 : 0)) : -1), 0) === 0;

/*
	Q.27: Can you write a concise function in JavaScript to implement a simple debounce function 
	that delays the execution of a given function until after a specified time interval has passed 
	without additional calls?

	In JavaScript, debounce is a powerful technique used to optimize event handling by delaying the execution 
	of a function until after a specified period of inactivity. It helps prevent excessive function calls 
	triggered by rapid events, such as keystrokes or scroll movements.

	The clearTimeout cancels the previous one and executes the latest timeout function. Without
	clearTimeout we will execute both the functions after the delay without cancelling the
	previous one. Basically, only the latest timeout should execute.
*/
const debounce = (func, delay) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), delay);
	}
}

// const delayedLog = debounce((text) => console.log(text), 1000);
// delayedLog('Hello'); // Logs 'Hello' after 1000 milliseconds
// delayedLog('World'); // Cancels the previous timeout and sets a new one for 'World'

/*
	Q. 28: Can you write a JavaScript function to truncate a given string to a specified length 
	and append “…” if it exceeds that length?
*/
const truncateString = (str, maxLength) => str.length > maxLength ? str.slice(0, maxLength) + '...' : str;

/*
	Q. 29: Can you write a throttle function in JavaScript to implement a simple throttle function 
	that limits the execution of a given function to once every specified time interval?
*/

const throttle = (func, delay) => {
	let throttled = false;
	return (...args) => {
		if (!throttled) {
			func(...args);
			throttled=true;
			setTimeout(() => throttled = false, delay);
		}
	}
}

/*
	const throttledLog = throttle((text) => console.log(text), 1000);
	throttledLog('Hello'); // Logs 'Hello'
	throttledLog('World'); // Does not log 'World' because it's within the 1000ms throttle interval
*/

/*
	Q. 30: Can you write a JavaScript function to check if a given string has all unique characters?
*/
const checkUniqueCharacters = (str) => new Set(str).size === str.length;

/*
	Q. 31: Can you write a function in JavaScript to convert each string in an array of strings to uppercase?
*/
const convertToUppercase = (arr) => arr.map(el => el.toUpperCase());

/*
	Q. 32: Can you write a JavaScript function to find the first non-repeated character in a given string?
*/
const firstNonRepeatedChar = (str) => str.split('').find(char => str.indexOf(char) === str.lastIndexOf(char));

/*
	Q. 33: Can you write a function to flatten nested objects
*/
const flattenObject = (obj) => {
  let finalObj = {};
  
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      let flattened = flattenObject(obj[key]);
      for (let key2 in flattened) {
        finalObj[key+'.' + key2] = flattened[key2];
      }
    } else {
      finalObj[key] = obj[key];
    }
  }
  
  return finalObj;
}

// const o = { a: 1, b: { c: 2, d: { e: 3 } } };
// const r = flattenObject(o);
// console.log(r);

/*
	Question 35: Can you write a JavaScript function to rotate the elements of an array 
	to the right by a specified number of positions?
*/

function rotateArrayV1(arr, d) {
  const n = arr.length;

  for (let i = 0; i < d; i++) {
    const last = arr[n - 1];
    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = last;
  }
}

function rotateArrayV2(arr, d) {
  const n = arr.length;
  d = d % n;
  const temp = new Array(n);

  // Copy the last d elements
  for (let i = 0; i < d; i++) {
    temp[i] = arr[n - 1 - i];
  }

  // Copy the first n - d elements
  for (let i = 0; i < n - d; i++) {
    temp[i + d] = arr[i];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateArrayV3(arr, d) {
  const n = arr.length;
  d = d % n;

  reverse(arr, 0, n - 1);
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
}

function rotateArrayV4(arr, d) {
  const n = arr.length;

  d = d % n;

  const cycles = gcd(n, d);

  for (let i = 0; i < cycles; i++) {
    let currIdx = i;
    let currEle = arr[currIdx];

    do {
      const nextIdx = (currIdx + d) % n;
      const nextEle = arr[nextIdx];

      arr[nextIdx] = currEle;
      currEle = nextEle;
      currIdx = nextIdx;
    } while (currIdx !== i);
  }
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

// rotateArrayV1(arr, d);
// rotateArrayV2(arr, d);
// rotateArrayV3(arr, d);
rotateArrayV4(arr, d);

console.log(arr.join(" "));