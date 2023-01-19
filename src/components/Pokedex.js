import React from 'react';

import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      pokemonList: pokemons,
    };
    this.fowardPokemonEv = this.fowardPokemonEv.bind(this);
    this.backwardPokemonEv = this.backwardPokemonEv.bind(this);
    this.firePokemonEv = this.firePokemonEv.bind(this);
    this.psychicPokemonEv = this.psychicPokemonEv.bind(this);
    this.backToNormal = this.backToNormal.bind(this);
  }

  backwardPokemonEv() {
    const { valor, pokemonList } = this.state;
    if (valor !== 0) {
      this.setState(
        (prevState) => (
          {
            valor: prevState.valor - 1,
          }
        ),
      );
    } else {
      this.setState(
        () => (
          {
            valor: pokemonList.length - 1,
          }
        ),
      );
    }
  }

  fowardPokemonEv() {
    const { valor, pokemonList } = this.state;
    if (valor < pokemonList.length - 1) {
      this.setState(
        (prevState) => (
          {
            valor: prevState.valor + 1,
          }
        ),
      );
    } else {
      this.setState(
        () => (
          {
            valor: 0,
          }
        ),
      );
    }
  }

  firePokemonEv() {
    const filteredPokemonsByFireType = pokemons
      .filter((pokemon) => pokemon.type === 'Fire');
    this.setState(
      () => (
        {
          valor: 0,
          pokemonList: filteredPokemonsByFireType,
        }
      ),
    );
  }

  psychicPokemonEv() {
    const filteredPokemonsByPsychicType = pokemons
      .filter((pokemon) => pokemon.type === 'Psychic');
    this.setState(
      () => (
        {
          valor: 0,
          pokemonList: filteredPokemonsByPsychicType,
        }
      ),
    );
  }

  backToNormal() {
    this.setState(
      () => (
        {
          valor: 0,
          pokemonList: pokemons,
        }
      ),
    );
  }

  render() {
    const { valor, pokemonList } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[valor] } />
          <button type="button" onClick={ this.fowardPokemonEv }>
            Próximo pokémon
          </button>
          <button type="button" onClick={ this.backwardPokemonEv }>
            Pokémon anterior
          </button>
          <button
            type="button"
            onClick={ this.firePokemonEv }
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ this.psychicPokemonEv }
          >
            Psychic
          </button>
          <button
            type="button"
            onClick={ this.backToNormal }
          >
            All
          </button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

export default Pokedex;
