//9 - Faça um algoritmo que receba um número e retorne a tabuada desse número.

const tabuada = (numero) => {
    console.log(`Tabuada do ${numero}:`)

    for(let i =0; i<=10; i++)console.log(`${numero} X ${i} = ${i * numero}`)
}

tabuada(5)
tabuada(7)
tabuada(2)
tabuada(1)
