// Pitfalls of using this keyword in regular functions and arrow functions

// var firstName = 'Akshay';

const jonas = {
	firstName: 'jonas',
	year: 1991,
	calcAge: function() {
		console.log(this);
		console.log(2037 - this.year); // Here this keyword refers to the jonas object
	},
	// greet: () => {
	// 	console.log(`Hey, ${this.firstName}`); // Here this keyword refers to the global window object
	// }
	greet: function () {
		console.log(`Hey, ${this.firstName}`); // Here this keyword refers to the jonas object
	}
};

jonas.greet(); // prints Hey, Akshay
console.log(this.firstName); // prints undefined

/*
	NOTE:
	1. Never use an arrow function as you don't have to think about the this keyword instead use
	   normal functions.
*/

/*
	2nd Pitfall of this keyword is when you have a function inside a method
*/

const jonas = {
	firstName: 'jonas',
	year: 1991,
	calcAge: function() {
		console.log(2037 - this.year); // Here this keyword refers to the jonas object

		const isMillenial = function() {
			console.log(this.year >= 1981 && this.year <= 1996); // this keyword is undefined
		}
		isMillenial(); // regular function call where this keyword is undefined

		// Solution 1
		const self = this;
		const isMillenial2 = function() {
			console.log(self.year >= 1981 && self.year <= 1996); // self = this so no error here
		}
		isMillenial2(); // regular function call where this keyword is undefined

		// Solution 2
		const isMillenial3 = () => {
			console.log(this.year >= 1981 && this.year <= 1996); // this keyword is inherited from this keyword of outer function
		}
		isMillenial3(); // regular function call where this keyword is undefined
	}
};

/*
	Arguments keyword is an array variable present only in regular functions and not present in arrow functions
*/

const addExpr = function(a, b) {
	console.log(arguments);
	return a + b;
}

addExpr(1, 2);
addExpr(1, 2, 3, 4); // 3, 4 can be accessed from the arguments keyword

var addArrow = (a, b) => {
	console.log(arguments) // prints Reference error: arguments is not undefined
	return a + b
};

/*
	Solution for arrow functions to get arguments keyword
*/

var bar = (a, arguments) => return a;
var bar1 = (a, ...arguments) => console.log(arguments);
var bar2 = (a, b, ...arguments) => console.log(a + b);















