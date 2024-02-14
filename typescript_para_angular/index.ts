//variaveis extras
var qualquer: any;
var vazio: void;
//array
var dados:string[]=["Banana","Maça","Uva"]
var multi_tipos:(string|number)[]=[1,"pera",9]
//tupla, precisa estar na ordem
let contato:[string,number,string]=["Fulano",987654321,"email.com"]
//date
var niver:Date=new Date("2020-05-01 5:00")



//Objetos->
//generico
let produto:object={
    nome:"",
    marca:"",
    valor:0
}
//mais previsivel
type heroi={
    name:string;
    vulgo:string;
};
type loja={
    nome:string;
    preco:number;
    unidades:number;

}
let Produto_disponivel:loja={
    nome:"Mouse",
    preco:89.00,
    unidades:5



}
async function getDatabase(id:number): Promise <string> 
{
return "ado-ado"
}



//multifunção
function Callphone(phone:number|string):number|string
{
    return phone
}

//função normal
function printObjs(pessoa:heroi){

    console.log(pessoa);
};

function addNumber(x:number, y:number):number{
    return x+y;

}
printObjs({
    name:"Bruce Wayne",
    vulgo:"Batman"

});

//interfaces
//sempre as mesmas variaveis
type robot={
    id:number;
    readonly id2:number;
    name:string;
}
//com classe, a maioria usa só esse
interface robot2{
    id:number|string;
    readonly id2:number|string;//não pode mexer, só ler

    name:string;
}



const bot:robot={
    id: 1,
    id2:10,
    name:"robo"
}


const bot2:robot2={
    id: 2,
    id2:20,
    name:"robocop"
}


let soma:number=addNumber(4,5)
console.log(`${Callphone(1)} ${Callphone(" hello")}->robo ${bot.name} e ${bot2.name}`)
console.log("A soma deu: "+ soma);
console.log(Produto_disponivel)
console.log("Typescript");
//npx tsc arq.ts->conversão