function solution(dot) {
    
    let x = dot[0];
    let y = dot[1];
    
    
    if (x > 0 && y > 0) {
        return 1
    } else if (x > 0 && y < 0) {
        return 4
    } else if (x < 0 && y < 0) {
        return 3
    }
    
    return 2
}