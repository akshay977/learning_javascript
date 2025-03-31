let Size = Object.freeze({
	small: 'small',
	medium: 'medium',
	large: 'large'
});

let Color = Object.freeze({
	red: 'red',
	green: 'green',
	blue: 'blue',
});

class Product {
	constructor(name, color, size) {
		this.name = name;
		this.color = color;
		this.size = size;
	}
}

class ProductFilter {
	filterByColor(products, color) {
		return products.filter(el => el.color === color);
	}

	filterBySize(products, size) {
		return products.filter(el => el.size === size);
	}

	/*
		1. Very inefficient approach because as
		more methods will be added to filter by
		various parameters in diferent combinations
		which will lead to "state space explosion"

		2. State space explosion will lead large no.
		of states or variables.
	*/
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];
let pf = new ProductFilter();

console.log(`Green products (old):`);
for (let p of pf.filterByColor(products, Color.green))
	console.log(` * ${p.name} is green`);


/*
	Open closed principle states that classes are open
	for extension and closed for modification.
	By adding more methods to above ProductFilter we
	are modifying it not extending it so that is
	bad approach.

	Below is the solution:
*/

class ColorSpecification {
	constructor(color) {
		this.color = color;
	}

	isSatisfied(item) {
		return item.color === this.color;
	}
}

class SizeSpecification {
	constructor(size) {
		this.size = size;
	}

	isSatisfied(item) {
		return item.size === this.size;
	}
}

// Specifications can be combined using this AndSpecification class
// Just like AndSpecification, you can create OrSpecification class
class AndSpecification {
	constructor(...specs) {
		this.specs = specs;
	}

	isSatisfied(item) {
		return this.specs.every(x => x.isSatisfied(item));
	}
}

class BetterFilter {
	filter(items, spec) {
		return items.filter(el => spec.isSatisfied(el));
	}
}

let bf = new BetterFilter();
console.log('Green products (new):');

for (let p of bf.filter(products, new ColorSpecification(Color.green)))
	console.log(` * ${p.name} is green`);

console.log('Large and green products (new):');

let spec = new AndSpecification(
	new ColorSpecification(Color.green),
	new SizeSpecification(Size.large)
);

for (let p of bf.filter(products, spec))
	console.log(` * ${p.name} is large and green`);
























