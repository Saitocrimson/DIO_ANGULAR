var etanol=5.79
var gasolina=6.66
var tipo= "etanol"
var gasto_medio=10
var distancia_km=100

if(tipo=="etanol"){
	console.log(((distancia_km/gasto_medio)*etanol).toFixed(2))
}
else if(tipo=="gasolina"){
	console.lo(((distancia_km/gasto_medio)*gasolina).toFixed(2))
}
else{
	console.log("Nenhuma opcao foi selecionada")
}