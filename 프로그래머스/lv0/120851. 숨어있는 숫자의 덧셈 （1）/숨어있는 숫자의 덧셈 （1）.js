function solution(my_string) {
    let answer = 0;
    const arr = [...my_string]

    for(let i = 0; i <= arr.length; i++) {
        if(Number(arr[i])) {
            answer += Number(arr[i])
        }
    }
    
    return answer;
}