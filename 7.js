//7 - Dada uma lista de números A[1,2,3,…], faça um algoritmo que retorne uma lista somente com os números pares.



const numPar = () => {
    let a = [1,2,3,4,5,6,7,8]
    let b= []

    for (let i of a) if(i % 2 == 0) b.push(i)
    
    return console.log(b)
}

numPar()