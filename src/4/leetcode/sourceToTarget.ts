export default function sourceToTarget(graph: number[][]): number[][] {
  const answer: number[][] = [];
  let path: number[] = [];
  dfs(0, graph.length - 1, graph);
  return answer;

  function dfs(src: number, dest: number, graph: number[][]): void {
    path = [...path, src];
    if (src === dest) {
      answer.push(path);
    } else {
      for (const x of graph[src]) {
        dfs(x, dest, graph);
      }
    }

    path = path.slice(0, path.length - 1);
  }
}
