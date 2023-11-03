function solution(n, numlist) {
    // return numlist.filter(function(a){
    //     return a%n === 0;
    // });
    return numlist.filter((a) => {
        return a%n === 0
    })
}