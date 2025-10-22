const table = document.getElementById("table")
const tbody = document.getElementById("tbody")
const promedio = document.getElementById("promedio") // Promedio de presion arterial
const estado = document.getElementById("estado") // Estado de presion arterial

function data() {
    fetch('../js/presion.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            // Crear fila
            const row = document.createElement("tr")
            // Crear celdas
            const nombre = document.createElement("td")
            const dia = document.createElement("td")
            const presion = document.createElement("td")
            nombre.textContent = element.nombre
            dia.textContent = element.dia
            presion.textContent = element.presion_arteria
            // Agregar celdas
            row.appendChild(nombre)
            row.appendChild(dia)
            row.appendChild(presion)
            // Agregar fila
            tbody.appendChild(row)
        });
    })
    .catch(error => console.log("Error: " + console.error))
}

function promedioPresion() {
    let contador = 0
    let suma = 0

    fetch('../js/presion.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            suma += element.presion_arteria // Solo suma los datos del indice presion_arteria
            contador ++
        });
        let resultado = 0
        resultado = suma / contador
    promedio.textContent = "Promedio de Presion Arterial: " + resultado.toFixed(2)
    // Mostrar estado de presion
    if (resultado <= 0) {
        estado.textContent = "Estado: No hay presion arterial almacenada"
    }

    if (resultado <= 120 & resultado > 0) {
        estado.textContent = "Estado: Presion arterial normal"
    }

    if (resultado > 120 & resultado <= 129) {
        estado.textContent = "Estado: Presion arterial elevada"
    }

    if (resultado > 129) {
        estado.textContent = "Estado: Presion arterial alta"
    }
    })
    .catch(error => console.log("Error: " + console.error))
}

document.addEventListener('DOMContentLoaded', data)
document.addEventListener('DOMContentLoaded', promedioPresion)