var rs = require('readline-sync')
var pesquisa = rs.question('Digite um nome ou numero do Pokemon desejado : ')
var axios = require('axios')
var pokemon
var skil = []
var tiposDoPokemon = []
axios.get(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
    .then((resposta) => {
        pokemon = resposta.data
        // console.log(pokemon)
        var nome = pokemon.name
        console.log('Nome do Pokemon:'+nome)
        var habilidades = pokemon.abilities
        habilidades.forEach(habilidades => {
            skil.push(habilidades.ability.name)
            
        });
        console.log('***Habilidades do Pokemon***\n'+skil.join("\n"))

        var tipos = pokemon.types
        tipos.forEach(tipos =>{
            tiposDoPokemon.push(tipos.type.name)
            





        })
        console.log('***Tipos do Pokemon***\n'+tiposDoPokemon.join('\n'))
    })

    .catch((erro) => {
        console.log(erro)
    })
