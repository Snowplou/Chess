// Create board
let board = {}
for (let i = 1; i <= 64; i++) {
    board[i] = { piece: "empty" }
}
board[1] = { piece: "wrook" }
board[2] = { piece: "wknight" }
board[3] = { piece: "wbishop" }
board[4] = { piece: "wqueen" }
board[5] = { piece: "wking" }
board[6] = { piece: "wbishop" }
board[7] = { piece: "wknight" }
board[8] = { piece: "wrook" }
board[9] = { piece: "wpawn" }
board[10] = { piece: "wpawn" }
board[11] = { piece: "wpawn" }
board[12] = { piece: "wpawn" }
board[13] = { piece: "wpawn" }
board[14] = { piece: "wpawn" }
board[15] = { piece: "wpawn" }
board[16] = { piece: "wpawn" }
board[57] = { piece: "brook" }
board[58] = { piece: "bknight" }
board[59] = { piece: "bbishop" }
board[60] = { piece: "bqueen" }
board[61] = { piece: "bking" }
board[62] = { piece: "bbishop" }
board[63] = { piece: "bknight" }
board[64] = { piece: "brook" }
board[49] = { piece: "bpawn" }
board[50] = { piece: "bpawn" }
board[51] = { piece: "bpawn" }
board[52] = { piece: "bpawn" }
board[53] = { piece: "bpawn" }
board[54] = { piece: "bpawn" }
board[55] = { piece: "bpawn" }
board[56] = { piece: "bpawn" }

// Display board
for (let i = 0; i < 8; i++) {
    let row = document.createElement("div")
    row.className = "row"
    document.getElementById("board").appendChild(row)
    for (let j = 0; j < 8; j++) {
        let square = document.createElement("div")
        square.id = 64 - (-j + (i * 8)) - 7
        square.className = "square"
        if ((Number(square.id) + i) % 2 == 0) {
            square.classList.add("black")
        }
        else {
            square.classList.add("white")
        }

        if (board[square.id].piece != "empty") {
            let pic = document.createElement("img")
            pic.src = "pictures/" + board[square.id].piece + ".png"
            pic.id = "pic" + square.id
            square.appendChild(pic)
        }

        row.appendChild(square)
    }
}

// Game info
let turn = "white"
let wcastle = [true, true]
let bcastle = [false, false]

// Get possible moves
for(let i = 1; i <= 64; i++){
    let square = document.getElementById(i)
    square.addEventListener("click", () => {
        squareClicked(square.id);
    })
}

function checkValid(piece, square){
    return true
}

function squareClicked(clickedSquare){
    let square = document.getElementById(clickedSquare)
    let squareNumber = Number(square.id)
    let piece = square.children
    if(!piece.length) return
    piece = piece[0].src.split("pictures/")[1].split(".png")[0]
    let moves = []
    if(piece == "wpawn" || piece == "bpawn"){
        moves = [8]
    }
    else if(piece == "wrook" || piece == "brook"){
        moves = [-56, -48, -40, -32, -24, -16, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56]
    }
    else if(piece == "wknight" || piece == "bknight"){
        moves = [-17, -15, -10, -6, 6, 10, 15, 17]
    }
    else if(piece == "wbishop" || piece == "bbishop"){
        moves = [-63, -54, -49, -45, -42, -36, -35, -28, -27, -21, -18, -14, -9, -7, 7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49, 54, 63]
    }else if(piece == "wqueen" || piece == "bqueen"){
        moves = [-56, -48, -40, -32, -24, -16, -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, -63, -54, -49, -45, -42, -36, -35, -28, -27, -21, -18, -14, -9, -7, 7, 9, 14, 18, 21, 27, 28, 35, 36, 42, 45, 49, 54, 63]
    }
    else if(piece == "wking" || piece == "bking"){
        moves = [-9, -8, -7, -1, 1, 7, 8, 9]
    }

    // Calculate move border
    let down = Math.floor((squareNumber - 1) / 8)
    let up = 7 - down
    let left = Math.ceil(squareNumber - 8 * down) - 1
    let right = 7 - left

    for(let i = 0; i < moves.length; i++){
        if(squareNumber + moves[i] >= 1 && squareNumber + moves[i] <= 64){
            let horizontal
            console.log(horizontal, vertical)
            let dot = document.createElement("span")
            dot.className = "dot"
            document.getElementById(squareNumber + moves[i]).appendChild(dot)
        }
    }
}