import './App.css';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo`.svg';
import { getPokemon } from './api/index.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './actions/index.js';


function App() {

  const pokemons = useSelector((state) => (state.pokemons))
  const loading = useSelector((state) => (state.loading))
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(setLoading(true))
    const fetchPokemons = async () => {
      const pokemonResp = await getPokemon();
      dispacth(getPokemonsWithDetails(pokemonResp));
      dispacth(setLoading(false))
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

      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons} />}

    </div>
  );
}




export default App;
