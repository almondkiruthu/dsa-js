function findDuplicateNumber(nums) {
  let index = 0;
  while (index < nums.length) {
    let currentNumber = nums[index];
    if (currentNumber !== index + 1) {
      let correctIndex = currentNumber - 1;
      if (currentNumber !== nums[correctIndex]) {
        [nums[index], nums[correctIndex]] = [nums[correctIndex], nums[index]];
      } else {
        return nums[index];
      }
    } else {
      index++;
    }
  }
  return -1;
}

console.log(findDuplicateNumber([1, 4, 4, 3, 2]));
console.log(findDuplicateNumber([2, 1, 3, 3, 5, 4]));
console.log(findDuplicateNumber([2, 4, 1, 4, 4]));
