function solution(A) {
    // Implement your solution here
  // Iterate through each element in the array.
    for (let i = 0; i < A.length; i++) {
        // Initialize a counter for the current element.
        let count = 0;
        
        // Nested loop to compare the current element with all other elements in the array.
        for (let j = 0; j < A.length; j++) {
            // If the current element is equal to the compared element, increment the counter.
            if (A[i] === A[j]) {
                count++;
            }
        }
        
        // Check if the count of occurrences for the current element is odd.
        if (count % 2 !== 0) {
            // If odd, return the current element as it occurs an odd number of times.
            return A[i];
        }
    }
    
    // If no element is found with odd occurrences, return -1 as a default.
    return -1;
}

solution([6, 4, 6, 4, 6, 5, 6]);
