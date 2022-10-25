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
    const { valor } = this.state;
    const { pokemonList } = this.props;
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

  render() {
    const { pokemonList } = this.props;
    const { valor } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[valor] } />
          <button type="button" onClick={ this.fowardPokemonEv }>
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
