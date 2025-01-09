const Person = function(firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
}
console.log('Person prototype: ', Person.prototype);

Person.prototype.calcAge = function() {
	console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
	// this.firstName = firstName;
	// this.birthYear = birthYear;

	// In a regular function call this keyword is set to undefined so use call
	Person.call(this, firstName, birthYear);
	this.course = course;
}

/*
	For Student to inherit Person class the prototype of Student.prototype
	should have a object of prototype Person.prototype
*/
console.log(Student.prototype);
Student.prototype = Object.create(Person.prototype); // CORRECT
// Student.prototype = Person.prototype 
// WRONG: as Student.prototype will directly point to Person.prototype
// and will not inherit it

Student.prototype.introduce = function() {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student; // Points the student constructor back to Student instead of Person class
console.dir(Student.prototype.constructor);

