function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    let toSort = nums[i];
    let correctIndex = toSort - 1;

    if (toSort !== nums[correctIndex]) {
      [toSort, nums[correctIndex]] = [nums[correctIndex], toSort];
    } else {
      i++;
    }
  }
  return nums;
}

console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
