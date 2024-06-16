// ######### Variable Declarations #########

console.log(me); 		// prints undefined;
console.log(job); 		// Reference error: Cannot access variable before initialization
console.log(birthYear); // Reference error: Cannot access variable before initialization

var me = "Akshay C"; // var variable is "hoisted" with initial value = undefined
const job = "Fullstack developer"; // let and const variables are not "hoisted" and will throw reference error;
let birthYear = 1996;

// ####### Functions ##########

console.log(addDecl(2, 3)); // returns 5 as function is only declared and not stored in variable
console.log(addExpr1(2, 3)); // throws an error as addExpr1 is stored in var variable and its initial value is undefined.
							 // Error: addExpr1 is not a function.
console.log(addExpr2(2, 3)); // throws an error as function is stored in const variable and is not "hoisted"
// console.log(addArrow);
console.log(addArrow(2, 3)); // throws an error as function is stored in const variable and is not "hoisted"

function addDecl(a, b) {
	return a + b;
};

var addExpr1 = function (a, b) {
	return a + b;
};

const addExpr2 = function (a, b) {
	return a + b;
};

const addArrow = function (a, b) {
	return a + b;
}

// Example 1

if (!numProducts) deleteShoppingCart(); // prints "All products deleted" as numProducts is undefined at this level

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted');
}

/*
	Conclusion:

	1. Don't use var use let or const instead.
	2. Declare variables at the top.
	3. Always declare all the functions and use them after declaration even if they are just 
	   function declaration which are hoisted.
*/

// Example 2

var x = 1;
const y = 2;
let z = 3;

console.log(x === window.x); // true, var variables become part of the global window object 
console.log(y === window.y); // false
console.log(z === window.z); // false




















