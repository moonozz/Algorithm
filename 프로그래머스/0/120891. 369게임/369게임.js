function solution(order) {
    let arr = [...order+'']
    
    return arr.filter((a) => {
        return a === '3' || a === '6' || a === '9'
    }).length;
}