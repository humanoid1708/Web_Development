// console.log("Running...")
// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("Not supporting");
//     }
//     else {
//         setTimeout(() => {
//             console.log("Completed")
//             resolve("Ajay")
//         }, 3000);
//     }
// })

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Not supporting 2");
    }
    else {
        setTimeout(() => {
            console.log("Completed 2")
            resolve("Ajay 2")
        }, 3000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Not supporting 3");
    }
    else {
        setTimeout(() => {
            console.log("Completed 3")
            resolve("Ajay 3")
        }, 1000);
    }
})

let prom4 = Promise.allSettled([prom2, prom3])
prom4.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err)
}) 

// Promise.all, Promise.allSettled, Promise.any, Promise.race, Promise.reject, Promise.resolve