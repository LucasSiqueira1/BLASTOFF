//13 - Faça um algoritmo que receba uma matriz[i,z] como parâmetro e imprima todos os valores dessa matriz.

const imprimirMatriz = () => {
    let matriz = [[1,2,3],[4,5,6]]

    for(let i=0 ; i<matriz.length ; i++) {
        let ordem = "";
        for(let j=0; j<matriz[i].length ; j++){
            ordem += matriz[i][j] + " ";
        }
        
        console.log(ordem);
    }
}

imprimirMatriz()
