function solution(array, height) {
    let answer = 0;
    
    for(let i = 0; i <= array.length; i++) {
        if (array[i] > height) answer++
    }
    
    return answer;
}

//     array.forEach(el => {
//         if (el > height) answer++
//     })