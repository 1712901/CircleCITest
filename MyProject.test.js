const sum = require('./MyProject')

test('TC1',sumTest);
test('TC2',sumTest2);

function sumTest(){
  expect(sum(1,2)).toBe(3);
};
function sumTest2(){
  expect(sum(3,2)).toBe(15);
};