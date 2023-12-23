function solution(numbers, direction) {
    // right 면 끝에꺼 앞에 추가하고 지우기    
    if (direction === 'right') {
        numbers.unshift(numbers.pop());
    } else { //left면 앞에꺼 끝에 추가하고 지우기
        numbers.push(numbers.shift())
    }
    
    return numbers;
}