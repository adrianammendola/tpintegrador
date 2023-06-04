// Obtener referencia a los elementos
const cantidadInput = document.getElementById('cantidadIngresada');
const categoriaSelect = document.getElementById('selectCategoria');
const totalPagarInput = document.getElementById('totalPago');
const calcularTotal = document.getElementById("btncalcularValorPrecio");
const borrarTotal = document.getElementById("btnborrarTotal")

//Aplica descuento segun categoria
function aplicarDescuento(cantidad,categoria){
    var descuento=0;

    if(categoria===1){
        descuento=(cantidad*200)*80/100
        return descuento - cantidad*200
    }
    else if(categoria===2){
        descuento=(cantidad*200)*50/100
        return descuento - cantidad*200
    }
    
    descuento=(cantidad*200)*15/100
    return descuento - cantidad*200

}

// Agrega evento cuando hace click en borrar
borrarTotal.addEventListener('click',function()
    {
        totalPagarInput.value = ''
        cantidadInput.value = ''
    }
);

// Agregar evento cuando hace click en resumen
calcularTotal.addEventListener('click', function() {
// Obtener los valores de cantidad y categoría
const cantidad = parseInt(cantidadInput.value);
const categoria = parseInt(categoriaSelect.value);

  
  // Realizar el calculo segun categoría seleccionada
  let totalPagar = 0;
  switch (categoria) {
    case 1:
      totalPagar = Math.abs(aplicarDescuento(cantidad,categoria)); 
      break;
    case 2:
      totalPagar = Math.abs(aplicarDescuento(cantidad,categoria)); 
      break;
    case 3:
      totalPagar = Math.abs(aplicarDescuento(cantidad,categoria));
      break;
    default:
      totalPagar = 0;
  }

  // Asignar el resultado al campo de total pago
  totalPagarInput.value = 'Total a Pagar: $' + totalPagar;
});
