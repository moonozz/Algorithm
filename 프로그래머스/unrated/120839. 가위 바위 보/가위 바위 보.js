function solution(rsp) {
    let answer = [];
    let arr = [...rsp]
    
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] === "0") answer.push(5);
        if(arr[i] === "2") answer.push(0);
        if(arr[i] === "5") answer.push(2);
    }
    
    return answer.join("");
}