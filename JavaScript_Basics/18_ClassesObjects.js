// let obj = {
//     a: 1,
//     b: "Ajay"
// }
// console.log(obj)
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }
    eats() {
        console.log("Eating...")
    }
    runs() {
        console.log("Running...")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Lion is created...")
    }
    //Method overriding
    eats() {
        super.eats()
        console.log("Eating chicken...")
    }
}

let a = new Animal("Tiger");
console.log(a);

let l = new Lion("Sher");
console.log(l)

//object instanceof class : returns true and false