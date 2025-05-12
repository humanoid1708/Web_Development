let rand1 = Math.random()
let one, two, three
if(rand1 < 0.33) {
    one = "Crazy"
}

else if(rand1 > 0.33 && rand1 < 0.66) {
    one = "Amazing"
}

else {
    one = "Fire"
}

let rand2 = Math.random()
if(rand2 < 0.33) {
    two = "Engine"
}

else if(rand2 > 0.33 && rand2 < 0.66) {
    two = "Foods"
}

else {
    two = "Garments"
}

let rand3 = Math.random()
if(rand3 < 0.33) {
    three = "Bros"
}

else if(rand3 > 0.33 && rand3 < 0.66) {
    three = "Limited"
}

else {
    three = "Hub"
}

console.log(`${one} ${two} ${three}`)