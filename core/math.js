//1.

const pie = 3.14;

function sum (a, b) {
    return a + b;
}

function mult(a, b) {
    return a*b;
}
module.exports = {
    sum,
    mult,
}

//2.

const pie = 3.14;

module.exports = {
    pie,

    sum : (a, b) =>  a + b,
    
    mult : (a, b) => a * b,
}

//3.

const pie = 3.14;

exports.sum = (a, b) => a + b;

exports.mult = (a, b) => a * b; 