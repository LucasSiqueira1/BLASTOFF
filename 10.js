//10 - Faça um algoritmo que receba um número e retorne o Fatorial desse número.

const fatorial = (numero) => {
    let resultado = 1;

    for(let i = 1; i <= numero; i++) resultado = resultado * i 
    return resultado;
}

console.log(fatorial(5))
console.log(fatorial(4))
console.log(fatorial(10))