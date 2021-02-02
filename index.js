document.body.style.backgroundColor = "#DEAAFF"                       
// let row1A = document.querySelector("#sec1")
// let row1B= document.querySelector("#sec2")
// let row1C = document.querySelector("#sec3")
// let row2A = document.querySelector("#sec4")
// let row2B = document.querySelector("#sec5")
// let row2C = document.querySelector("#sec6")
// let row3A = document.querySelector("#sec7")
// let row3B = document.querySelector("#sec8")
// let row3C = document.querySelector("#sec9")
let allBoxes = document.getElementsByClassName("box")

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", () => {
        allBoxes[i].innerText = "x"
        
    })
}














// row1A.addEventListener("click", () => {
//     row1A.innerText = "x"
// })
// row1B.addEventListener("click", () => {
//     row1B.innerText = "x"
// })
// row1C.addEventListener("click", () => {
//     row1C.innerText = "x"
// })



// row2A.addEventListener("click", () => {
//     row2A.innerText = "x"
// })
// row2B.addEventListener("click", () => {
//     row2B.innerText = "x"
// })
// row2C.addEventListener("click", () => {
//     row2C.innerText = "x"
// })



// row3A.addEventListener("click", () => {
//     row3A.innerText = "x"
// })
// row3C.addEventListener("click", () => {
//     row3C.innerText = "x"
// })
// row3B.addEventListener("click", () => {
//     row3B.innerText = "x"
// })