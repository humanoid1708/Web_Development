var a = 4;
var b = 5;
var c = 6;

// var 5temp = 7; is invalid
// var $temp = 7; is valid
// var _temp = 7; is valid

console.log(a+b+c);

const temp = 17;
// temp = 18; this will become invalid as const can not be changed
console.log(temp);


// var has a global scope therefore let is used
let x = 4;
{
    let x = 40;
    console.log("x in local block is " + x)
}

console.log("x in global is " + x)

var y = 4;
{
    var y = 40;
    console.log("y in local block is " + y)
}

console.log("y in global is " + y)

let l = "Hello World";
let m = 17;
let n = 21.9;
let o = true;
let p;
let q = null; //type of null is object

console.log(l, m, n, o, p, q);
console.log(typeof l, typeof m, typeof n, typeof o, typeof p, typeof q);

let obj = {
    "name" : "Ajay",
    age : 21,
    dob : "17/08"
}

console.log(obj)
obj.sal = 100000000;
console.log(obj)
