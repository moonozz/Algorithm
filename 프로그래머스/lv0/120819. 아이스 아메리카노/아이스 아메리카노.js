function solution(money) {
    const answer = [];
    // money = 머쓱이가 가지고 있는 돈
    // 머쓱이가 마실 수 있는 아메리카노 : money / 5500
    // 몫과 나머지를 배열로 리턴
    
//     let coffee;
//     let coin;

//     coffee = Math.floor(money / 5500);
//     coin = money % 5500;

//     answer = [coffee, coin];    
    
    const coffee = Math.floor(money / 5500);
    const coin = money % 5500;
    
    answer.push(...[coffee, coin])
    
    
    return answer;
}