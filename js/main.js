function converterFarhe() {
  var resultado= document.getElementById("inputCelsius").value;
  var calculo= (resultado-32)/1.8;
  document.getElementById("inputFahrenheit").value = parseFloat(calculo)
}


function converterCelsius() {
  var respuesta= document.getElementById("inputFahrenheit").value;
  var calculo2= (respuesta*1.8)+32;
  document.getElementById("inputCelsius").value = calculo2.toFixed(2);
}
