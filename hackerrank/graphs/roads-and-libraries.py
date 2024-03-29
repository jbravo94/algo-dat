#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'roadsAndLibraries' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER c_lib
#  3. INTEGER c_road
#  4. 2D_INTEGER_ARRAY cities
#

def roadsAndLibraries(n, c_lib, c_road, cities):
    
    if c_road >= c_lib:
        return c_lib * n
    
    d = {}
    
    for road in cities:
        city_1 = road[0]
        city_2 = road[1]
        
        city_1_v = d.get(city_1)
        
        if city_1_v is None:
            d[city_1] = []
            city_1_v = d[city_1]
        
        if city_2 not in city_1_v:
            city_1_v.append(city_2)
        
        city_2_v = d.get(city_2)
        
        if city_2_v is None:
            d[city_2] = []
            city_2_v = d[city_2]
        
        if city_1 not in city_2_v:
            city_2_v.append(city_1)
    
    stack = []
    visited = set()
    
    roads = 0
    libraries = 0
    
    for i in range(1, n + 1):

        if i in visited:
            continue

        stack.append(i)
        libraries += 1
        
        start_node = True
        
        while len(stack) != 0:
            node = stack.pop()
            
            if node not in visited:
                visited.add(node)
            
                if start_node:
                    start_node = False
                else:
                    roads += 1
                
                if d.get(node) is not None:
                    stack.extend(d[node])
    
    return libraries * c_lib + roads * c_road

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        m = int(first_multiple_input[1])

        c_lib = int(first_multiple_input[2])

        c_road = int(first_multiple_input[3])

        cities = []

        for _ in range(m):
            cities.append(list(map(int, input().rstrip().split())))

        result = roadsAndLibraries(n, c_lib, c_road, cities)

        fptr.write(str(result) + '\n')

    fptr.close()
