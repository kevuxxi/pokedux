import PokemonCard from "./PokemonCard"
import '../../src/pokemonlist.css'


const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemon-list">
            {pokemons.map(pokemon => {
                console.log(pokemon)
                return <PokemonCard name={pokemon.name} abilities={pokemon.abilities} key={pokemon.name} image={pokemon.sprites.front_default}/>
            }
            )}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
};

export default PokemonList