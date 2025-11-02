#!/usr/bin/env node
import process from 'node:process';
import {setTimeout as delay} from 'node:timers/promises';
import meow from 'meow';
import parseDuration from 'parse-duration-ms';

const cli = meow(`
	Usage
	  $ delay <duration>

	Examples
	  $ delay 4.3 && echo 🦄
	  $ delay 2s && echo 🦄
	  $ delay 500ms && echo 🦄
	  $ delay 1m 30s && echo 🦄

	The duration can be a number in seconds or a human-readable duration like "1h 30m".
`, {
	importMeta: import.meta,
});

if (cli.input.length === 0) {
	console.error('Specify the delay duration');
	process.exit(1);
}

const input = cli.input.join(' ');

let milliseconds = parseDuration(input);

if (milliseconds === undefined) {
	const seconds = Number.parseFloat(input);
	if (!Number.isFinite(seconds)) {
		console.error('Invalid duration format');
		process.exit(1);
	}

	milliseconds = seconds * 1000;
}

await delay(milliseconds);
