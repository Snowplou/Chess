// Create board
let board = []
for (let i = 0; i < 8; i++) {
    board[i] = []
    for (let j = 0; j < 8; j++) {
        board[i].push("empty")
    }
}

board[0][0] = "wrook"
board[1][0] = "wknight"
board[2][0] = "wbishop"
board[3][0] = "wqueen"
board[4][0] = "wking"
board[5][0] = "wbishop"
board[6][0] = "wknight"
board[7][0] = "wrook"
board[0][1] = "wpawn"
board[1][1] = "wpawn"
board[2][1] = "wpawn"
board[3][1] = "wpawn"
board[4][1] = "wpawn"
board[5][1] = "wpawn"
board[6][1] = "wpawn"
board[7][1] = "wpawn"
board[0][7] = "brook"
board[1][7] = "bknight"
board[2][7] = "bbishop"
board[3][7] = "bqueen"
board[4][7] = "bking"
board[5][7] = "bbishop"
board[6][7] = "bknight"
board[7][7] = "brook"
board[0][6] = "bpawn"
board[1][6] = "bpawn"
board[2][6] = "bpawn"
board[3][6] = "bpawn"
board[4][6] = "bpawn"
board[5][6] = "bpawn"
board[6][6] = "bpawn"
board[7][6] = "bpawn"

// Display board
for (let i = 0; i < 8; i++) {
    let row = document.createElement("div")
    row.className = "row"
    document.getElementById("board").appendChild(row)
    for (let j = 0; j < 8; j++) {
        let square = document.createElement("div")
        square.id = 64 - (-j + (i * 8)) - 7
        square.className = "square"
        if ((j + i) % 2 == 0) {
            square.classList.add("white")
        }
        else {
            square.classList.add("black")
        }

        if (board[j][7 - i] != "empty") {
            let pic = document.createElement("img")
            pic.src = "pictures/" + board[j][7 - i] + ".png"
            pic.id = "pic" + square.id
            pic.className = "piece"
            square.appendChild(pic)
        }

        row.appendChild(square)
    }
}

// Game info
let turn = "white"
let wcastle = [true, true]
let bcastle = [false, false]
let wtorpedo = [true, true, true, true, true, true, true, true]
let btorpedo = [true, true, true, true, true, true, true, true]

// Get possible moves
for (let i = 1; i <= 64; i++) {
    let square = document.getElementById(i)
    square.addEventListener("click", () => {
        squareClicked(square.id);
    })
}

function checkValid(piece, square) {
    return true
}

function squareClicked(clickedSquare) {
    let square = document.getElementById(clickedSquare)
    let squareNumber = Number(square.id)
    let piece = square.children
    if (!piece.length) return
    piece = piece[0].src.split("pictures/")[1].split(".png")[0]

    let y = Math.floor((squareNumber - 1) / 8)
    let x = Math.ceil(squareNumber - 8 * y) - 1

    let moves = []
    if (piece == "wpawn" || piece == "bpawn") {
        if ((turn == "white" && wtorpedo[x]) || (turn == "black" && btorpedo[x])) {
            moves = [[0, 1], [0, 2]]
        }
        else {
            moves = [[0, 1]]
        }
    }
    else if (piece == "wrook" || piece == "brook") {
        for (let i = x + 1; i <= 7; i++) {
            if(board[i][y] != "empty"){
                break
            }
            moves.push([i - x, 0])
        }
        for (let i = x - 1; i >= 0; i--) {
            if(board[i][y] != "empty"){
                break
            }
            moves.push([i - x, 0])
        }
        for (let i = y + 1; i <= 7; i++) {
            if(board[x][i] != "empty"){
                break
            }
            moves.push([0, i - y])
        }
        for (let i = y - 1; i >= 0; i--) {
            if(board[x][i] != "empty"){
                break
            }
            moves.push([0, i - y])
        }
    }
    else if (piece == "wknight" || piece == "bknight") {
        moves = [-17, -15, -10, -6, 6, 10, 15, 17]
    }
    else if (piece == "wbishop" || piece == "bbishop") {
        moves = [-63, -54, -49, -45, -42, -36, -35, -28, -27, -21, -18, -14, -9, -7, 7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49, 54, 63]
    } else if (piece == "wqueen" || piece == "bqueen") {
        moves = [-56, -48, -40, -32, -24, -16, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, -63, -54, -49, -45, -42, -36, -35, -28, -27, -21, -18, -14, -9, -7, 7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49, 54, 63]
    }
    else if (piece == "wking" || piece == "bking") {
        moves = [-9, -8, -7, -1, 1, 7, 8, 9]
    }

    for(let i = 0; i < moves.length; i++){
        let availableSquare = document.getElementById(squareNumber + moves[i][0] + (moves[i][1] * 8))
        availableSquare.classList.remove("white")
        availableSquare.classList.remove("black")
        availableSquare.classList.add("available")
    }
}