// Errors in JS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")

//Throwing the error
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is a violation")
}
let sum = parseInt(a) + parseInt(b);

//Handling the error
function main() {
    try {
    console.log(sum*z);
    return true
    } catch(error) {
    console.log("Error occurred")
    return false
    } finally { //If finally{} would have not be writen then this statement will not have been executed
    console.log("Action completed")
    }
}
let c = main()