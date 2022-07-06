let btn = document.querySelector("button");

btn.addEventListener("click", btnFunc);

function btnFunc() {
    let classInput = document.querySelector("#classInput").value
    window.open(`process.env.PORT/${classInput}`)
}