console.log(this); // points to the global window object in the browser in "sloppy" mode

const calcAge1 = function(birthYear) {
	console.log(2037 - birthYear);
	console.log(this); // this = undefined in "strict" mode OR this = window object in "sloppy" mode
}

calcAge1();

const calcAge2 = birthYear => {
	console.log(2037 - birthYear);
	console.log(this); // this = window object, arrow functions have the this keyword = this keyword of outer execution context.
}

calcAge2();


const jonas = {
	year: 1991,
	calcAge: function() {
		console.log(this); // this keyword points to the owner of the function i.e jonas object
	}
};

jonas.calcAge();

const matilda = {
	year: 1991,
};

matilda.calcAge = jonas.calcAge;

matilda.calcAge(); // this keyword points to the owner of the function i.e matilda object

const f = jonas.calcAge;

f(); // throws an error that this keyword is undefined as the function doesn't have an owner.

