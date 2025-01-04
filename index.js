function hasTargetSum(array, target) {
  // Create a set to store numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through the array
  for (const number of array) {
    // Calculate the complement of the current number
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true; // Found a pair that sums to the target
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair is found, return false
  return false;
}

/* 
  Explanation:
  - I used a Set to store numbers I've already seen because checking if a number exists in a Set is fast.
  - For each number, I calculate the complement (target - number).
  - If the complement is in the Set, I know I’ve found a pair, so I return true.
  - Otherwise, I add the current number to the Set and keep going.
  - This makes the solution efficient with a time complexity of O(n).
*/

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, -1, 1], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3], 7));
}

module.exports = hasTargetSum;
