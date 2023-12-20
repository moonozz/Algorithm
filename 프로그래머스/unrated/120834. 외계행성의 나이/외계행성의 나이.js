function solution(age) {
    let year = 'abcdefghij';
    let agearr = String(age).split('')
    
    return agearr.map(a => year[a]).join('')
}
    // return [...year].filter(a,index => a === agearr).join('');
