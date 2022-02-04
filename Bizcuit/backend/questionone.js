function sum(a, b) {
  if (isNaN(Number(a))) return 'isError';
  if (isNaN(Number(b))) return 'isError';
  const sum = Number(a) + Number(b);
  return sum.toString();
}
const result = sum('12', '2');
console.log(result, typeof result);
