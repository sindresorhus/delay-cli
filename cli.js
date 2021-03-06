#!/usr/bin/env node
'use strict';
const meow = require('meow');

const cli = meow(`
	Usage
	  $ delay <seconds>

	Example
	  $ delay 4.3 && echo 🦄
`, {
	input: {
		type: 'number'
	}
});

const [seconds] = cli.input;

if (seconds === undefined) {
	console.error('Specify the delay');
	process.exit(1);
}

setTimeout(() => {}, seconds * 1000);
