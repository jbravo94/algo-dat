#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the findShortest function below.

#
# For the weighted graph, <name>:
#
# 1. The number of nodes is <name>_nodes.
# 2. The number of edges is <name>_edges.
# 3. An edge exists between <name>_from[i] to <name>_to[i].
#
#
def findShortest(graph_nodes, graph_from, graph_to, ids, val):
    
    d = {}
    
    edges = len(graph_from)
    
    for i in range(edges):
        
        f = graph_from[i]
        t = graph_to[i]
        
        if d.get(f) is None:
            d[f] = set()
        
        d[f].add(t)
            
        if d.get(t) is None:
            d[t] = set()
        
        d[t].add(f)
        
    color_matching_nodes = []
    
    for n in range(graph_nodes):
        
        if ids[n] == val:
            color_matching_nodes.append(n + 1)
        
    if len(color_matching_nodes) < 2:
        return -1
        
    min_length = graph_nodes

    for cmn in color_matching_nodes:
    
        stack = []
        
        ch = d.get(cmn)
        
        if ch is not None:
            stack.extend(d[cmn])
        else:
            continue
        
        visited = set()
        visited.add(cmn)
        
        nextstack = []
        
        depth = 1
        
        while len(stack) != 0:
            node = stack.pop()
            
            if node not in visited:
                visited.add(node)
                
                if ids[node - 1] == val:
                    
                    if min_length > depth:
                        min_length = depth
                    
                    break
                
                es = d.get(node)
                
                if es is not None:
                    nextstack.extend(d[node])
            
            if len(stack) == 0:
                stack = nextstack
                nextstack = []
                depth += 1
                
    return min_length

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    graph_nodes, graph_edges = map(int, input().split())

    graph_from = [0] * graph_edges
    graph_to = [0] * graph_edges

    for i in range(graph_edges):
        graph_from[i], graph_to[i] = map(int, input().split())

    ids = list(map(int, input().rstrip().split()))

    val = int(input())

    ans = findShortest(graph_nodes, graph_from, graph_to, ids, val)

    fptr.write(str(ans) + '\n')

    fptr.close()

