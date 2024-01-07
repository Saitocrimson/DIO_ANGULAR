class Tudo{
	nome;
	numero;
	constructor(nome,numero){
	this.nome=nome
	this.numero=numero
	}
	descricao(){
	console.log(`Variaveis de teste: nome ${this.nome} 	e numero ${this.numero}`);
	}
    };

	


var objeto={
	nome:"AAAAA",
	numero:12,
	descricao:function(){
	console.log(`Variaveis de teste: nome ${this.nome} e numero ${this.numero}`);
	}
	
};
var valor= new Tudo('aaaaaaa',30)
/*valor.nome="aaaa"*/
objeto.tipo="objeto"
console.log("nome: "+objeto.nome+"\nnumero: "+"\n"+objeto.numero+"tipo: "+objeto.tipo)

objeto.descricao()
/*delete objeto.nome*/
console.log(objeto['nome'])
console.log(valor)