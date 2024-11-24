package sieveoferathosthens;

import java.util.ArrayList;
import java.util.List;

//------------------------------------------------------------------------------------------------------------------------------\\
//Sieve of Erathosthens gets all prime numbers in a given range
//------------------------------------------------------------------------------------------------------------------------------\\
public class SieveOfErathosthens
{
  static public List<Integer> getPrimes(int count) {
    List<Integer> result = new ArrayList<>();
    //array to keep track of which numbers are prime
    boolean[] primes = new boolean[count + 1];
    //set all numbers,represented by array index, as prime primes[i]==true
    for (int i = 0; i < primes.length; i++) {
      primes[i] = true;
    }
    //starting at 2 : 0,1 not prime : set all non-prime in range to false
    for (int i = 2; i * i <= count; i++) {
      //If primes[i] is true set all multiples of prime[i] to false (all were set to true in stage above so always runs on the index of 2)
      //Exp:: prime[2] remains true but prime[4],prime[6],prime[8] etc are set to false
      //This means skipping prime[i]==false after first iteration of all the multiples of 2
      //proceed with 3 as it is still true,not a multiple of 2, throwing out all multiples of 3 : 6,9,12 etc
      //skip 4 (multiple of 2), do 5, skip 6(2,3), do 7, skip 8,9,10 do 11 etc
      if (primes[i]) {
        //j = i*2 and is incremented by i as long as j is less than count
        //first iteration of i : i=2, j = i*2 = 4  this gets first multiple of 2 then sets by index j in primes[] to false
        //and subsequent iterations of j then take out all multiples of 2 by setting their index in primes[] to false
        for (int j = i * 2; j <= count; j = j + i) {
          primes[j] = false;
        }
      }
    }
    //add only prime numbers to result set by checking if index is false (skipping 0 and 1 again by starting on 2)
    for (int i = 2; i <= count; i++) {
      if (primes[i]) {
        result.add(i);
      }
    }
    return result;
  }
}