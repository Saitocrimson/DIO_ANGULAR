var lista=["pudim","cuzcuz","mingau"]
lista.push("quindim")
/*deleta primeiro->lista.shift()*/
/*deleta ultimo->lista.pop()*/

for(var i=0;i<lista.length;i++)
{
console.log(lista[i])
}

for(var i=1;i<10;i++)
{
for(var j=1;j<10;j++)
{
console.log(`${i}*${j}=${i*j}`)
}
console.log("\n")
}