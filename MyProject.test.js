const sum = require('./MyProject');

test('adds 1 + 2 to equal 3',sumTest(1,2));
test('adds 2 + 2 to equal 4',sumTest(2,2));
test('adds 2 - 2 to equal 0',sumTest(2,-2));

function sumTest(a,b){
  expect(sum(a,b)).toBe(a+b);
};