function solution(n) {
    let answer = [];
    let i = 1;
    
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i)
        } 
        i ++
    }
    
    return answer;
}