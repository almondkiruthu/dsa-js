/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== n * m) return [];
  // [1,2,3,4]
  // m rows
  // n columns
  // res[[],[]]

  const result = [];

  for (let row = 1; row <= m; row++) {
    let start = row - 1 > 0 ? row - 1 * n : 0 * n;
    console.log("start", start);
    // 1st iteration start = 0
    // 2nd iteration start = 2
    let end = start + n - 1;
    console.log("end", end);
    // 1st iteration end = 1
    // 1st iteration end = 3
    result.push([original[start], original[end]]);
    console.log(result.push([original[start], original[end]]));
  }

  return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
