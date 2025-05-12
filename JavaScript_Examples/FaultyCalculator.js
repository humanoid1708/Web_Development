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

/*
let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}

*/