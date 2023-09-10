function solution(numbers) {
    // numbers의 각 원소에 2배한 원소를 가진 배열을 리턴
    // 재헌서헝 : 1 ≤ numbers의 길이 ≤ 1,000
    // 제한사항 : -10,000 ≤ numbers의 원소 ≤ 10,000
    // [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]
    // [1, 2, 100, -99, 1, 2, 3] -> [2, 4, 200, -198, 2, 4, 6]
    let answer = [];
    
    for (let i = 0; i < numbers.length; i++) {
        let data = numbers[i] * 2;
        answer.push(data);
    }
    
    return answer;
}