// // create canvas element
// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');

// // set canvas size
// const size = 400;
// canvas.width = size;
// canvas.height = size;

// // create checkerboard pattern
// const numSquares = 8;
// const squareSize = size / numSquares;

// for (let i = 0; i < numSquares; i++) {
//   for (let j = 0; j < numSquares; j++) {
//     if ((i + j) % 2 === 0) {
//       ctx.fillStyle = 'black';
//     } else {
//       ctx.fillStyle = 'red';
//     }
//     ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
//   }
// }

// // add canvas to the DOM
// document.body.appendChild(canvas);


// // create container div
// const container = document.createElement('div');
// container.style.display = 'flex';
// container.style.flexWrap = 'wrap';
// container.style.width = '400px';
// container.style.height = '400px';

// // create checkerboard pattern
// const numSquares = 8;

// for (let i = 0; i < numSquares; i++) {
//   for (let j = 0; j < numSquares; j++) {
//     const tile = document.createElement('div');
//     tile.style.width = '11.1%';
//     tile.style.height = '11.1%';
//     if ((i + j) % 2 === 0) {
//       tile.style.backgroundColor = 'black';
//     } else {
//       tile.style.backgroundColor = 'white';
//     }
//     container.appendChild(tile);
//   }
// }

// // add container to the DOM
// document.body.appendChild(container);


// create checkerboard pattern
// const numSquares = 8;
// const tileSize = 50;

// for (let i = 0; i < numSquares; i++) {
//     for (let j = 0; j < numSquares; j++) {
//         const tile = document.createElement('div');
//         tile.style.width = tileSize + 'px';
//         tile.style.height = tileSize + 'px';
//         //tile.style.cssFloat = 'left';
//         tile.style.display = 'inline-block';
//     if ((i + j) % 2 === 0) {
//         tile.style.backgroundColor = 'black';
//     } else {
//         tile.style.backgroundColor = 'red';
//     }
//     document.body.appendChild(tile);
//     }
// }


// const boardSize = 8; // You can change this to adjust the size of the board
// const tileSize = "11.1%"; // The tile width and paddingBottom
// const container = document.createElement("div"); // Create a container div for the board
// container.style.width = `${boardSize * parseFloat(tileSize)}%`; // Set the container width to accommodate the tiles

// for (let i = 0; i < boardSize; i++) {
//   for (let j = 0; j < boardSize; j++) {
//     const tile = document.createElement("div"); // Create a tile div
//     tile.style.width = tileSize; // Set the tile width
//     tile.style.paddingBottom = tileSize; // Set the tile paddingBottom
//     tile.style.float = "left"; // Set the tile float
//     tile.style.backgroundColor = (i + j) % 2 === 0 ? "black" : "red"; // Alternate the tile background color
//     container.appendChild(tile); // Add the tile to the container
//   }
// }

// document.body.appendChild(container); // Add the container to the body of the page



function square() {
    
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    return square;
}

function buildCheckerboard() {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++){
            let redSquare = square();
            redSquare.style.backgroundColor = 'red';
            let blackSquare = square();
            blackSquare.style.backgroundColor = 'black'
            document.body.append(redSquare);
            document.body.append(blackSquare);
        }
    }
}

buildCheckerboard();