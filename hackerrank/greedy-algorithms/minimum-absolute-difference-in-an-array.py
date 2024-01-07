#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumAbsoluteDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def minimumAbsoluteDifference(arr):
    
    l = len(arr)
    minAbsDiff = -1
    
    arr.sort()
    
    for i in range(l - 1):
        
        v = abs(arr[i] - arr[i + 1])
        
        if v < minAbsDiff or minAbsDiff == -1:
            minAbsDiff = v

    return minAbsDiff

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = minimumAbsoluteDifference(arr)

    fptr.write(str(result) + '\n')

    fptr.close()

