function solution(cipher, code) {
    return [...cipher].filter(function(a, index) {
        return (index+1) % code === 0 ? true : false
    }).join('')
    
}