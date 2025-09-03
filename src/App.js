import './App.css';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo`.svg';
import { getPokemon, getPokemonDetails } from './api/index.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setPokemons } from './actions/index.js';


function App() {

  const pokemons = useSelector((state) => (state.pokemons))
  const dispacth = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonResp = await getPokemon();
      dispacth(getPokemonsWithDetails(pokemonResp));
    }
    fetchPokemons();
  }, [])



  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className='logo' src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}




export default App;
