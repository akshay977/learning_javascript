class Rectangle {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	get area() {
		return this._width*this._height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	set width(value) {
		this._width = value
	}

	set height(value) {
		this._height = value;
	}

	toString() {
		return `${this._width}x${this._height}`;
	}
}

class Square extends Rectangle {
	constructor(size) {
		super(size, size);
	}

	set width(value) {
		this._width = this._height = value;
	}

	set height(value) {
		this._width = this._height = value;
	}
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());

let sq = new Square(5);
// console.log(sq.toString());
// sq.width = 10;
// console.log(sq.toString());

/*

	Problem:
	You can have functions which work with the base class
	but won't work with derieved class in such case dereived
	class is not needed.

	The Liskov Substitution Principle (LSP), a core concept in 
	object-oriented design, states that subtypes should be substitutable 
	for their base classes without altering the correctness of the program. 
	In simpler terms, if a subclass inherits from a superclass, it should be 
	usable in any context where the superclass is used without causing 
	unexpected errors or breaking the expected behavior.

	https://stackoverflow.com/questions/56860/what-is-an-example-of-the-liskov-substitution-principle

	Solution:
	Since square is a special case of rectangle, making separate
	class for it is bad approach. Rather you should create a
	method which says its a square.
*/

let useIt = function(rc) {
	let width = rc._width;
	rc.height = 10;
	console.log(`Expected area of ${10*width}, got ${rc.area}`);
};

useIt(rc);
useIt(sq);




























