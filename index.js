document.body.style.backgroundColor = "#DEAAFF"                       
let allBoxes = document.getElementsByClassName("box")

let currentPlayer = "X";
let gameStatus = "Game On";

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", () => {
        //allBoxes[i].innerText = "x"
        if (allBoxes[i].innerHTML.trim() === "" && gameStatus === "Game On") {
            allBoxes[i].innerHTML =currentPlayer;

            currentPlayer = currentPlayer === "x" ? "o" : "x";

            document.getElementById("player").innerHTML = currentPlayer.toUpperCase();

            if (
              allBoxes[0].innerHTML == allBoxes[1].innerHTML &&
              allBoxes[1].innerHTML == allBoxes[2].innerHTML &&
              allBoxes[0].innerHTML.trim() != ""
            ) {
              showWinner(0, 1, 2);
            } else if (
              allBoxes[3].innerHTML == allBoxes[4].innerHTML &&
              allBoxes[4].innerHTML == allBoxes[5].innerHTML &&
              allBoxes[3].innerHTML.trim() != ""
            ) {
              showWinner(3, 4, 5);
            } else if (
              allBoxes[6].innerHTML == allBoxes[7].innerHTML &&
              allBoxes[7].innerHTML == allBoxes[8].innerHTML &&
              allBoxes[6].innerHTML.trim() != ""
            ) {
              showWinner(6, 7, 8);
            } else if (
              allBoxes[0].innerHTML == allBoxes[3].innerHTML &&
              allBoxes[3].innerHTML == allBoxes[6].innerHTML &&
              allBoxes[0].innerHTML.trim() != ""
            ) {
              showWinner(0, 3, 6);
            } else if (
              allBoxes[1].innerHTML == allBoxes[4].innerHTML &&
              allBoxes[4].innerHTML == allBoxes[7].innerHTML &&
              allBoxes[1].innerHTML.trim() != ""
            ) {
              showWinner(1, 4, 7);
            } else if (
              allBoxes[2].innerHTML == allBoxes[5].innerHTML &&
              allBoxes[5].innerHTML == allBoxes[8].innerHTML &&
              allBoxes[2].innerHTML.trim() != ""
            ) {
              showWinner(2, 5, 8);
            } else if (
              allBoxes[0].innerHTML == allBoxes[4].innerHTML &&
              allBoxes[4].innerHTML == allBoxes[8].innerHTML &&
              allBoxes[0].innerHTML.trim() != ""
            ) {
              showWinner(0, 4, 8);
            } else if (
              allBoxes[2].innerHTML == allBoxes[4].innerHTML &&
              allBoxes[4].innerHTML == allBoxes[6].innerHTML &&
              allBoxes[2].innerHTML.trim() != ""
            ) {
              showWinner(2, 4, 6);
            }
            
        }
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