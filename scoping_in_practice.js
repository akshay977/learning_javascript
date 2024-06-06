'use strict';

// function calcAge(birthYear) {
// 	const age = 2037 - birthYear;
// 	console.log(firstName);
// 	return age;
// }

function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		// const output = `${firstName}, You are ${age}, born in ${birthYear}`;
		let output = `${firstName}, You are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			const firstName = 'Steven'; // New variable created with same name as outer scope variable
			const str = `Oh, you are a millenial, ${firstName}`;

			console.log(str);

			function add(a, b) {
				return a + b;
			}

			// output = 'New output'; // This overwrites the output variable
			const output = 'New output!' // New variable is created and it doesn't overwrite the output of previous scope
		}
		console.log(millenial); // prints true as "var" variables are function scoped
		// console.log(add(2, 4)); // Error as functions are block scoped (only in strict mode)
	}
	printAge();

	return age;
}

const firstName = 'Akshay C';
calcAge(1996);