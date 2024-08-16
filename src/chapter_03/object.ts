const obj1 = {
  foo: 123,
  bar: 456,
  baz: 789,
};

const obj2 = {
  ...obj1,
};

console.log(obj2);

const foo = { num: 1234 };
const bar = foo;
const baz = { num: 1234 };

console.log(foo === bar); // true
console.log(foo === baz); // false
