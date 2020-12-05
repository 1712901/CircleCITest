const sum = require('./MyProject')

test('adds 1 + 2 to equal 3',sumTest);
test('adds 1 + 2 to equal 3',sumTest2);

function sumTest(){
  expect(sum(1,2)).toBe(3);
};
function sumTest2(){
  expect(sum(3,2)).toBe(5);
};