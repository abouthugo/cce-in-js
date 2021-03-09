/**
 * Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
 *
 * Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.
 *
 * @param n the total number of nodes in the graph
 * @param edges the edges between these nodes
 * @returns
 */
export function findSmallestSetOfVertices(
  n: number,
  edges: number[][]
): number[] {
  const reach = new Set();
  const solution = [];
  for (const e of edges) {
    reach.add(e[1]);
  }

  for (let i = 0; i < n; i++) {
    if (!reach.has(i)) {
      solution.push(i);
    }
  }

  return solution;
}
