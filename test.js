import test from 'ava';
import execa from 'execa';
import timeSpan from 'time-span';

test('main', async t => {
  const end = timeSpan();
  await execa('./cli.js', [2]);
  t.true(end.seconds() >= 2);
});
