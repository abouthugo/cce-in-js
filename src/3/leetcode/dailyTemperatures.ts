export function dailyTemperatures(T: number[]): number[] {
  const tempSeen: number[] = [];
  const res = [];
  while (T.length) {
    const temp = T.pop();
    if (temp) {
      res.unshift(getPopCount(temp, tempSeen));
      tempSeen.push(temp);
    }
  }

  return res;

  function getPopCount(n: number, L: number[]) {
    let i;
    let counter = 1;
    for (i = L.length - 1; i >= 0; i--) {
      if (L[i] > n) return counter;
      counter++;
    }
    return 0;
  }
}
