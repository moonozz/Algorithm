function solution(num1, num2) {
    var answer = 0;
    // num1을 num2로 나눈 몫을 리턴해라
    // 제할 사항 num1,2는 0 < num1 ≤ 100
    // 10 / 5 -> return 2
    // 7 / 2 -> return 3
    
    if (0 < num1 <= 100 && 0 < num2 <= 100) { // 제한사항
        answer = num1 / num2 // 두개를 나누고
    }
    
    return Math.floor(answer); // 소수점 버린 값을 리턴해라
}