// let val1 = Math.floor(Math.random() * 255);
// let val2 = Math.floor(Math.random() * 255);
// let val3 = Math.floor(Math.random() * 255);
// let val4 = Math.floor(Math.random() * 255);
// let val5 = Math.floor(Math.random() * 255);
// let val6 = Math.floor(Math.random() * 255);

function getRandom() {
    let val1 = Math.floor(Math.random() *255);
    let val2 = Math.ceil(Math.random() *255);
    let val3 = Math.ceil(Math.random() *255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".box").forEach(e => {
        let color1 = getRandom();
        let color2 = getRandom();
        e.style.backgroundColor = color1;
        e.style.borderColor = color2;
    });
})
