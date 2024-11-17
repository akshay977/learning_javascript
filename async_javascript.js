/*
	Synchronous code:
	1. Synchronous code is executed line by line
	2. Each line of code waits for previous line to finish
	3. Long running operations block code execution

	Asynchronous code:
	1. It is executed after a task that runs in the "background" finishes
	2. Asynchronous code is non-blocking
	3. Code Execution doesn't wait for an asynchronous task to finish its work
	4. Callback functions doesn't make code asynchronous !!!

	AJAX calls:
	Asynchronous Javascript And XML: It allows you to communicate with
	remote web servers in an async way. With AJAX calls, we can request
	data from web servers dynamically.

	API:
	Piece of software that can be used by another piece of software in order
	to allow applications to talk to each other.

	XML is a data format of receiving data. Most modern APIs use JSON data format
	today

	https://restcountries.com/v3.1/name/deutschland
*/

// XMLHttpRequest: It is the most old school way of sending API requests

// Following Request code works in browser only

const getCountryAndNeighbour = function (country) {
	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
	request.send();

	request.addEventListener('load', function() {
		// this refers to the request object
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const neighbour = data.borders?.[0];
		if (!neighbour) return;

		const request2 = new XMLHttpRequest();
		request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
		request2.send();

		// Welcome to Callback Hell
		request2.addEventListener('load', function() {
			const data2 = JSON.parse(this.responseText);
			console.log(data2);
		})
	});
};

setTimeout(() => {
	console.log('1 second passed')
	setTimeout(() => {
		console.log('2 seconds passed')
		setTimeout(() => {
			console.log('3 seconds passed')
			setTimeout(() => {
				console.log('4 seconds passed')
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

// ######## Fetch API & Promises ###########

/*
	1. A promise is a container object for a future value Eg. response from a AJAX call
	2. Advantages of promises:
		a. We no longer need to rely on events and callbacks passed into async 
		   functions to handle async results
		b. Instead of nesting callbacks, we can chain promises for a sequence
		   of async operations: escaping callback hells

	3. Promise Lifecycle:
		A promise lifecycle has 4 following states which can be handled in the
		code:

		a. Pending-
			In this state the promise is not settled so it maybe fulfilled or rejected
			and the async task is still undergoing.
		b. Settled-
			In this state the promise is settled and the async task is finished with 
			success or failure
		c. Fulfilled-
			In this state the promise has succeeded in execution and received some data.
		d. Rejected-
			In this state the promise has failed in execution due to some error
	
	4. A promise has to be built to be consumed Eg. fetch API builds the promise which
		is consumed later
*/

const getCountryData = function(country) {
	fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (resp) {
		if (!resp.ok) {
			throw new Error(`Country not found (${resp.status})`);
		}
		return resp.json();
	},
	// (err) => Alert(err) // handling errors in promises
	).then(function(data) {
		console.log(data);
		const neighbour = data[0].borders[0];

		if(!neighbour) return;

		// This will create a callback hell so return the promise
		// received using fetch API so
		// DO NOT DO THIS !!!
		// fetch ('API url').then(data => {...});

		return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
	}).then(resp => {
		if (!resp.ok) {
			throw new Error(`Neighbour not found (${resp.status})`);
		}
		return resp.json()
	},
	// (err) => Alert(err) // handling errors in promises
	)
	.then(data => console.log(data))
	.catch(err => alert(err))
	.finally(() => {
		// some code which will run whether promise is fulfilled or rejected
	});
}

getCountryData('portugal');

// API endpoint for creating a new user
const apiUrl = 'https://api.example.com/users';

// Form data to be sent in the request body
const formData = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'securepassword123',
};

// Make a POST request using the Fetch API
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(newUserData => {
    // Process the newly created user data
    console.log('New User Data:', newUserData);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Event loop in practice

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('resolved promise 1').then(res => 
console.log(res));

Promise.resolve('resolved promise 2').then(res => {
	for (let i = 0; i < 1000000; i++) {}
	console.log(res);
}); // very time consuming microtask
console.log('Test end');

/*
	Output:
	
	Test start
	Test end
	resolved promise 1
	resolved promise 2
	0 sec timer

	REGARDLESS of the time consuming microtask (promise 2)
	until all microtasks are executed callbacks queue is
	not executed

	There are 2 queues: Microtasks queue and Callbacks queue
	Microtasks queue is given higher priority over callbacks
	queue so after execution of entire microtasks queue
	callbacks queue is executed.

	1. Microtasks queue is about callbacks passed in promises
	2. Callback queues is about callbacks passed in setTimeout,
		setInterval etc
*/

// ########## Building a simple promise ##########


const lotteryPromise1 = new Promise((resolve, reject) => {
	if (Math.random() >= 0.5) {
		resolve('You win !');
	} else {
		reject('You lose !');
	}
});

const lotteryPromise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (Math.random() >= 0.5) {
			resolve('You win !');
		} else {
			reject('You lose !');
		}
	}, 2000);
});


lotteryPromise1.then(res => console.log(res)).catch(err => console.error(err));
lotteryPromise2.then(res => console.log(res)).catch(err => console.error(err));

/*
	Promisifying means converting a callbacks based async behaviour
	to a promise based async behaviour
*/

// Promisifying setTimeout
const wait = function(seconds) {
	return new Promise(function (resolve) {
		setTimeout(resolve, seconds*1000);
	});
}

wait(2).then(res => {
	console.log('2 secs elapsed!');
	return wait(1);
}).then(res => {
	console.log('1 sec elapsed!');
});

Promise.resolve('abc').then(x => console.log(x));
Promise.reject('Error ocurred').catch(err => console.log(err));
Promise.reject(new Error('error ocurred')).catch(err => console.log(err));

const getJSON = async function(url, errorMsg = 'Error ocurred') {
	try {
		const resp = await fetch(url);
		if (!resp.ok) {
			throw new Error(`Country not found (${resp.status})`);
		}
		return resp.json();
	} catch (err) {
		console.log('json error', err);
	}
}

// Running promises in parallel to get results in any order
/*
	The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
	This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
	with an array of the fulfillment values. It rejects when any of the input's promises rejects, 
	with this first rejection reason.
*/

const get3Countries = async function(c1, c2, c3) {
	try {
		// const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
		// const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
		// const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

		const data = await Promise.all([
			getJSON(`https://restcountries.com/v3.1/name/${c1}`),
			getJSON(`https://restcountries.com/v3.1/name/${c2}`),
			getJSON(`https://restcountries.com/v3.1/name/${c3}`)
		]);

		console.log(data.map(d => d[0].capital[0]));
	} catch (err) {
		console.error(err);
	}
}

get3Countries('portugal', 'canada', 'tanzania');

/*
	Promise.race is used to execute a group of promises
	where if anyone promise is settled (fulfilled or rejected)
	the execution is completed.

	This returned promise settles with the eventual state of the first promise that settles.
*/

(async function() {
	const resp = await Promise.race([
		getJSON(`https://restcountries.com/v3.1/name/italy`),
		getJSON(`https://restcountries.com/v3.1/name/egypt`),
		getJSON(`https://restcountries.com/v3.1/name/mexico`)
	]);

	console.log(resp);
})();

const timeout = (s) => new Promise((_, reject) => {
	setTimeout(() => reject(new Error('request took too long')), s*1000)
});

(async function() {
	const resp = await Promise.race([
		getJSON(`https://restcountries.com/v3.1/name/tanzania`),
		timeout(1)
	]);

	console.log(resp);
})();


/*
	Promise.allSettled:
	It takes in array of promises and returns an array of settled
	promises whether the promise got fulfilled or rejected.
	Promise.allSettled doesn't short circuit like Promise.all
	where if 1 promise is rejected other promises are not
	fulfilled
*/

Promise.allSettled([
	Promise.resolve('success 1'),
	Promise.resolve('success 2'),
	Promise.reject('error 1'),
]).then(res => console.log(res));

/*
	Promise.any takes in an array of promises and returns 
	the 1st "fulfilled" promise randomly.
*/

Promise.any([
	Promise.resolve('success 1'),
	Promise.resolve('success 2'),
	Promise.reject('error 1'),
]).then(res => console.log(res));



































