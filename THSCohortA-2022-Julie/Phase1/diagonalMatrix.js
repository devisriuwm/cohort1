import { matrixInput, printMatrix } from './lab1.js';
import color from 'colors-cli';
function main() {
    const matrixA = matrixInput('Square');
    //Check for square matrix
    if (matrixA.length !== matrixA[0].length) {
        return console.log(color.red_bbt("Input is NOT SQUARE MATRIX."));
    }
    let leftSum = 0;
    let rightSum = 0;
   
    for (let i = 0, j = matrixA.length - 1; i < matrixA.length, j >= 0; i++, j--) {
        rightSum += matrixA[i][j];
        leftSum += matrixA[i][i];
    }
    console.log(`The sum of left diagonal : `, leftSum);
    console.log(`The sum of right diagonal : `, rightSum);
    let result = Math.abs(leftSum - rightSum);
    console.log(`The absolute difference : ${result} `);
    printMatrix(matrixA);
}
main();
