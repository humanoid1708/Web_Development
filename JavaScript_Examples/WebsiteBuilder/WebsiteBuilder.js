function insertCard(title, cname, views, date, duration, thumbnail) {
    let div = document.createElement("div")
    div.setAttribute("class", "box")
    document.querySelector(".cont").after(div)

    let image = document.createElement("div")
    image.setAttribute("class", "img")
    document.querySelector(".box").after(div)
}