import React from 'react';
import { Section, Div } from './style';

const Dados = ({ character, planet, films, species }) => {
  const { gender, birth_year, eye_color, height, mass, skin_color, hair_color } = character;
  return (
    <div>
      {character === '' ? (
        <p> Loading... </p>
      ) : (
        <Section>
          <Div>
            <h2>Dados</h2>
            <p>Espécie: {species}</p>
            <p>Gênero: {gender}</p>
            <p>Aniversário: {birth_year}</p>
            {planet ? <p> Planeta: {planet}</p> : <p> Loading... </p>}
            <p>Cor dos olhos: {eye_color}</p>
            <p>Cor dos cabelos: {hair_color}</p>
            <p>Altura: {height} cm</p>
            <p>Peso: {mass}</p>
            <p>Cor da pele: {skin_color}</p>
          </Div>
          <Div>
            <h2>Filmes</h2>
            {films && films.map((film) => <p key={film}> {film} </p>)}
          </Div>
        </Section>
      )}
    </div>
  );
};

export default Dados;
