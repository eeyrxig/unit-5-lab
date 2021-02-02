document.body.style.backgroundColor = "#DEAAFF"                       
let allBoxes = document.getElementsByClassName("box")

let currentPlayer = " x";
let gameStatus = "Game On";

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener("click", () => {
        if (allBoxes[i].innerHTML.trim() === "" && gameStatus === "Game On") {
            allBoxes[i].innerHTML =currentPlayer;

            currentPlayer = currentPlayer === " x" ? " o" : " x";

            document.getElementById("player").innerHTML = currentPlayer

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
      });
    }

    //resets the game
    document.getElementById("reset").addEventListener("click", function() {
      let resetPlayer = document.getElementsByTagName("p")
      resetPlayer[0].innerHTML = 'Player<span id="player"> x</span> your turn';
        for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerHTML = "";
      }
      currentPlayer = " x";
      document.getElementById("player").innerHTML = " x";
      gameStatus = "Game On";
    });

    //displays the winner
    function showWinner(x, y, z) {
   console.log(`Player ${currentPlayer == " x" ? " O" : " X"} wins`)
   let winner = document.getElementsByTagName("p")
   winner[0].innerText = `Player ${currentPlayer == " x" ? " O" : " X"} wins`
      gameStatus = "Game Over";
    }