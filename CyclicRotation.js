
function solution(A, K) {
    // Implement your solution here
    const N = A.length;
    if (N === 0 || K % N === 0) {
        return A;
    }
    K = K % N
    const rotateFirstElements = A.slice(-K);

    const rotateRemainingElements = A.slice(0, N - K);

    return rotateFirstElements.concat(rotateRemainingElements);
}

solution ([3, 8, 9, 7, 6], 3);
