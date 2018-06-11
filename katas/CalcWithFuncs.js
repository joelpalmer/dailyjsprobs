//Calulating with functions

const expr = (num, op) => {
    return op ? op(num) : num;
}

const zero = (op) => expr(0, op);
const one = (op) => expr(1, op);
const two = (op) => expr(2, op);
const three = (op) => expr(3, op);
const four = (op) => expr(4, op);
const five = (op) => expr(5, op);
const six = (op) => expr(6, op);
const seven = (op) => expr(7, op);
const eight = (op) => expr(8, op);
const nine = (op) => expr(9, op);

const plus = (a) => {
    return (b) => {
        return b + a;
    }
}
const minus = (a) => {
    return (b) => {
        return b - a;
    }
}
const times = (a) => {
    return (b) => {
        return a * b;
    }
}
const dividedBy = (a) => {
    return (b) => {
        return Math.floor(b / a); // must be int not float
    }
}

const x = seven(times(five())); 
x;
four(plus(nine())); 
eight(minus(three())); 
six(dividedBy(two())); 