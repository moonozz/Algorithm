function solution(sides) {
    // 긴변의 길이는 다른 두 변의 길이의 합보다 작아야
    // .sort 로 숫자 정렬
    sides.sort((a,b) => a-b)

    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}