let Relationship = Object.freeze({
	parent: 0,
	child: 1,
	sibling: 2
});

class Person {
	constructor(name) {
		this.name = name;
	}
}

// LOW LEVEL MODULE

// This is equivalent of abstract class
class RelationshipBrowser {
	constructor() {
		if (this.constructor.name === 'RelationshipBrowser')
			throw new Error('RelationshipBrowser is abstract');
	}

	findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser {
	constructor() {
		super();
		this.data = [];
	}

	addParentAndChild(parent, child) {
		this.data.push({
			from: parent,
			type: Relationship.parent,
			to: child
		});
	}

	findAllChildrenOf(name) {
		return this.data.filter(r => r.from.name === name && r.type === Relationship.parent).map(el => el.to);
	}
}

// HIGH LEVEL MODULE
/*
	1. Dependency inversion principle basically states
	that high level modules such as Research
	should not depend on low level modules such
	as Relationships directly instead they should depend
	on abstractions like abstract classes or interfaces

	2. abstract class and interfaces are not available in javascript.

	3. In this module, we are doing some high level
	research on above people and their relationships.
*/
class Research {
// 	constructor(relationships) {
// 		// find all children of John
// 		let relations = relationships.data;
// 		for (let rel of relationships.filter(r => r.from.name === 'John' && r.type === Relationship.parent)) {
// 			console.log(`
// 				John has a child named ${rel.to.name}
// 			`);
// 		}
// 	}

	constructor(browser) {
		for (let p of browser.findAllChildrenOf('John'))
			console.log(`John has a child named ${p.name}`);
	}
}


let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);


new Research(rels);