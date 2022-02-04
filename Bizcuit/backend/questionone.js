function sum(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a)) return 'isErrot';
  if (isNaN(b)) return 'isErrot';
  const sum = a + b;
  return sum.toString();
}
const result = sum('12', '2');
console.log(result);
