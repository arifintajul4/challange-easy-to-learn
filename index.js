function arraySplit(array) {
  let result = '';
  for (let i = 0; i < array.length / 2; i++) {
    result += `${array[i]} -> ${array[array.length - 1 - i]} -> ${Math.abs(array[i] - array[array.length - 1 - i])}\n`;
  }
  return result;
}

const arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
const output = arraySplit(arr);
console.log(output);
