import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getCharacter, getPlanet, getFilms, getSpecie } from '../../services/index';
import { Main, Header, Button } from './style';
import Dados from '../../components/Dados';
import Loading from '../../components/Loading';

const CharactersDetailsPage = () => {
  const param = useParams();
  const history = useHistory();
  const [characters, setCharacters] = useState({
    character: '',
    planet: '',
    species: '',
    films: [],
  });

  const goBack = () => {
    setCharacters({
      character: '',
      planet: '',
      species: '',
      films: [],
    });
    history.goBack();
  };

  const fetch = async () => {
    const character = await getCharacter(param.index);
    const planet = await getPlanet(character.homeworld);
    const films = await getFilms(character.films);
    const species = await getSpecie(character.species);

    if (character && planet && films && species) {
      setCharacters({
        character,
        planet,
        species,
        films,
      });
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const { character, planet, films, species } = characters;
  return (
    <>
      <Header>
        <Button onClick={goBack}> Voltar </Button>
      </Header>
      <Main>
        {character === '' ? (
          <Loading />
        ) : (
          <>
            <h1>{character.name}</h1>
            <Dados character={character} planet={planet} films={films} species={species} />
          </>
        )}
      </Main>
    </>
  );
};

export default CharactersDetailsPage;
