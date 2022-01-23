#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';

const cli = meow(`
	Usage
	  $ delay <seconds>

	Example
	  $ delay 4.3 && echo 🦄
`, {
	importMeta: import.meta,
	input: {
		type: 'number',
	},
});

const [seconds] = cli.input;

if (seconds === undefined) {
	console.error('Specify the delay');
	process.exit(1);
}

// TODO: Use `import {setTimeout} from 'node:timers/promises';` when targeting Node.js 16.
setTimeout(() => {}, seconds * 1000);
