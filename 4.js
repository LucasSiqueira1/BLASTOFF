//4 - Faça um algoritmo que converta a temperatura de C para F. Utilize a fórmula C=5/9(F-32)

const converterTemp = (celsius) => {
    let fahrenheit = 0;

    //convertendo a formula temos a expresão abaixo
    fahrenheit = ((celsius * 9)/5) + 32
    return fahrenheit;
}

console.log(converterTemp(32))
console.log(converterTemp(27))