// JS has asynchronous nature and hence flow control is not sequential  

console.log("Running...")


//This will run at the last
setTimeout(() => {
    console.log("first")
}, 0);

const callback = (arg) => {
    console.log(arg);
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Ajay")
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)