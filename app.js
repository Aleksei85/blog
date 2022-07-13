// function sum(a, b) {
//   let c = a + b;
//   return c;
// }
// console.log(sum(15, 15));
// console.log(sum(15, 12));
// console.log(sum(15, 10));

function foo(a, b, c) {
  if (c) {
    return a > b ? a : b;
  } else {
    return a < b ? a : b;
  }
}

console.log(foo(2, 3, true));
