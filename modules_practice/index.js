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

// ##### Bundling project using commonjs or ES6 modules #####

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

// ##### Configuring Babel and Polyfilling #####

/*
	1. Babel is a javascript compiler used to transpile the modern code to ES5 code 
	   and make it backwards compatible so that older browsers can also view the web app. 
	   Parcel already uses Babel to transpile the code and it can be configured to define 
	   exactly what browsers should be supported.

	2. Babel uses plugins or presets to transpile the code to ES5. Plugins are used to convert
	   specific code blocks like arrow functions, classes etc to convert to ES5. If you use a 
	   plugin Babel specifically converts that code to ES5 and leaves everything else but we
	   usually want to convert lot of code to ES5 so we use presets.

	3. Presets are a group of plugins bundled together. Presets automatically select which 
	   javascript features should be compiled based on browser support.

	4. Polyfilling is used to transpile javascript features which simply cannot be converted
	   to ES5. Promises, array methods like find, filter we can polyfill them. Polyfilling 
	   basically recreates the defined function and makes it available in this bundle so
	   that the codes can use it.

	5. Babel used to do the polyfilling but now we should use 'core-js/stable' library which
	   can be installed by npm.

	6. On importing core-js library find function is not replaced with in the bundle with another code
	   but it is redefined to make it work in the bundle. core-js polyfills everything in the project
	   even if we don't need it. We can cherry pick the features we want to polyfill so that we can
	   reduce the bundle size.

	7. We need to install regenerator-runtime to polyfill async functions as it is not polyfilled by core-js.
*/


// import 'core-js/stable';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

// imports are hoisted to the top of the file. 
// polyfilling async functions
import 'regenerator-runtime/runtime';