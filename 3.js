//3 - Dados três números (a, b, c), faça um algoritmo para mostrar o menor número.

const menorNumero = (a,b,c) => {
    let menor = a

    if(menor > b) {
        menor = b;
    }
    if (menor > c){
        menor = c;
    }
    
    return menor;
}

console.log(menorNumero(5,2,0))
console.log(menorNumero(94,19,20))