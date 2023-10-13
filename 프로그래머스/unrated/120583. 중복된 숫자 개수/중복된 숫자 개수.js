function solution(array, n) {
    let answer = 0;
    
    // for (i of array) {
    //     if(array[i] === n) {
    //         answer =  answer ++
    //     }
    // }
    
    for(let i = 0; i<=array.length; i++) {
        if (array[i] === n) answer ++
    }
    return answer;
}