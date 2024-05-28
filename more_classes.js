/* 
	True encapsulation cannot be done in Javascript.
	It can only be marked with _ to notify that it is
	a protected property but the data can still be accessed.

	There are 4 (actually 8) different kinds of fields and
	methods:

	1. Public fields
	2. Private fields
	3. Public methods
	4. Private methods
	5. Static methods

	Classes are not hoisted, which means you cannot use a
	class before it is declared
*/

class Account {
	// 1) Public fields: These are present in instances not in prototype
	locale = navigator.language;

	// 2) Private fields
	#movements = [];
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;

		// properties with _ are protected properties and are
		// not meant to be accessed by developers
		this.#pin = pin;
		// this.#movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening the account, ${owner}`);
	}

	getMovements() {
		return this.#movements;
	}

	// Public APIs/Public Methods
	deposit(val) {
		this.#movements.push(val);
		return this; // this keyword is returned to chain methods
	}

	withdraw(val) {
		this.deposit(-val);
		return this; // this keyword is returned to chain methods
	}

	requestLoan(val) {
		// if (this.#approveLoan(val)) {
		if (this._approveLoan(val)) {
			this.deposit(val);
			console.log('Loan approved');
			return this; // this keyword is returned to chain methods
		}
	}

	static helper() {
		console.log('static helper function!');
	}

	// Private methods
	// #approveLoan(val) {
	_approveLoan(val) {
		return true;
	}
}

const acc1 = new Account('Jay', 'INR', 2000);

// acc1.movements.push(140); // properties and methods should NOT be accessed directly like this so USE METHODS!
// acc1.movements.push(-35);

acc1.deposit(200);
acc1.withdraw(100);
console.log(acc1);
console.log(acc1.getMovements());

// Chaining methods using the this keyword
acc1.deposit(100).deposit(400).withdraw(1000).requestLoan(250);