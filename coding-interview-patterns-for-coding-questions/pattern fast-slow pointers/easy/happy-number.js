class HappyNumber {
  find(num) {
    let slow = num;
    let fast = num;
    do {
      slow = this.findSquareSum(slow);
      fast = this.findSquareSum(this.findSquareSum(fast));
    } while (slow !== fast);

    return slow === 1;
  }
  findSquareSum(num) {
    let sum = 0;
    let digit;
    while (num > 0) {
      digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
}
let happyNumber = new HappyNumber();
console.log("Is 23 a happy number?", happyNumber.find(23));
console.log("Is 12 a happy number?", happyNumber.find(12));
