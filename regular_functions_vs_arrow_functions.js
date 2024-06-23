// Pitfalls of using this keyword in regular functions and arrow functions

const jonas = {
	firstName: 'jonas',
	year: 1991,
	calcAge: function() {
		console.log(this);
		console.log(2037 - this.year);
	},
	greet: () => {
		console.log(`Hey, ${this.firstName}`);
	}
};