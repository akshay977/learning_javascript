'use strict';

/*
	 1. This is a constructor function and not a regular function
	 2. It creates an object using the new keyword
	 3. Arrow functions cannot be used as constructor functions
	  	because this keyword cannot be used.
*/

const Person = function (firstName, birthYear) {
	// this keyword refers to the new empty object

	// console.log('this:', this);
	this.firstName = firstName;
	this.birthYear = birthYear;

	// ##### NEVER EVER MAKE METHODS LIKE THIS ! ########
	// In this approach for every new object this function is created
	// so multiple copies of function are created which causes performance issues

	// this.calcAge = function() {
	// 	console.log(2037 - this.birthYear);
	// }	
};

const jonas = new Person('Jonas', 1992);
// console.log(jonas);

/*
	4. Newly created jonas object is linked to prototype object
	5. constructor function automatically returns an created object
*/

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2019);

const jay = 'Jay';

// console.log(jack instanceof Person);
// console.log(jay instanceof Person);


// ############ CREATING PROTOTYPES ###############


/*
	So, first each and every function in JavaScript
	automatically has a property called prototype.
	And that includes, constructor functions.
	Every object that's created by a certain constructor 
	function will get access to all the methods and properties
	that we define on the constructors prototype property.
*/

// In this approach only 1 copy of the function exists for all the objects
// created using the constructor function
Person.prototype.calcAge = function() {
	return 2037 - this.birthYear;
}

console.log('Prototype:', Person.prototype);
console.log('Jonas age:', jonas.calcAge());
console.log(jonas);
console.log('Matilda age:', matilda.calcAge());
console.log('Jack age:', jack.calcAge());

// console.log(jonas.__proto__); // prototype object inherited from Person class
// console.log(jonas.__proto__ === Person.prototype); // true

// ####### IMPORTANT POINT ########

// Prototype object present in Person constructor function is equal to the prototype objects present
// in the objects created out of it BUT __proto__ in Person constructor function is 
// not equal to prototype of Person constructor function.


console.log(Person.prototype.isPrototypeOf(jonas)); // returns true  || jonas.__proto__ === Person.prototype
console.log(Person.prototype.isPrototypeOf(matilda)); // returns true || matilda.__proto__ === Person.prototype
console.log(Person.prototype.isPrototypeOf(Person)); // returns false || Person.__proto__ !== Person.prototype


// console.log(jonas.__proto__); // __proto__ property is the link between the object to its prototype

// Setting properties in prototype
Person.prototype.species = 'Homo sapiens';
console.log(jonas.species);
console.log(matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


// Prototypal Inheritance on Built-in objects

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
// prototype of Object is null
console.log(jonas.__proto__.__proto__.__proto__);

// constructor of Person prototype points back at Person
console.dir(Person.prototype.constructor);


const arr = [1, 2, 2, 2, 2, 6, 7];
console.log(arr.__proto__);

// Array is the constructor function to create new arrays
// whose prototype is equal to prototype property assigned to arrays 
// created by it

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // points to Object.prototype (top of prototype chain)
console.log(arr.__proto__.__proto__.__proto__); // points to null, the prototype of Object


// create new methods inside Array.prototype
Array.prototype.unique = function() {
	return [...new Set(this)];
}
// Reasons to NOT create methods like above:
// 1. New built-in methods of same function name can be created in future versions of Javascript
// 2. There maybe conflicts between functions of same name created by different developers

console.log(arr.unique());






































