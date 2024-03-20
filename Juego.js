let tarjetasDestapadas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let puntaje = 0
let tiempo = false
let temporizadorInicial = 60
let temporizador = 60
let tiempoRegresivo = null

let mostrarMovi = document.getElementById('movimientos')
let mostrarPuntaje = document.getElementById('puntaje')
let mostrarTiempo = document.getElementById('t-restante')


let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
numeros = numeros.sort(()=>{return Math.random()-0.5})
console.log(numeros);


function contadorTiempo(){
    tiempoRegresivo = setInterval(()=>{
        temporizador--
        mostrarTiempo.innerHTML = `Tiempo: ${temporizador} segundos`
        if(temporizador == 0){
            clearInterval(tiempoRegresivo)
            bloquearTarjetas()
        }

    },1000)
}


function bloquearTarjetas(){
    for(let i=0; i<=19; i++){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = `<img src= "./imagenes/${numeros[i]}.png" alt="">`
        tarjetaBloqueada.disabled = true
    }
}


function voltear(id){

    if (tiempo == false){
        contadorTiempo()
        tiempo = true
    }

    tarjetasDestapadas++
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id)
        primerResultado = numeros[id]
        tarjeta1.innerHTML = `<img src= "./imagenes/${primerResultado}.png" alt="">`

        tarjeta1.disabled = true

    }else if(tarjetasDestapadas == 2){
        tarjeta2 = document.getElementById(id)
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = `<img src= "./imagenes/${segundoResultado}.png" alt="">`

        tarjeta2.disabled = true

        movimientos++
        mostrarMovi.innerHTML = `Movimientos: ${movimientos}`

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;

            puntaje += 10
            mostrarPuntaje.innerHTML = `Puntaje: ${puntaje}`

            if(puntaje == 100){
                clearInterval(tiempoRegresivo)
                mostrarPuntaje.innerHTML = `Puntaje: ${puntaje} Felicidades😎`
                mostrarTiempo.innerHTML = `Felicidades demoraste: ${temporizadorInicial - temporizador} segundos`
                mostrarMovi.innerHTML = `Movimientos: ${movimientos} Felicidades😎`
            }
            
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = ' '
                tarjeta2.innerHTML = ' '
                tarjeta1.disabled = false
                tarjeta2.disabled = false
                tarjetasDestapadas = 0
            },700)
        }
    }
    
}
