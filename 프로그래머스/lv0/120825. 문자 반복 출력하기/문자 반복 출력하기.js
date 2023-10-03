function solution(my_string, n) {
    let answer = '';
    const str = my_string.split('');
    
    str.map(el => {
        answer += el.repeat(n)
        })
        
    return answer;
}