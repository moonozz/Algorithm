function solution(n) {
    let pizza = 6;
    
    while(true) {
        if(pizza % n === 0) 
        break
        
        pizza += 6;
    }
    
    return pizza/6;
}
// 최소공배수 넣은 변수 넣고 피자 조각수를 나눠라