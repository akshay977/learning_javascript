// exporting module
console.log('Exporting module');

/*
	Following variables are scoped to this module 
	and cannot be accessed in other modules directly
*/

const shippingCost = 0;
const cart = [];

export const addToCart = function(product, quantity) {
	cart.push({ product, quantity });
	console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 200;
const totalQuantity = 12;

export { totalPrice, totalQuantity as qty };