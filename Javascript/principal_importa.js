/*forma 1
var coisa=require("./importa.js")
console.log(coisa.gets())
coisa.mensagem("oi")*/


/*forma 2*/
const {gets,mensagem}=require("./importa.js")
mensagem(gets())



/*

const pessoa={nome:"Pudim"}
formas de pegar um atributo
const {nome}=pessoa <-mesma coisa->const nome=pessoa.nome*/