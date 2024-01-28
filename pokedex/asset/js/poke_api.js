const poke_api={}

poke_api.getPokemons=function(offset=0,limit=20){
 
const url=`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
return fetch(url)
.then( (response)=>{
    return response.json()
})
.then((jsonBody)=>
    //debugger->breakpoint
    jsonBody.results
)
.catch(function (error){
    console.log(error)
})
}

Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4'),
    fetch('https://pokeapi.co/api/v2/pokemon/5')
]).then((results)=>{console.log(results)})