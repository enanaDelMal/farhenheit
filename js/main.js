function converterCelsius(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML=(valNum-32)/1.8;
}

function converterFarhe(Num) {
  valNum = parseFloat(Num);
  document.getElementById("outputFahrenheit").innerHTML=(Num*1.8)+32;
}
