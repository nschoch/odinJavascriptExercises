const sumAll = function(a, b) {
    if( a < 0 || b < 0 || isNaN(a) || isNaN(b) || typeof a === "string" || typeof b === "string") {
        return "ERROR";
    }

    let largerNumber = 0;
    let smallerNumber = 0;

    if ( a >= b ) {
        largerNumber = a;
        smallerNumber = b;
    }
    else {
        largerNumber = b;
        smallerNumber = a;
    }

    let totalSum = 0;

    for (i = smallerNumber; i <= largerNumber; i++) {
        totalSum += i;
    }

    return totalSum;
}

module.exports = sumAll
