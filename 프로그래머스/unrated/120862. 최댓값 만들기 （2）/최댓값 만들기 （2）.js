function solution(numbers) {
    const sortnum = numbers.sort((a,b) => a-b);
    
    return Math.max (sortnum[0] * sortnum[1], sortnum[sortnum.length - 1] * sortnum[sortnum.length - 2])
}

