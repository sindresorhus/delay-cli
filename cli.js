#!/usr/bin/env node
import process from 'node:process';
import {setTimeout as delay} from 'node:timers/promises';
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

await delay(seconds * 1000);
