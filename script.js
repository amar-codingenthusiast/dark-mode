let button = document.querySelector("button");
let body = document.querySelector("body");
let mode = () => {
    let curr = body.getAttribute("class");
    if(curr === "light") {
        body.setAttribute("class", "dark");
        button.innerText = "Mode: Light";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        body.setAttribute("class", "light");
        button.innerText = "Mode: Dark";
        button.style.backgroundColor = "black";
        button.style.color = "white";
    }
};
button.addEventListener("click", mode);