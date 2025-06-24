document.addEventListener("DOMContentLoaded", function () {
    let boxes = document.getElementsByClassName("box");
    console.log(boxes);
    boxes[2].style.backgroundColor = "red";
    document.getElementById("bluebox").style.backgroundColor = "blue"
    console.log(document.querySelector(".box"))
    // document.querySelectorAll(".boxes").style.backgroundColor = "green"
    document.querySelectorAll(".box").forEach(e => {
        e.style.backgroundColor= "green";
    })
    console.log(document.getElementsByTagName("div"))
    console.log(document.querySelector(".cont").contains(document.querySelector(".box")))
});
