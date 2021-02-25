/**
 * This algorithm finds all the routes from X to Y. If there isn't any then it return false and if there is at least one it returns true.
 * @param nodeX
 * @param nodeY
 * @param graph
 */
export default function routeBetween(
  nodeX: number,
  nodeY: number,
  graph: number[][]
): boolean {
  const answer = [];
  dfs(graph, nodeX, nodeY, []);
  return answer.length > 0;

  /**
   * Recursively goes through each node from X and tries to find a suitable path to the destination Y
   * @param graph
   * @param x
   * @param y
   * @param path
   */
  function dfs(graph: number[][], x: number, y: number, path: number[]) {
    path.push(x);
    if (x === y) {
      answer.push(path);
    } else {
      for (const nx of graph[x]) {
        dfs(graph, nx, y, path);
      }
    }

    path.pop();
  }

  return false;
}
