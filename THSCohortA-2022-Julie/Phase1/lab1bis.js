// i) Add 2 matrices size 4x4

// Sample Input 1: 
// Matrix A = [[1, 2, 3, 4], [3, 4, 5, 6], [0, 5, 7, 8], [0, 3, 9, 5]]
// Matrix B = [[7, 4, 6, 5], [6, 7, 5, 4], [0, 5, 3, 1], [2, 5, 3, 1]]
import readlineSync from 'readline-sync';
import color from 'colors-cli';

function matrixAddition() {
    const matrixA = matrixInput('A');
    const matrixB = matrixInput('B');

    if (matrixA.length == matrixB.length && matrixA[0].length == matrixB[0].length) {
        const sum = new Array(matrixA.length);
        for (let i = 0; i < sum.length; i++) {
            sum[i] = new Array(matrixA[0].length);
        }
        for (let i = 0; i < sum.length; i++) {
            for (let j = 0; j < sum[i].length; j++) {
                sum[i][j] = matrixA[i][j] + matrixB[i][j];
            }
        }
        console.log(color.magenta("The Matrix A : "));
        printMatrix(matrixA);
        console.log(color.magenta("The Matrix B : "));
        printMatrix(matrixB);
        console.log(color.magenta('The Sum of Two Matrices :'));
        printMatrix(sum);
    } else {
        console.log("Matrix Addition cant be performed");
    }
}
// matrixAddition();

function matrixInput(name) {
    const rows = readlineSync.questionInt(color.red(`Enter No. of Rows of Matrix ${name} :  `));
    const cols = readlineSync.questionInt(color.red(`Enter No. of Cols of Matrix ${name} :  `));
    console.log(color.yellow(`The Dimensions of Matrix ${name} : ${rows} x ${cols}`));

    const matrix = new Array(rows);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(cols);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = readlineSync.questionInt(`Enter Matrix A Row ${color.green(i)} Col ${color.green(j)} Value : `);
        }
    }
    return matrix;
}


function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let str = '';
        for (let j = 0; j < matrix[i].length; j++) {
            str += (`${matrix[i][j]}   `);
        }
        console.log(str);
    }
}


export {
    printMatrix,
    matrixInput
};
