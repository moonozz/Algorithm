const solution = (before, after) => {
    // let reverseStr = before.split("").reverse().join("")
    
    return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0
}