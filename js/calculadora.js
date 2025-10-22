const tabla = document.getElementById("tabla") // Select de la tabla
const calcular = document.getElementById("calcular") // Boton que acciona la funcion de calcular tabla
const limpiar = document.getElementById("limpiar") // Boton para limpiar el resultado
const resultado = document.getElementById("resultado") // Imprimir tabla de multiplicar

function calcularTabla() {
    resultado.innerHTML = ""
    let producto = 0
    const multiplo = parseInt(tabla.value)
    let resultadoTabla = ""
    for(let i = 1 ; i < 11 ; i++) {
        producto = i * multiplo
        resultadoTabla += `${multiplo} x ${i} = ${producto}<br>`;
    }
    resultado.innerHTML = resultadoTabla;
}

function limpiarResultado() {
    tabla.value = 1
    resultado.innerHTML = ""
}

calcular.addEventListener('click', calcularTabla)
limpiar.addEventListener('click', limpiarResultado)