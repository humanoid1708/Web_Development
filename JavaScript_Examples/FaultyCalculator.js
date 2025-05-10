function calc( x, op, y,  a = Math.random()) {
    console.log(a);

    if (a < 0.1) {
        if( op == '+') {
            return x-y;
        }
        else if( op == '*') {
            return x+y;
        }
        else if( op == '-') {
            return x/y;
        }
        else if( op == '/') {
            return x**y;
        }
    }

    else{
        if( op == '+') {
            return x+y;
        }
        else if( op == '*') {
            return x*y;
        }
        else if( op == '-') {
            return x-y;
        }
        else if( op == '/') {
            return x/y;
        }
    }
}

val = calc(2, '/', 3)
console.log(val)