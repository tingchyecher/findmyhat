const prompt = require('prompt-sync')({ sigint: true });
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;
const field = [[]];

let pathCharacterstartRow = 0;
let pathCharacterstartCol = 0;

// Create field with fieldCharacter
function generateField() {
    for (let i = 0; i < row; i++) {

        field[i] = [];

        for (let j = 0; i < col; j++) {

            field[i][j] = fieldCharacter;
        }   // End of Inner Loop
    }   // End of Outer Loop

    // console.log(generateField());

    pathCharacterstartRow = 0;
    pathCharacterstartCol = 0;
    field[pathCharacterstartRow][pathCharacterstartCol] = pathCharacter;    // Start Position of pathCharacter *

    // Random hat position
    let hatPostionRow = Math.floor(Math.random() * row);
    let hatPositionCol = Math.floor(Math.random() * col);

    field[hatPostionRow][hatPositionCol] = hat;


    // 8 to 12 holes randomly placed
    const randomHoles = Math.floor((Math.random() * 14) + 8);
    let displayHoles = 0;

    while (displayHoles < randomHoles) {
        let displayHoleRow = Math.floor(Math.random() * row);
        let displayHoleCol = Math.floor(Math.random() * col);

        if (field[displayHoleRow][displayHoleCol] == fieldCharacter) {
            field[displayHoleRow][displayHoleCol] = "O";
            displayHoles++;
        }
    }
    return field;

}   // End of generateField Function

// generateField();

function displayField(field) {
    console.log(field.join('\n'));
}

// displayField(field);


// Character movement using u, d, l, r
function pathcCharacterMove() {

    let movementInput = prompt("Which way?")
    switch (movementInput.toUpperCase()) {
        case "u":
            pathCharacterstartCol -= 1;
            break;
        case "d":
            pathCharacterstartCol += 1;
            break;
        case "l":
            pathCharacterstartRow -= 1;
            break;
        case "r":
            pathCharacterstartRow += 1;
            break;
        default:
            console.log("Enter (u, d, l, or r)")
    }

    // Conditions
    if (pathCharacterstartRow < 0 || pathCharacterstartRow > 9 || pathCharacterstartCol < 0 || pathCharacterstartCol > 9) {
        console.log("Out Of bounds - Game End!");
        return false;
    }
    else if ((field[pathCharacterstartRow][pathCharacterstartCol]) == hole) {
        console.log("Sorry, you fell down a hole!");
        return false;
    }
    else if ((field[pathCharacterstartRow][pathCharacterstartCol]) == hat) {
        console.log("Congrats!, you found your hat!");
        return false;
    }
    else { ((field[pathCharacterstartRow][pathCharacterstartCol]) == pathCharacter); }

  clear();

}   // End of function pathcCharacterMove

function playGame() {
    let playing = true;

    displayField(field);
    pathcCharacterMove();
}

playGame();