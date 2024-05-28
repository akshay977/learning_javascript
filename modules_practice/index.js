// importing module
/*
	imported modules are executed first
*/

// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log({ price, qty });

import * as ShoppingCart from './shoppingCart.js';

console.log('importing module');
console.log({ShoppingCart});
