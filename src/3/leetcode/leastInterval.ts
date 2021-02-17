export function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length;
  const counts = getCounts();

  const max = counts[counts.length - 1];
  let idle_slots = (max - 1) * n;
  for (let i = counts.length - 2; i >= 0; i--) {
    console.log(
      `idle: ${idle_slots}\tcounts[${i}]: ${counts[i]}\tmax-1: ${max - 1}`
    );
    idle_slots -= Math.min(counts[i], max - 1, idle_slots);
  }

  return idle_slots + tasks.length;

  function getCounts() {
    const frequencies = new Map();

    for (const task of tasks) {
      if (frequencies.has(task)) {
        const newVal = frequencies.get(task) + 1;
        frequencies.set(task, newVal);
      } else {
        frequencies.set(task, 1);
      }
    }

    const counts = Array.from(frequencies.values());
    counts.sort((x, y) => x - y);
    return counts;
  }
}
