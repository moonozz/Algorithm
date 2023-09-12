function solution(n) {
    let res = [];
    
    for(let i = 0; i <= n; i++) {
        if (i%2 === 1) res.push(i);
    }
    
    return res;
}