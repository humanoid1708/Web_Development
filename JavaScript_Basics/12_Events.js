let button = document.getElementById("btn");

button.addEventListener("click", ()=> {
    document.querySelector(".box").innerHTML = "Welcome";
})

button.addEventListener("contextmenu", ()=> {
    alert("Right clicked")
})

//Keyboard event
document.addEventListener("keydown", (e)=> {
    console.log(e, e.key)
})

// Events can also be removed