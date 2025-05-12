let arr = [1,2,3,4,5];

console.log(arr.length, typeof arr);
console.log(arr)

arr[0] = 17
console.log(arr)
console.log(arr[0])

console.log(arr.toString())

console.log(arr.pop()) //remove from back
console.log(arr)

arr.push("Ajay") //insert at last
console.log(arr)

arr.shift() //remove from front
console.log(arr)

arr.unshift("Hello") // insert in front
console.log(arr)

delete arr[2]
console.log(arr)
console.log(arr.length);

console.log(arr.sort())

console.log(arr.reverse())
console.log(arr.join(" or "))

//splice(), slice(), 


