'use strict';

// ######### Passing arguments: by value & by reference ##########

const flight = 'LH123';
const passenger = {
	name: 'Jonas Schmedtmann',
	passport: 1234
};

const checkIn = function(flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr. ' + passenger.name;

	if (passenger.passport === 1234) {
		console.log('Checked In');
	} else {
		console.log('Wrong passport');
	}
}

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);
/*
	1. 1st argument is a string which is a primitive type
	2. 2nd argument is an object which is a reference type
	3. In the case of primitive types a copy of the value 
	   is passed and in the case of reference type the
	   memory address is passed so the actual object gets
	   modified.
	4. In javascript there is no pass by reference actually.
	   For objects we pass the memory address of the object
	   which is a value so it is still pass by value.
*/

// ######### First class functions and Higher order functions ############

/*
	1. First class functions means functions are simply values which
		are another "datatype" of object
		a. Functions can be stored in variables or properties (such functions are called methods)
		b. functions can passed as arguments to OTHER functions
		c. Functions can be returned from other functions
		d. Other methods on the functions can be called like call, apply, bind etc

	2. Higher order functions:
		These are functions which receive functions as values or return
		a new function or do both. This is only possible because of first class
		functions feature

		a. Functions that receive functions
		b. Functions that return functions or both
*/


// ######## Call and Apply Methods #############


const lufthansa = {
	airline: 'Lufthansa',
	iatacode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(`${name} has booked a seat on ${this.airline} flight 
			${this.iatacode}${flightNum}`);
		this.bookings.push({
			flight: `${this.iatacode}${flightNum}`,
			name
		});
	}
};

lufthansa.book('123', 'Jonas Schmedtmann');
lufthansa.book('456', 'Akshay C');
console.log(lufthansa);

const eurowings = {
	airline: 'Eurowings',
	iatacode: 'EW',
	bookings: [],
	/*
		 Copying this function into eurowings object to use it 
		 in its context is bad practice so store the function 
		 in a separate variable.
	*/
};

const book = lufthansa.book;

// You get an error because of this keyword being undefined
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');

const flightData = [23, 'Sarah Williams'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(lufthansa, 24, 'Mary Cooper');
book.apply(lufthansa, flightData);
console.log(lufthansa);


// ####### Using the bind method ##########

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(12, 'Stephanie');
bookLH(23, 'Mac');

// Partially setting flightNum data so only other args
// have to passed (Partial Applications)
// Order of args is IMPORTANT
const bookE23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');

// Using bind with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
	console.log(this);

	this.planes++;
	console.log(this.planes);
}

/*
	In this case the this keyword will point to the target HTML element
*/
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

/*
	In this case the this keyword will point to lufthansa object
*/
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + (rate*value);
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// ######### Immediately invoked function expressions #############


(function() {
	console.log('This will run only once!');
})();

(() => {
	console.log('This will also run only once');
})();



// ############### Closures (Most important) ##############

/*
	Closures is based on this idea:
		Any function will have access to the variable environment of 
	the execution context where it was created so the returned function 
	will still have access to passengerCount in below closure.

	Variable environment attached to the function exactly as it was
	at the time and place the function was created.
*/

const secureBooking = function() {
	let passengerCount = 0;

	return function() {
		passengerCount++;
		console.log(`${passengerCount} passengers`);
	}
}

const booker = secureBooking();

booker();
booker();
booker();

// Example 1
let f;

const g = function() {
	const a = 23;

	f = function() {
		console.log(a*2);
	}
}

const h = function() {
	const b = 777;

	f = function() {
		console.log(b*2);
	}
}

g();
f();

console.dir(f);

h();
f();

console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
	const perGroup = 3;

	setTimeout(() => {
		console.log(`We are now boarding all ${n} passengers`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait*1000);

	console.log(`Boarding will start in ${wait} seconds`);
}

boardPassengers(180, 3);






































