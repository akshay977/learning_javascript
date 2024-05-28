// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// methods added are automatically stored in the prototype object
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	set fullName(name) {
		// console.log(name);
		if (name.includes(' ')) this._fullName = name;
		else console.log(`ERROR: ${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	// STATIC METHODS
	static hey() {
		console.log('Hey there!');
	}

	// greet() {
	// 	console.log(`Hey, ${this.firstName}`);
	// }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log('full name: ', jessica.fullName);
console.log(jessica);
jessica.calcAge();
PersonCl.hey();

// console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function() {
	console.log(`Hey, ${this.fullName}`);
}

jessica.greet();

// 1. Classes are not HOISTED => They have to be declared first and then used
// 2. Classes are first class citizens => They can be passed into and returned from functions
// 3. Classes are executed in strict mode



// ############## SETTERS AND GETTERS ################

const account = {
	owner: 'Jonas',
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	}
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);


// ################ STATIC METHODS #################

/*

Some functions like Array.from are available in their constructor
functions and not to the object array

*/

const Person2 = function(firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
}

Person2.hey = function() {
	console.log('Hey There!');
}

const jonas2 = new Person2('Jonas 2', 1998);
Person2.hey();
// jonas2.hey(); Error as hey function is not present


// ############### USING Object.create ################

const PersonPrototype = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
};

const steven = Object.create(PersonPrototype);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonPrototype);

const sarah = Object.create(PersonPrototype);
sarah.init('Sarah', 1997);
sarah.calcAge();

















