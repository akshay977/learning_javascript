const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto); // Inheritance => prototype of Student class is PersonProto

StudentProto.init = function(firstName, birthYear, course) {
	PersonProto.init.call(this, firstName, birthYear);
	this.course = course;
}

StudentProto.introduce = function() {
	console.log(`This is ${this.firstName}, and I study ${this.course}`);
}

const jay = Object.create(StudentProto); // jay => prototype: StudentProto => prototype: PersonProto
jay.init('Jay', 2010, 'Computer Science');
jay.calcAge();

