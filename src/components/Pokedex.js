import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
    this.fowardPokemonEv = this.fowardPokemonEv.bind(this);
    this.backwardPokemonEv = this.backwardPokemonEv.bind(this);
  }

  backwardPokemonEv() {
    this.setState(
      (prevState) => (
        {
          valor: prevState.valor - 1,
        }
      ),
    );
  }

  fowardPokemonEv() {
    this.setState(
      (prevState) => (
        {
          valor: prevState.valor + 1,
        }
      ),
    );
  }

  render() {
    const { pokemonList } = this.props;
    const { valor } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[valor] } />
          <button type="button" name="Próximo pokémon" onClick={ this.fowardPokemonEv }>
            Próximo pokémon
          </button>
          <button type="button" onClick={ this.backwardPokemonEv }>Previous</button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
