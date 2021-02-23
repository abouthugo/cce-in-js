export function findJudge(N: number, trust: number[][]): number {
  const trustCounts = new Array(N + 1).fill(0);
  for (const [i, j] of trust) {
    trustCounts[i] -= 1;
    trustCounts[j] += 1;
  }

  for (let i = 1; i < trustCounts.length; i++) {
    if (trustCounts[i] === N - 1) return i;
  }
  return -1;
}
