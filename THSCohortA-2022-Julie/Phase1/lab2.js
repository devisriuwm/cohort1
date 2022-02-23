import color from 'colors-cli';
import { printMatrix, matrixInput } from './lab1.js';

function main() {
    const matrixA = matrixInput("A");
    console.log(color.magenta("The Matrix A : "));
    printMatrix(matrixA);
    console.log(color.green('The Prime Numbers from the above Matrix A : '));
    const primes = [];
    for (let i = 0; i < matrixA.length; i++) {
        for (let j = 0; j < matrixA[i].length; j++) {
            if (isPrime(matrixA[i][j])) {
                primes.push(matrixA[i][j]);
            }
        }
    }
    console.log(primes);
}

main();


function isPrime(num) {
    //return true if its prime/ if not false
    if (num == 1) return false;
    let factors = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            factors++;
            break;
        }
    }
    return (factors == 0) ? true : false;
}
