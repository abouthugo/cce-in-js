export default function keysAndRooms(rooms: number[][]): boolean {
  const visits = new Array(rooms.length).fill(0);
  traverse(0, rooms);
  console.log(visits);
  const reduction = visits.reduce((a, b) => a + b);

  return reduction === rooms.length;

  function traverse(start: number, graph: number[][]) {
    if (visits[start] === 1) return;
    visits[start] = 1;
    for (const x of graph[start]) {
      traverse(x, graph);
    }
  }
}
