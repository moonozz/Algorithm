function solution(numbers) {
    // 배열 원소들의 평균값을 리턴
    let answer = 0;
    // const sum = 0;
    
    // for(let i = 0; i <= numbers.length; i++) {
    //     sum += numbers[i];
    // }
    
    for(const i of numbers) {
        answer += i // answer = answer + i
    }
    
    // answer = answer / numbers.length
    
    return answer / numbers.length;
}