console.log("Loops in JavaScript");

for (let i = 0; i < 100; i++) {
    console.log(i);
}

let obj = {
    name: "Ajay",
    age: 21,
    panel: "J"
}

for (const key in obj) {
    const element = obj[key]
    console.log(key, element);
}

for (const c of "Hell") {
    console.log(c);
}

let j = 2;

while (j < 7) {
    console.log(j);
    j++;
}

let k = 17
do {
    console.log(k);
} while (k != 17);