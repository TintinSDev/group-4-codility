
function solution(A, K) {
    // Implement your solution here
    
    // Store the length of the array in a constant variable N.
    const N = A.length;

    // Check if the array is empty or if the rotation value is a multiple of the array length.
    if (N === 0 || K % N === 0) {
        // If true, no rotation is needed, return the original array.
        return A;
    }

    // Adjust the rotation value to avoid unnecessary full rotations.
    K = K % N;

    // Extract the last K elements of the array (elements to be rotated to the front).
    const rotateFirstElements = A.slice(-K);

    // Extract the remaining elements that stay at the original positions.
    const rotateRemainingElements = A.slice(0, N - K);

    // Concatenate the rotated elements and the remaining elements to get the final rotated array.
    return rotateFirstElements.concat(rotateRemainingElements);
}

solution([3, 8, 9, 7, 6], 3);

