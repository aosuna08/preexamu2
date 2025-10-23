const cantidad = document.getElementById("cantidad")
const txtTotalCompra = document.getElementById("totalCompra")
const precioCompra = document.getElementById("precioCompra")
const txtTotalVenta = document.getElementById("totalVenta")
const precioVenta = document.getElementById("precioVenta")
const txtGanancia = document.getElementById("ganancia")
const btnCalcular = document.getElementById("calcular")
/* 
    Total compra = precioCompra * cantidad de productos 
    Ganancia = total Venta – total Compra.
*/
function calcular() {
    let totalCompra = precioCompra.value * cantidad.value
    let totalVenta = precioVenta.value * cantidad.value
    let ganancia = totalVenta - totalCompra

    txtTotalCompra.value = totalCompra
    txtTotalVenta.value = totalVenta
    txtGanancia.value = ganancia
}

btnCalcular.addEventListener('click', calcular)