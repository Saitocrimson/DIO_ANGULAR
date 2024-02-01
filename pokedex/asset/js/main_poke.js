
var grupo =document.getElementById("grupo_todo")
/*function convertedadospoke(pokemons){
    return pokemons.map((typeSlot)=>`<li class='tipos'>${typeSlot.type.name}</li>`)
    
}*/


function convertejsonhtml(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span> 
                <span class="name">${pokemon.name}</span>
                <div class="detalhe">
                    <ol class="type">
                       ${pokemon.Types.map((type)=>`<li class="types ${type}">${type}</li>`).join('')}        
                    </ol>

                    <img src=${pokemon.photo} alt=${pokemon.name}>
                </div>
        </li>`
}



poke_api.getPokemons()
.then((pokelistaa)=>{
    grupo.innerHTML+=pokelistaa.map(convertejsonhtml).join("")
    /*var pocket=pokelistaa.map((item)=>{
        return convertejsonhtml(item)})
        
    grupo.innerHTML+=pocket.join("")
*/
   
})
.catch(function (error){
    console.log(error)
})
.finally(function(){
    console.log("ok ok")
})
