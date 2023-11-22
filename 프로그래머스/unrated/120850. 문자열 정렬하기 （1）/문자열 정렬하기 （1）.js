function solution(my_string) {
    let answer = [];
    
    return [...my_string].map((a) => Number(a)).filter((a) => !isNaN(a)).sort((a,b) => a - b);
    
    return answer;
}