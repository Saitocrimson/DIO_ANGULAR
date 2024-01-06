var peso=80
var altura=1.75
var imc=(peso/(Math.pow(altura,2))).toFixed(2)


if(imc<18.5){console.log("Abaixo do peso")}
else if(imc>=18.5 && imc<25){console.log("Normal")}
else if(imc>=25 && imc<30){console.log("Acima do peso")}
else if(imc>=30 && imc<40){console.log("Obeso")}
else{console.log("Obseidade grave")}
