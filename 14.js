//14 - Faça um algoritmo que recebe uma palavra e retorne se a palavra é palíndromo. (Palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa. Ex: osso, Ana e etc).

const palindromo = (palavra) => {
    for(let i = 0; i < palavra.length /2; i++) {
        if(palavra[i] != palavra[palavra.length -i -1 ]){
            return `${palavra} não é palíndromo`
        }
    }
    return `${palavra} é palíndromo`
}

console.log(palindromo('osso'))
console.log(palindromo('perna'))
console.log(palindromo('ana'))
console.log(palindromo('carro'))