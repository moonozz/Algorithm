function solution(n, k) {
    let service = (parseInt(n/10))*2000;
    
    return answer = (n*12000) + (k*2000) - service;
}

// function solution(n, k) {
//     let service = 0;
    
//     for (let i = 10; i <= n; i+=10) {
//         service++
//     }
//     return answer = (n*12000) + (k*2000) - (service*2000);
// }