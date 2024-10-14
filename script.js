let btnEvaluacion = document.getElementById("eval-empleado");
let btnCheckStock = document.getElementById("check-stock");
let btnCalculateOff = document.getElementById("calculate-off");
let btnPlayground = document.getElementById("playground")


// Punto 1
btnEvaluacion.addEventListener("click", function() {
    // cal >= 90 - Destacado , >= 70 < 90 - Desempeño satisfactorio, desempeño insatifactorio

    alert("Bienvenido al módulo de evaluación de empleado, ingresa tu nombre y el valor de la evaluación del resultado de tu auditoría.")

    let name = prompt("Nombre del empleado: ")
    let calificacion = parseInt(prompt("Resultado de la evaluación: "))

    let message = `${name}, tu calificafión es: `

    if(calificacion >= 90){  // >= 90
        message += "Destacado."
    } else if (calificacion >= 70 && calificacion < 90) {
        message += "Desempeño satisfactorio."
    } else {
        message += "Desempeño insatisfactorio"
    }

    alert(message)
})

// Punto 2
btnCheckStock.addEventListener("click", function() {
    alert("Bienvenido al módulo de inventario")

    let code = prompt("Ingrese el código del producto")
    let random = Math.floor((Math.random() * 100) + 1)

    let message = `El producto con código ${code} tiene inventario: `

    if (random % 2 == 0) {
        message += "El inventario está balanceado"
    } else {
        message += "Revisar inventario, número irregular"
    }
    alert(message)
})

// Punto 3
btnCalculateOff.addEventListener("click", function() {
    alert("Bienvenido al módulo de compra")

    let total = parseFloat(prompt("Ingrese valor de la compra:"))

    let message = "El valor total de la compra: "

    if (total > 100) {
        message += total - total * .1
    } else {
        message += total
    }

    alert(message)
})

// Punto 4
btnPlayground.addEventListener("click", function() {
    alert("Bienvenido al módulo de juego de adivinanza")

    let random = Math.floor((Math.random() * 10) + 1)
    let numero = parseInt(prompt("Ingrese un numero entre 1 y 10"))

    
    if (numero == random) {
        alert("¡Felicidades! has ganado un cupón de descuento.")
    } else {
        alert(`Lo siento, el número era ${random}`)
    }
})
