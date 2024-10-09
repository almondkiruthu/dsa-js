function findAllDuplicateNumbers(nums) {
  let i = 0;
  const duplicateNumbers = [];
  while (i < nums.length) {
    let currentNumber = nums[i];
    let correctIndex = currentNumber - 1;
    if (currentNumber !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  for (let index = 0; index < nums.length; index++) {
    const currentNumber = nums[index];
    if (currentNumber !== index + 1) {
      duplicateNumbers.push(nums[index]);
    }
  }

  return duplicateNumbers;
}

console.log(findAllDuplicateNumbers([3, 4, 4, 5, 5]));
console.log(findAllDuplicateNumbers([5, 4, 7, 2, 3, 5, 3]));
