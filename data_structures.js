// NULLISH COALESCING OPERATOR

/*
	Nullish coalescing operator treats null
	and undefined only as falsy values compared to
	|| operator which treats null, undefined, '', 0
	as falsy values
*/

let total = 0;
let count = 10;
console.log(total ?? count); // 0
console.log(total || count); // 10

const obj = {
	"thu": {close: 10, open: 1},
	"fri": {close: 9, open: 7},
	"wed": {close: 12, open: 6},
};

const openingHours = Object.entries(obj);

for ([day, {close, open}] of openingHours) { // destructuring
	console.log(`Day: ${day} close: ${close} open: ${open}`);
}


// ######### Sets ##########

/*
	1. A set can only have unique values and not duplicate values
	2. A set can hold mixed datatype values.
	3. An iterable should be passed into new Set like array, string etc.
	4. Values cannot be retrieved from a set so to do that use an
		array
*/

const ordersSet = new Set([
	'Pizza',
	'Pizza',
	'Pizza',
	'Risotto',
	'Candy'
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

console.log(ordersSet);
ordersSet.delete('Pizza');
console.log(ordersSet);
// ordersSet.clear();

for (const order of ordersSet) console.log(order);

const arr = [1, 1, 2, 2, 4, 5];
const uniqueArr = [...new Set(arr)];

console.log(new Set('akshayy').size); // total count of unique letters in the set

// ########## Maps ############

/*
	1. Maps are more useful than Sets
	2. Maps store key-value pairs like Objects
	3. The difference between Maps and Objects is that
		in objects the keys can only be strings but in
		maps the keys can be an array, string, booleans or other maps
	4. Use objects when you need to store functions as values as in 
		maps that is not possible.
*/

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23)
	.set(true, 'We are open')
	.set(false, 'We are closed')

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest);
console.log(`size: ${rest.size}`);

const rest2 = new Map();
rest2.set(document.querySelector('h1'), 'Heading');
console.log(rest2);
console.log(rest2.size);

const arr1 = [1, 2];
console.log('arr', rest2.get(arr1));
console.log('arr', rest2.get([1, 2])); 
// This won't work as this array points to different memory
// compared to arr1


// Using Maps to make a Quiz App
const question = new Map([
	['question', 'What is the best programming language in the world ?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'Javascript'],
	['correct', 3],
	[true, 'You are correct!'],
	[false, 'Try again!']
]);
console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


console.log(question.get('question'));
for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(`You answered ${answer}`);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);















































