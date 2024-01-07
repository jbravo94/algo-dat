#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'luckBalance' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. 2D_INTEGER_ARRAY contests
#

def luckBalance(k, contests):
    
    luck_loosable_contests = []
    luck_important_contests = []
    
    for luck, importance in contests:
        if importance == 1:
            luck_important_contests.append(luck)
        else:
            luck_loosable_contests.append(luck)
        
    luck_loosable_contests.sort(reverse=True)
    luck_important_contests.sort(reverse=True)
    
    lic = luck_important_contests[:k:]
    lic_to_loose = luck_important_contests[k::]
    llc = luck_loosable_contests[:len(contests) - len(lic):]

    return sum(lic) + sum(llc) - sum(lic_to_loose)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])

    k = int(first_multiple_input[1])

    contests = []

    for _ in range(n):
        contests.append(list(map(int, input().rstrip().split())))

    result = luckBalance(k, contests)

    fptr.write(str(result) + '\n')

    fptr.close()

