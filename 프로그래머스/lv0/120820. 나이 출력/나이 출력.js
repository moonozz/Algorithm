function solution(age) {
    // 40살 선생님 몇 년도에 태어나셨어요?
    // 2022년을 기준 출생 연도를 리턴
    // 2022 - 1983 = 39+1 해야 40
    // 2022 - (x-1) = 40
    // x = 2022 - 40 + 1
    // Koans에서 알게된 new Date().getFullYear()??? 근데 나중에 연도 바뀌면 안좋을 것 같아,,

    const answer = 2022 - age + 1;
    
    return answer;
}