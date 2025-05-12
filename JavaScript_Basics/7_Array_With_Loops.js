let arr = [1,2,3,4,5]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

arr.forEach((value, index, arr) => {
    console.log(value, index, arr)
});

for (const element of arr) {
    console.log(element)
}

let newarr = arr.map( (e) => {
    return e**2
})
console.log(newarr)

const three = e => {
    if(e > 3) {
        return true
    }
    return false
}

console.log(arr.filter(three))
console.log(newarr.filter(three))

const mul = (a,b) => {
    return a*b
}

console.log(arr.reduce(mul))
console.log(newarr.reduce(mul))

console.log(Array.from("AJAY"))