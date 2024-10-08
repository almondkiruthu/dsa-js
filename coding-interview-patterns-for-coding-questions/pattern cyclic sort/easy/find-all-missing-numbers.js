function findMissingNumbers(nums) {
  const missingNumbers = [];
  let i = 0;
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
    let currentNumber = nums[index];
    let correctIndex = index + 1;
    if (currentNumber !== correctIndex) {
      missingNumbers.push(correctIndex);
    }
  }
  return missingNumbers;
}

console.log(findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(findMissingNumbers([2, 4, 1, 2]));
