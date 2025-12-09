const BOARD_SIZE = 5;
const board = document.getElementById("board");
const moveCounterDisplay = document.getElementById("moveCounter");
const newGameBtn = document.getElementById("newGameBtn");

let squares = [];
let moves = 0;

// Create board squares
function createBoard() {
    board.innerHTML = "";
    squares = [];
    for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.index = i;
        square.addEventListener("click", () => handleClick(i));
        board.appendChild(square);
        squares.push(square);
    }
}

// Handle square click
function handleClick(index) {
    toggleSquare(index);
    moves++;
    moveCounterDisplay.textContent = `Moves: ${moves}`;
}

// Toggle a square and its neighbors
function toggleSquare(index) {
    const row = Math.floor(index / BOARD_SIZE);
    const col = index % BOARD_SIZE;

    const positions = [
        [row, col],
        [row-1, col],
        [row+1, col],
        [row, col-1],
        [row, col+1]
    ];

    positions.forEach(([r, c]) => {
        if (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE) {
            const i = r * BOARD_SIZE + c;
            squares[i].classList.toggle("is-off");
        }
    });

    checkWin();
}

// Check if all squares are white
function checkWin() {
    const isWin = squares.every(sq => !sq.classList.contains("is-off"));
    if (isWin) {
        window.alert(`You win! Moves: ${moves}`);
    }
}

// Random solvable board by simulating random clicks
function randomizeBoard() {
    moves = 0;
    moveCounterDisplay.textContent = `Moves: ${moves}`;
    const randomClicks = 10 + Math.floor(Math.random() * 10);
    for (let i = 0; i < randomClicks; i++) {
        const index = Math.floor(Math.random() * BOARD_SIZE * BOARD_SIZE);
        toggleSquare(index);
    }
}

// New Game button
newGameBtn.addEventListener("click", () => {
    createBoard();
    randomizeBoard();
});

// Initialize game
createBoard();
randomizeBoard();
