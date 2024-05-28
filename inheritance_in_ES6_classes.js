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
		if (name.includes(' ')) this._fullName = name;
		else console.log(`ERROR: ${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	static hey() {
		console.log('Hey there!');
	}

	greet() {
		console.log(`Hey, ${this.fullName}`);
	}
}

class StudentCl1 extends PersonCl {
	// constructor(fullName, birthYear, course) {
	// 	/*
	// 	 	super() calls the contructor function of parent class and HAS TO BE CALLED FIRST!.
	// 	 	constructor props should be passed to it.
	// 	*/
	// 	super(fullName, birthYear); 
	// }
}

const martha = new StudentCl1('Martha Jonas', 1999); // Using StudentCl without constructor is also correct.
// console.log(martha);						  // Parent class is also used in this approach

class StudentCl2 extends PersonCl {
	constructor(fullName, birthYear, course) {
		/*
		 	super() calls the contructor function of parent class and HAS TO BE CALLED FIRST!.
		 	constructor props should be passed to it.
		*/
		super(fullName, birthYear, course);
		console.log('Super: ', super);
		this.course = course;
	}

	introduce() {
		console.log(`My name is ${this.fullName} and I study ${this.course}`);
	}

	// Overwwriting the calcAge method of Parent class
	calcAge() {
		console.log(`I am ${2037 - this.birthYear} years old, but as a student I feel like ${2037 - this.birthYear + 10}`)
	}
}

const sarah = new StudentCl2('Sarah Jonas', 1998, 'Computer Science');
// console.log(sarah.fullName);
sarah.introduce();
sarah.calcAge();
console.log(sarah);

// Prototype Chain

/*
	Before Inheritance:
		The prototype of StudentCl2 class is equal to Object.prototype
	After inheritance:
		1. The prototype of StudentCl2 class is equal to an Object with parent class as prototype and 
		    will contain introduce() and greet() methods.
		2. The prototype of prototype of StudentCl2 class contains methods of PersonCl.
*/





















