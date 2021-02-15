export class RecentCalls {
  sliding_window: number[];

  constructor() {
    this.sliding_window = [];
  }

  ping(t: number): number {
    this.sliding_window.push(t);
    // we want to remove the calls that have not occurred in the last 3000 milliseconds
    while (this.sliding_window[0] < t - 3000) {
      this.sliding_window.shift();
    }

    return this.sliding_window.length;
  }
}
