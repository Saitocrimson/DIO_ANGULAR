class Pessoa{
	nome;
	idade;
	constructor(nome,idade){
		this.nome=nome
		this.idade=idade
	}
};

function comparaIdade(p1,p2){
	if(p1.idade>p2.idade){console.log(`${p1.nome} é mais velhor que ${p2.nome}`)}
	else if(p1.idade<p2.idade){console.log(`${p2.nome} é mais velhor que ${p1.nome}`)}
	else if(p1.idade==p2.idade){console.log(`${p1.nome} tem a mesma idade que  ${p2.nome}`)}
	else{console.log('?????')}
}


var pessoa1= new Pessoa("Mel",5)
var pessoa2= new Pessoa("Salomão",2)

comparaIdade(pessoa1,pessoa2)