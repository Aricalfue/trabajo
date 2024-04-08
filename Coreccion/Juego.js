let T = 60;
let activarTiempo = true
let destapar = 0
let tarjeta1 = null
let serie1 = null
let tarjeta2 = null
let serie2 = null
let contadorTiempo = document.getElementById('contadorTiempo');
let CM = 0
let CMA = 0
let contadorMovimientos = document.getElementById('contadorMovimientos');
let P = 0
let contadorPuntaje = document.getElementById('contadorPuntaje');
let NP = 0
let botonReiniciar = document.getElementById('reiniciar')

array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
numeros = array.sort(()=>Math.random()-0.5);

function tiempoC(){
    TI = setInterval(()=>{
        T--
        contadorTiempo.innerHTML = `Tiempo: ${T} segundos`
        if (T == 0){
            clearInterval(TI)
            setInterval(location.reload(alert(`Perdiste! :(`)))
        }
    },1000)
}
function inicio(numero){
    
    if(activarTiempo){
        tiempoC()
        activarTiempo = false
    }

    destapar+=1
    if (destapar == 1){
        tarjeta1 = document.getElementById(numero)
        serie1 = numeros[numero]
        tarjeta1.innerHTML = (`${serie1}`)
        tarjeta1.disabled = true
    }

    if (destapar == 2){
        tarjeta2 = document.getElementById(numero)
        serie2 = numeros[numero]
        tarjeta2.innerHTML = (`${serie2}`)
        tarjeta2.disabled = true

        if(serie1 == serie2){
            CM+=1
            CMA = 0
            P += 10
            NP += 1
            contadorPares.innerHTML = `Pares encontrados: ${NP} / 9`
            contadorMovimientos.innerHTML = `Movimientos: ${CM}`
            contadorPuntaje.innerHTML = `Puntaje: ${P}`
            tarjeta1.disabled = true
            tarjeta2.disabled = true
            destapar = 0
        } else {
            CM+=1
            CMA+=1
            contadorMovimientos.innerHTML = `Movimientos: ${CM}`
            setTimeout(()=>{
                tarjeta1.innerHTML = (`?`)
                tarjeta1.disabled = false
                tarjeta2.innerHTML = (`?`)
                tarjeta2.disabled = false
                destapar = 0
            }, 800)
        }
    }

    if (P == 90){
        clearInterval(TI)
        alert('Ganaste! B)')
        botonReiniciar.innerHTML = `<a href="vista.html">Reiniciar</a>`
    }

    // NUEVO: Agregamos un sistema de ayuda basado en la cantidad de movimientos para revelar algunos botones si el jugador es bien malo

    if(CMA == 10){
        tarjeta2.innerHTML = (`${serie2}`)
    }
}

