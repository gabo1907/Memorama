
//Variables auxiliares
let maximo = 18
let imagenes = []
let selecciones = []

/** Esta funcion se encarga de mostrar las imágenes contenidas en el arreglo
 * por medio del for y, con ayuda del método splice se evita que sólo se imprima
 * la primera imagen 18 veces. Además, también se les define aleatoriedad para
 * mostrarlas en un orden distinto una vez que se acabe el juego.
*/
function generarJuego() {
    const imagenes = [
    '<img src="img/001.png">',
    '<img src="img/002.png">',
    '<img src="img/003.png">',
    '<img src="img/004.png">',
    '<img src="img/005.png">',
    '<img src="img/006.png">',
    '<img src="img/007.png">',
    '<img src="img/008.png">',
    '<img src="img/009.png">',
    ]
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < maximo; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${imagenes[0]}
                </div>
                <div class="cara superior">
                    <img src="img/cover.png">
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
             imagenes.splice(0, 1)
         }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

/** Esta función voltea las cartas por medio de una transformación y valida que
 * no selecciones más de dos
 */
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

/** Esta función se encarga de validar si se tratan de cartas iguales, sino, 
 * regresa todo a su estado original (volteándolas)
 */
function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }
    }, 1000);
}