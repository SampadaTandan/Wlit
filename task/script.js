
// const container = document.getElementById("container");
// container.appendChild(newElement);

const form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault();
    const div = document.getElementById("colorChange");
    const color= document.querySelector("color");
    console.log(color.value);
    div.style.backgroundColor = color.value ;
});