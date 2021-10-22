//5 - Faça um algoritmo para apresentar se dois números são múltiplos.

const multiplo = (numero1,numero2) => {
    let resultado;

    if(numero1 % numero2 === 0) {
        resultado = `${numero1} é multiplo de ${numero2}`
    }
    else {
        resultado = `${numero1} não é multiplo de ${numero2}`
    }

    return resultado;
}

console.log(multiplo(32,2))
console.log(multiplo(27,20))
console.log(multiplo(97,5))