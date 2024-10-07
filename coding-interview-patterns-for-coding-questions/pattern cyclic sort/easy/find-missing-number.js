function findMissingNumber(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    let j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }

  return n;
}

console.log(findMissingNumber([4, 0, 3, 1]));
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
