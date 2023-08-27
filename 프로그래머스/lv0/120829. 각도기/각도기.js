function solution(angle) {
    // 0 < 예각 < 90 -> 1
    // 직각 === 90 -> 2
    // 90 < 둔각 < 180 -> 3
    // 평각 === 180 -> 4
    
    let answer = 0;
    
    if (angle < 90) answer = 1; // 0 < 예각 < 90 -> 1
    else if(angle === 90) answer = 2; // 직각 === 90 -> 2
    else if(90 < angle && angle < 180) answer = 3; // 90 < 둔각 < 180 -> 3
    else if(angle === 180) answer = 4; // 평각 === 180 -> 4
    
    return answer;
}