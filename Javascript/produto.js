var debito/*10%*/
var dinheiro_pix/*15%*/
var parcelado/*2x->normal semjuros*/
var parcelado_acima_2/*+2x->normal+10%*/
var pagar="pix"
var vezes
var produto=100


if(pagar=="debito"){console.log((produto-(produto*10)/100).toFixed(02))}

if(pagar=="dinheiro" || pagar=="pix"){console.log((produto-(produto*15)/100).toFixed(02))}

if(pagar=="parcelado"){
	vezes=2
	if(vezes==2){console.log(produto)}
	else{console.log((produto*(1+0.1)).toFixed(2))}

}
