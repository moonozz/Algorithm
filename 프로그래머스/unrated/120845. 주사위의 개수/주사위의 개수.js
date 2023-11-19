function solution(box, n) {    
    w = parseInt(box[0] / n);
    l = parseInt(box[1] / n);
    h = parseInt(box[2] / n);
    
    return w * l * h;
}