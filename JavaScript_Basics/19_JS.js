// IIFE : Immediately invoked function expression
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// let a = await sleep();
// let b = await sleep();

(async function main() {
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
})()

//Destructuring
let [x, y, ...z] = [1,5,6,7,8,9];
console.log(x,y,z)

let obj = {
    a:1,
    b:2,
    c:3
}
let {a,b} = obj;
console.log(a,b)

//Spread operator
let arr = [1,2,3,4,5,6,7,8,9]
console.log(sum(...arr))