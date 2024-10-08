function findMissingNumber(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    let currentNumber = nums[i];
    let correctIndex = currentNumber;

    if (currentNumber < n && currentNumber !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  for (let index = 0; index < n; index++) {
    let currentNumber = nums[index];
    if (index !== nums[currentNumber]) {
      return index;
    }
  }

  return n;
}

console.log(findMissingNumber([4, 0, 3, 1]));
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
