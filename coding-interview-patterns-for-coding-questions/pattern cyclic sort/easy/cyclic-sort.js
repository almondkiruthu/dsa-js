const cyclicSort = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;
    if (nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }
  return nums;
};

console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
