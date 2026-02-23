// STARTER CODE

function calculateTotal(numbers) {
 return numbers.reduce((total, num) => total + num, 0);
 
  }

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1));
console.log(calculateTotal(data2));
