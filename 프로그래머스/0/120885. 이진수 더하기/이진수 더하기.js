const solution = (bin1, bin2) => {
    console.log(parseInt(bin1,2))
    console.log(parseInt(bin1,2).toString(2))
    console.log(parseInt(bin2,2))
    console.log(parseInt(bin2,2).toString(2))
    
    return (parseInt(bin1,2) + parseInt(bin2,2)).toString(2)
}