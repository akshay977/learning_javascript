// importing module
/*
	imported modules are executed first
*/

// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log({ price, qty });

import * as ShoppingCart from './shoppingCart.js';

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

console.log('importing module');
console.log({ShoppingCart});


/*
	1. A dev dependency is a package which is used to build the application in dev mode
	   and is not needed in production so it is part of "devDependencies" in package.json.

	2. npx parcel index.html: This command invokes parcel to start bundling the project 
	   with entry point as index.html. The project is still in development, dead code 
	   elimination and file compression is not done in this stage. This is not the final bundle.

	3. parcel creates the dist folder with the HTML file and the imported script file. It loads this
	   bundle in a development server so we are still in development phase.

	4. On saving the file every single time, parcel bundles the project again and reloads the file
	   in the browser using live server so instead of that we use hot module replacement feature in parcel.

	5. Hot module replacement feature bundles the project and loads the file into browser without reloading
	   the page. The benefit here is the state of the application is maintained while the module is modified
	   and loaded.

	6. npx parcel build index.html: This builds the final bundle where the dead code is eliminated
	   and files are compressed to improve performance. This final bundle will be shipped to the browser
	   and the users in production.
*/

// This code enables hot module replacement and it doesn't make it to production. Only parcel can 
// understand it.
if (module.hot) {
	module.hot.accept()
}