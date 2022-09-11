function dfs(graph, root) {

  const visited = [];

  const next = [root];

  while (next.length !== 0) {
    let node = next.pop();

    const neighbors = graph[node];

    for(let i = 0; i < neighbors.length; i++) {
      if (neighbors[i] === 1 && !visited.includes(i)) {
        next.push(i);
      }
    }
    
    visited.push(node);
  }

  return visited;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));