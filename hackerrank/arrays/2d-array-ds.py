#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def hourglassSum(arr):
    
    maxglasssum = -9 * 7
    
    for i in range(4):
        for j in range(4):
            glasssum = 0
            glasssum += arr[i+0][j+0] + arr[i+0][j+1] + arr[i+0][j+2]
            glasssum +=                 arr[i+1][j+1]
            glasssum += arr[i+2][j+0] + arr[i+2][j+1] + arr[i+2][j+2]
            
            if glasssum > maxglasssum:
                maxglasssum = glasssum

    return maxglasssum

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
