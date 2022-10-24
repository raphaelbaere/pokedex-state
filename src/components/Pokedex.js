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
    this.fowardPokemon = this.fowardPokemon.bind(this);
    this.backwardPokemon = this.backwardPokemon.bind(this);
  }

  backwardPokemon() {
    this.setState((prevState) => (
      {
        valor: prevState.valor - 1,
      }
    ));
  }

  fowardPokemon() {
    this.setState((prevState) => (
      {
        valor: prevState.valor + 1,
      }
    ));
  }

  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[0] } />
          <button type="button" onClick={ this.fowardPokemon }>Next</button>
          <button type="button" onClick={ this.backwardPokemon }>Previous</button>
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
