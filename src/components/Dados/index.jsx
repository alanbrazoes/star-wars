import React from 'react';
import PropTypes from 'prop-types';
import { Section, Div } from '../../pages/CharactersDetailsPage/style';

const Dados = ({ character, planet, films, species }) => {
  const {
    name,
    gender,
    birth_year: birthYear,
    eye_color: eye,
    height,
    mass,
    skin_color: skin,
    hair_color: hair,
  } = character;
  return (
    <div>
      {character === undefined ? (
        <p> Loading... </p>
      ) : (
        <Section>
          <Div>
            <h2>Dados</h2>
            <p>
              Espécie:
              {species}
            </p>
            <p>`Gênero: ${gender}`</p>
            <p>
              Aniversário:
              {birthYear}
            </p>
            {planet ? (
              <p>
                {' '}
                Planeta:
                {planet}
              </p>
            ) : (
              <p> Loading... </p>
            )}
            <p>
              Cor dos olhos:
              {eye}
            </p>
            <p>
              Cor dos cabelos:
              {hair}
            </p>
            <p>
              Altura:
              {height} cm
            </p>
            <p>
              Peso:
              {mass}
            </p>
            <p>
              Cor da pele:
              {skin}
            </p>
          </Div>
          <Div>
            <h2>Filmes</h2>
            {films && films.map((film) => <p key={name}> {film} </p>)}
          </Div>
        </Section>
      )}
    </div>
  );
};

Dados.propTypes = {
  character: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.string).isRequired,
  planet: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Dados;
