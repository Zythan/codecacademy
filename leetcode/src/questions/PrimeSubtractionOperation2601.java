package questions;

import sieveoferathosthens.SieveOfErathosthens;

import java.util.Arrays;
import java.util.List;

//------------------------------------------------------------------------------------------------------------------------------\\
//This example of its use sees if it can subtract a prime from a numbers in list to get sequntial greater numbers
//or in leetcode speak       (gdi just reading this crap makes my head hurt)
//
//You are given a 0-indexed integer array nums of length n.
//You can perform the following operation as many times as you want:
//Pick an index i that you haven’t picked before, and pick a prime p strictly less than nums[i], then subtract p from nums[i].
//Return true if you can make nums a strictly increasing array using the above operation and false otherwise.
//A strictly increasing array is an array whose each element is strictly greater than its preceding element.
//Constraints:
//1 <= nums.length <= 1000
//1 <= nums[i] <= 1000
//nums.length == n
//Note:: you do not have to subtract a Prime you can leave the number alone....and at any point the list is in ascending order result is true
//------------------------------------------------------------------------------------------------------------------------------\\

public class PrimeSubtractionOperation2601
{
  public static void main(String[] args)
  {
    //int[] numbers = {4,9,6,10};
    //int[] numbers = {6,8,11,12};
    //int[] numbers = {5,8,3};
    //int[] numbers = {998,2};
    //int[] numbers = {17,2};
    int[] numbers = {19,10};
    checkSort(numbers);

    boolean result = primeSubOperation(numbers);
    System.out.println("result = " + result);
  }
  public static boolean checkSort(int[] numbers) {
    //Arrays.sort(numbers);
    for(int i=1; i<numbers.length;i++) {
      if (!(numbers[i] > numbers[i-1])) return false;
    }
    return true;
  }

  static public boolean primeSubOperation(int[] nums) {
    List<Integer> primes = SieveOfErathosthens.getPrimes(1000);
    for(int i=0; i<nums.length; i++) {
      //This would be an auto false return since can't subtract a prime less than num[i] as there are none
      //This part is not needed if you can't have 0,1 in nums array
      if (nums[i] < 2) {
        if (i==0) continue; //0,1 can not be subtracted by a prime leave alone if first element
        if (nums[i] <= nums[i-1]) return false; //if element before is greater than or equal to current element, list is not able to be put in correct format (strictly greater than the one before)
        continue; //leave alone ...should be 1 with proceeding element as 0
      }

      boolean canSubtractPrime = false;
      for (int j=primes.size()-1; j>=0 ;j--) {
        if(checkSort(nums)) return true;
        int currentPrime = primes.get(j);
        System.out.println("p = " + currentPrime);
        if (currentPrime > nums[i]) continue;
        System.out.println("nums[i] = " + nums[i]);
        //check preceding element and see if current element subtracted by prime is less than if so move on as we are going from the highest prime that meets criteria
        int currentNumber = nums[i]; //current number
        int testNumber = currentNumber-currentPrime; //current number - prime that meets criteria
        System.out.println("testNumber = " + testNumber);
        if (testNumber <= 0) break; //only positive numbers criteria
        int checkNumber = (i==0)? nums[i] : nums[i-1]; //proceeding element value or if 0 element then itself
        System.out.println("checkNumber = " + checkNumber);
        //test for first element to swap the condition to make sure test number is less than check number
        System.out.println("i=" + i);
        if (i==0 && testNumber < checkNumber) {
          canSubtractPrime = true;
          nums[i] = testNumber;
        }
        //test make sure preceding element is less than testNumber (currentNumber - currentPrime)
        else if (checkNumber < testNumber) {
          canSubtractPrime = true;
          nums[i] = testNumber;
        }
      }
      if(!canSubtractPrime) return false;
    }
    printArray(nums,"ResultArray::::");
    return true;
  }

  private static void printArray(int[] nums,String desc)
  {
    System.out.print(desc);
    for(int i=0; i<nums.length; i++) {
      System.out.print(nums[i] + ",");
    }
    System.out.println();
  }

}
