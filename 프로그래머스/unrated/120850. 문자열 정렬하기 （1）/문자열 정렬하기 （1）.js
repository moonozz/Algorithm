function solution(my_string) {
    let answer = [];
    
    return [...my_string].map(function(a) {
        return Number(a)
    }).filter(function(a) {
        return !isNaN(a)
    }).sort((a,b) => a - b);
    
    return answer;
}

// [...my_string].map((a) => Number(a)).filter((a) => !isNaN(a)).sort((a,b) => a - b);