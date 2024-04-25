function calculateAverage(numbers) {
  let sum = 0;
  let average = 0;
  numbers.forEach((element) => {
    sum += element;
  });

  average = sum / numbers.length;
  return average;
}

console.log(calculateAverage([10, 20, 30, 40, 50]));
console.log(calculateAverage([30, 40, 50, 60, 70]));
