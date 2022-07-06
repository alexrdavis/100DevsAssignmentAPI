let btn = document.querySelector("button");

btn.addEventListener("click", btnFunc);

function btnFunc() {
    let classInput = document.querySelector("#classInput").value
    window.open(`http://localhost:8000/homework/${classInput}`)
}