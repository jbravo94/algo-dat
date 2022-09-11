function bfs(graph, root) {
  var nodesLen = {};
  var visited = [];

  let node = root;
  let depth = 0;

  let next = [root];

  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }

  let nextChilds = [];

  while (next.length !== 0) {

    node = next.pop();
    const neighbors = graph[node];

    for(var i = 0; i < neighbors.length; i++) {
      if (neighbors[i] === 1) {

        if(nodesLen[i] > (depth + 1)) {
          nodesLen[i] = (depth + 1);
        }

        if(!visited.includes(i)) {
          nextChilds.unshift(i);
        }
      }
    }

    if(nodesLen[node] > depth) {
      nodesLen[node] = depth;
    }

    visited.push(node);

    if (next.length === 0) {
      depth++;
      next = nextChilds;
      nextChilds = [];
    }
  }

  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));