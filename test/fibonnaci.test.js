import test from 'ava';
import fibonnaciGenerator from '../src/fibonnaci.js';

test('recursive solution', t => {
  const fibbonacci = fibonnaciGenerator();

  t.is(fibbonacci.next().value, 0);
  t.is(fibbonacci.next().value, 1);
  t.is(fibbonacci.next().value, 1);
  t.is(fibbonacci.next().value, 2);
  t.is(fibbonacci.next().value, 3);
  t.is(fibbonacci.next().value, 5);
  t.is(fibbonacci.next().value, 8);
  t.is(fibbonacci.next().value, 13);
});
