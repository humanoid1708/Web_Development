function word(name) {
    console.log("Hey "+ name);
}

word("Ajay");
word("Divyansh");
word("Aayush");

function sum(a, b, c = 1) {
    return a+b+c;
}

val = sum(4,8) ;
console.log(val)

vax = sum(4,8,2) ;
console.log(vax)

val = sum(4) ; //b is undefined
console.log(val)

const func1 = x => {
    console.log("Arrow Function", x) //as number
    console.log("Arrow Function " + x) // as string
}

func1(69);