#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumBribes' function below.
#
# The function accepts INTEGER_ARRAY q as parameter.
#

def minimumBribes(q):
    # Write your code here
    minbribes = 0
    
    controlarr = list(range(1, len(q)+1))
    
    for i, e in enumerate(q):
        
        if controlarr[i] == q[i]:
            continue
        elif controlarr[i+1] == q[i]:
            
            minbribes += 1
            
            place = controlarr[i]
            nex = controlarr[i+1]
            
            controlarr[i] = nex
            controlarr[i+1] = place
            
            continue
            
        elif controlarr[i+2] == q[i]:
            
            minbribes += 2
            
            place = controlarr[i]
            nex = controlarr[i+1]
            secnex = controlarr[i+2]
            
            controlarr[i] = secnex
            controlarr[i+1] = place
            controlarr[i+2] = nex
            
            continue
        else:
            print("Too chaotic")
            return
    
    print(minbribes)

if __name__ == '__main__':
    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        q = list(map(int, input().rstrip().split()))

        minimumBribes(q)
