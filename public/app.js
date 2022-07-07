let btn = document.querySelector("button");

btn.addEventListener("click", btnFunc);

function btnFunc() {
    let classInput = document.querySelector("#classInput").value
    window.open(`https://simple-100devs-assignment-api.herokuapp.com/homework/${classInput}`)
}