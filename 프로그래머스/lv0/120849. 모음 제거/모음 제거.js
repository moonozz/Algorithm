function solution(my_string) {
    // 모음 a,e,i,o,u 제거한 문자열을 리턴
    // bus -> bs
    // nice to meet you -> nc t mt y
    // my_string을 배열로 만들고, 모음 배열을 비교해서 겹치는게 있으면 삭제하기
    
    let answer = '';
    const arr = ['a', 'e', 'i', 'o', 'u'];
    
//  let strarr = Array.from(my.string)
    let strarr = [...my_string]; // 배열로 만들고
        
    answer = strarr.filter(function(el) { //filter로 strarr을 리턴하는데
        return !arr.includes(el)}) // arr에 포함되지 않은 애들만 리턴
    
    return answer.join(''); // 그러고 문자열로 만들어줘
}