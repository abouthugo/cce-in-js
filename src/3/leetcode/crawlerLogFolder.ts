export default function crawlerLogFolder(logs: string[]): number {
  let depth = 0;
  const r = /^[a-zA-Z0-9]+\/$/;
  for (const item of logs) {
    if (item === "../" && depth > 0) {
      depth--;
    } else if (r.test(item)) {
      depth++;
    }
  }

  return depth;
}
