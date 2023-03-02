const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
const secondRandomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

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
            redSquare.style.backgroundColor = randomColor;
            let blackSquare = square();
            blackSquare.style.backgroundColor = secondRandomColor;
            document.body.append(redSquare);
            document.body.append(blackSquare);
        }
    }
}

buildCheckerboard();