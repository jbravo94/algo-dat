class Graph:
    def __init__(self, nodes):
        self.nodes = nodes
        self.graph = {}

    def connect(self, start_node, end_node):
        sn = self.graph.get(start_node)
        
        if sn is None:
            self.graph[start_node] = []
            sn = self.graph.get(start_node)
            
        sn.append(end_node)
        
        en = self.graph.get(end_node)
        
        if en is None:
            self.graph[end_node] = []
            en = self.graph.get(end_node)
            
        en.append(start_node)
    
    def find_all_distances(self, start_node):
        
        distances = [-1] * self.nodes
        
        if self.graph.get(start_node) is None:
            distances.pop()
            print(" ".join(map(str, distances)))
            return
        
        stack = []
        nextstack = []
        
        visited = set()
        
        visited.add(start_node)
        stack.extend(self.graph[start_node])
        
        depth = 1
        
        while len(stack) != 0:
            
            node = stack.pop()
            
            if node not in visited:
                visited.add(node)
                distances[node] = 6 * depth
                
                if self.graph.get(node) is not None:
                    nextstack.extend(self.graph[node])
                
            if len(stack) == 0:
                stack = nextstack
                nextstack = []
                depth += 1
        
        distances.pop(start_node)
        
        print(" ".join(map(str, distances)))

t = int(input())
for i in range(t):
    n,m = [int(value) for value in input().split()]
    graph = Graph(n)
    for i in range(m):
        x,y = [int(x) for x in input().split()]
        graph.connect(x-1,y-1) 
    s = int(input())
    
    try:
        graph.find_all_distances(s-1)
    except RuntimeError as e:
        print(e.message)
        raise

