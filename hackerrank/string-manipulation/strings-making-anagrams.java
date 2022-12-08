import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'makeAnagram' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. STRING a
     *  2. STRING b
     */

    public static int makeAnagram(String a, String b) {
        // Write your code here

        Map<String, Integer> stringA = new HashMap<>();
        Map<String, Integer> stringB = new HashMap<>();
        
        for (int i = 0; i < a.length(); i++) {
            String c = "" + a.charAt(i);
            
            stringA.putIfAbsent(c, 0);
            stringA.put(c, stringA.get(c) + 1);
        }
        
        for (int i = 0; i < b.length(); i++) {
            String c = "" + b.charAt(i);
            
            stringB.putIfAbsent(c, 0);
            stringB.put(c, stringB.get(c) + 1);
        }
        
        int deletions = 0;
        
        for (Map.Entry<String, Integer> entry : stringA.entrySet()) {
            
            String key = entry.getKey();
            Integer bb = stringB.get(key);
            
            deletions += Math.abs(entry.getValue() - (bb != null ? bb : 0));
            
            stringA.put(key, 0);
            
            if (bb != null) {
                stringB.put(key, 0);
            }
        }
        
        for (Map.Entry<String, Integer> entry : stringB.entrySet()) {
            
            String key = entry.getKey();
            Integer aa = stringA.get(key);
            
            deletions += Math.abs(entry.getValue() - (aa != null ? aa : 0));
            
            stringB.put(key, 0);
            
            if (aa != null) {
                stringA.put(key, 0);
            }
        }
        
        return deletions;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String a = bufferedReader.readLine();

        String b = bufferedReader.readLine();

        int res = Result.makeAnagram(a, b);

        bufferedWriter.write(String.valueOf(res));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
