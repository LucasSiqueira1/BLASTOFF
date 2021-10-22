//11 - Dada duas lista de números A[1,2,3,4] e B[1,2,5,8], faça um algoritmo que retorne a intersecção das listas


const interseccao = () => {
    let A = [1,2,3,4];
    let B = [1,2,5,8];

    return A.filter(value => B.includes(value))
}

console.log(interseccao())