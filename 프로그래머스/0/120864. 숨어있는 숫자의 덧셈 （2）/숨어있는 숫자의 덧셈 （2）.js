const solution = (my_string) => {
    let num = my_string.split(/[^0-9]/g)
    let numMap = num.map(Number)
    
    return numMap.reduce((a,b) => a+b)
}