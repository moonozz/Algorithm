function solution(n) {
    let answer = [];
    
    for (let i = 2; n !== 1; i++) {
        if (n % i === 0) {
            answer.push(i)
            while (n % i === 0) {
                n = n / i; 
            }
        }
    }
    
    return answer;
}