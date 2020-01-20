import test from 'ava';
import execa from 'execa';
import timeSpan from 'time-span';

test('main', async t => {
  const end = timeSpan();
  await execa('./cli.js', [2.5]);
  const result = end.seconds();
  t.true(result > 2);
  t.true(result < 3);
});
