class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class MergeIntervals {
  merge(intervals) {
    if (intervals.length < 2) return intervals;

    //Step 1: Sort intervals according to their start time
    intervals.sort((a, b) => (a.start < b.start ? -1 : 1));

    // Step 2: Create a result array to hold merged Intervals
    const merged = [];
    let currentInterval = intervals[0]; // start with the first interval
    merged.push(currentInterval);

    // Step 3: Iterate over every other interval
    for (let i = 1; i < intervals.length; i++) {
      let nextInterval = intervals[i];

      // Step 4: If there's an overlap merge the intervals by adjusting the end.
      if (nextInterval.start <= currentInterval.end) {
        currentInterval.end = Math.max(currentInterval.end, nextInterval.end);
      } else {
        // No overlap interval, move to next interval
        currentInterval = nextInterval;
        merged.push(currentInterval);
      }
    }

    return merged;
  }
}

const intervals = [];
intervals.push(new Interval(1, 4));
intervals.push(new Interval(2, 5));
intervals.push(new Interval(7, 9));

const mergeIntervals = new MergeIntervals();
const result = mergeIntervals.merge(intervals);

console.log(result);
