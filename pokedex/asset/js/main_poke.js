const  offset=0
const limit=20
const url=`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
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


fetch(url).then( (response)=>{
    return response.json()
})
.then((jsonBody)=>
    //debugger->breakpoint
    jsonBody.results
)
.then((pokelistaa)=>{
    for (let i=0;i<pokelistaa.length;i++){
        
        console.log(convertejsonhtml(pokelistaa[i]))
        grupo.innerHTML+=convertejsonhtml(pokelistaa[i])
    }
    console.log(pokelistaa)
})
.catch(function (error){
    console.log(error)
})
.finally(function(){
    console.log("ok ok")
})
