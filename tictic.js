const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";  
let gameOver = false;

const winCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleClick(index));
});
restartBtn.addEventListener("click", resetGame);


function handleClick(idx) {
  if (board[idx] !== "" || gameOver) return;

  board[idx] = currentPlayer;
  cells[idx].textContent = currentPlayer;

  if (checkWinner(currentPlayer)) {
    message.textContent = `${currentPlayer} wins!`;
    gameOver = true;
    return;
  }

  if (board.every(cell => cell !== "")) {
    message.textContent = "It's a draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(player) {
  return winCombos.some(combo =>
    combo.every(i => board[i] === player)
  );
}

function resetGame() {
  board.fill("");
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  message.textContent = "";
  gameOver = false;
}