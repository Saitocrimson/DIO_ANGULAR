
var grupo =document.getElementById("grupo_todo")
function convertejsonhtml(pokemon){
    return `

    <li class="pokemon">
                <span class="number">#001</span> 
                <span class="name">${pokemon.name}</span>
               
               
                <div class="detalhe">
                    <ol class="type">
                        <li class="types">glass </li>
                        
                        <li class="types">poison</li>
                               
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=${pokemon.name}>
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
