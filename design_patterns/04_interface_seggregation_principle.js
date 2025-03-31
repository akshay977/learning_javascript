class Machine {
	constructor() {
		if (this.constructor.name === 'Machine') 
			throw new Error('Machine is abstract');
	}

	print(doc) {}
	scan(doc) {}
	fax(doc) {}
}

class MultiFunctionPrinter extends Machine {
	print(doc) {
		// do something
	}

	scan(doc) {
		// do something
	}

	fax(doc) {
		// do something
	}
}

/*
	OldFashionedPrinters cannot scan or fax so those
	methods need not be implemented and cannot be left blank
	or no errors should be thrown as that is bad approach.
	So, here comes the interface seggregation principle.
*/
class OldFashionedPrinter extends Machine {
	print(doc) {
		// do something
	}
}


/*
	As per Interface Seggregation Principle, Machine class 
	(abstract interface) is split up into multiple classes
	(abstract interface) and used.
*/

class Printer {
	constructor() {
		if (this.constructor.name === 'Printer') 
			throw new Error('Printer is abstract');
	}

	print(doc) {}
}

class Scanner {
	constructor() {
		if (this.constructor.name === 'Scanner') 
			throw new Error('Scanner is abstract');
	}

	scan(doc) {}
}

/*
	In the case of photocopier multiple inheritances
	are not possible so PhotoCopier class contains
	methods print and scan without inheritance
*/
class PhotoCopier {
	print() {}
	scan() {}
}

