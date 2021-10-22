//8 - Faça um algoritmo que receba um número e retorne se o número é primo ou não.

const numeroPrimo = (numero) => {
    for (let i = 2; i< numero; i++) if (numero % i === 0) return `${numero} não é primo`;
    return `${numero} é primo `;
}

console.log(numeroPrimo(2))
console.log(numeroPrimo(3))
console.log(numeroPrimo(4))
console.log(numeroPrimo(587))
console.log(numeroPrimo(460))