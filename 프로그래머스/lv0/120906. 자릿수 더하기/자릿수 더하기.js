function solution(n) {
    let answer = 0;
    let str = String(n)
    const arr = [...str];
    
    for (let i = 0; i < arr.length; i++) {
        answer += Number(arr[i])
    }
    
    return answer;
}