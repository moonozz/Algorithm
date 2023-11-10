function solution(my_string) {
    // 대문자 -> 소문자 ; 소문자 -> 대문자로 변환해 리턴
    // 제한 사항1 : 1 ≤ my_string의 길이 ≤ 1,000
    // 제한 사항2 : my_string은 영어 대문자와 소문자로만 구성
    let answer = '';
    let arr = my_string.split('');
    // [c,c,c,C,C,C]
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            answer += arr[i].toLowerCase()
        } else if (arr[i] === arr[i].toLowerCase()) {
            answer += arr[i].toUpperCase();
        }
        answer = String(answer)
    }
    
    return answer;
}