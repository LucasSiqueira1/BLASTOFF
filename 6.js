//6 - Uma partida de futebol iniciou na hora A e terminou na hora B. Faça um algoritmo que calcule o tempo que durou a partida.


const duracaoPartida = (hora1, minutos1, hora2, minutos2) => {
    //convertendo as horas para minutos
    let convertHora1 = ((hora1*60)+minutos1)
    let convertHora2 = ((hora2*60)+minutos2)
    let resultado = 0

    if(convertHora1 > convertHora2) {
        return console.log("Hora final tem que ser maior que a inicial")
    }

    else {
        resultado = convertHora2 - convertHora1
        return console.log(`A partida durou ${resultado} minutos`)
    }
}

duracaoPartida(1,30,3,0) //1:30 -> 3:00
duracaoPartida(2,0,4,0) //2:00 -> 4:00
duracaoPartida(10,20,12,0) //10:20 -> 12:00