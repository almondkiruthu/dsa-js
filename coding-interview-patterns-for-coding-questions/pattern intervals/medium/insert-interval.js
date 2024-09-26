// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class InsertInterval {
  insert(intervals, newInterval) {
    let merged = [];
    let i = 0;

    // skip (and add to output) all intervals that come before the newInterval
    while (i < intervals.length && intervals[i].end < newInterval.start) {
      merged.push(intervals[i]);
      i++;
    }

    //Merge all intervals that overlap with 'newInterval'
    while (i < intervals.length && intervals[i].start <= newInterval.end) {
      newInterval.start = Math.min(newInterval.start, intervals[i].start);
      newInterval.end = Math.max(newInterval.end, intervals[i].end);
      i++;
    }

    // Insert the newly merged interval
    merged.push(newInterval);

    // Add all the remaining intervals to the output that didin't those conditions above
    while (i < intervals.length) {
      merged.push(intervals[i]);
      i++;
    }

    return merged;
  }
}

const intervals = [];
intervals.push(new Interval(1, 3));
intervals.push(new Interval(5, 7));
intervals.push(new Interval(8, 12));

const newInterval = new Interval(4, 6);

const insertInterval = new InsertInterval();
const result = insertInterval.insert(intervals, newInterval);

console.log(result);

// Time complexity O(n)
// Space complexity O(n)
