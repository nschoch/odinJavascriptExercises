const fibonacci = function(seqNum) {

    let prevNum = 0;
    let newNum = 1;
    if (seqNum < 0) {
        return "OOPS";
    }
    for (let i=1; i <= seqNum; i++) {
        if (i <= 1) {
            newNum = 1;
        }
        else {
            let holder = newNum;
            newNum = newNum + prevNum;
            prevNum = holder;
        }
        console.log(newNum, prevNum);
    }
    
    return newNum;
}

module.exports = fibonacci
