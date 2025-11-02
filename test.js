import test from 'ava';
import {execa} from 'execa';
import timeSpan from 'time-span';

test('seconds as number', async t => {
	const end = timeSpan();
	await execa('./cli.js', ['2']);
	t.true(end.seconds() >= 2);
});

test('milliseconds format', async t => {
	const end = timeSpan();
	await execa('./cli.js', ['2000ms']);
	t.true(end.seconds() >= 2);
});

test('seconds format', async t => {
	const end = timeSpan();
	await execa('./cli.js', ['2s']);
	t.true(end.seconds() >= 2);
});

test('combined format', async t => {
	const end = timeSpan();
	await execa('./cli.js', ['1s500ms']);
	const elapsed = end.seconds();
	t.true(elapsed >= 1.5);
});

test('multiple arguments', async t => {
	const end = timeSpan();
	await execa('./cli.js', ['1s', '500ms']);
	const elapsed = end.seconds();
	t.true(elapsed >= 1.5);
});

test('decimal number in seconds', async t => {
	const end = timeSpan();
	await execa('./cli.js', ['1.5']);
	const elapsed = end.seconds();
	t.true(elapsed >= 1.5);
});

test('invalid format throws error', async t => {
	await t.throwsAsync(
		async () => execa('./cli.js', ['invalid']),
		{message: /Invalid duration format/},
	);
});

test('no input throws error', async t => {
	await t.throwsAsync(
		async () => execa('./cli.js', []),
		{message: /Specify the delay duration/},
	);
});
