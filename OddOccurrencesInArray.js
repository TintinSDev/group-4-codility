function solution(A) {
    // Implement your solution here
 
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
    }
    return -1;
}

solution ([9, 3, 9, 3, 9, 7, 9])
