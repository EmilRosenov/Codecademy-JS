function findMax(numbers) {
  let max = Math.max(...numbers);
  return max;
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([3, 7, 5, 11, 4]));
