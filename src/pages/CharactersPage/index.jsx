import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getCharacters } from '../../services';
import { Header, MainStyle, Button, CardCharacter } from './style';
import LoadingComponent from '../../components/Loading';

const CharactersPage = () => {
  const history = useHistory();

  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    let isMounted = true;
    const response = await getCharacters();
    if (response.length && isMounted) {
      setCharacters(response);
      setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  };

  useEffect(() => {
    fetch();
  }, []);

  const goToDetails = (url) => {
    history.push(url);
  };

  return (
    <>
      <Header>
        <h1 data-testid="title">Star Wars</h1>
      </Header>

      {loading ? (
        <LoadingComponent>Loading...</LoadingComponent>
      ) : (
        <MainStyle>
          {characters?.map(({ name, birth_year: birth, gender }, i) => (
            <CardCharacter key={name}>
              <h3 data-testid="name">Nome: {name}</h3>
              <p>Aniversário: {birth}</p>
              <p>Genero: {gender}</p>
              <Button onClick={() => goToDetails(`/details/${i + 1}`)}>Conhecer {name}</Button>
            </CardCharacter>
          ))}
        </MainStyle>
      )}
    </>
  );
};

export default CharactersPage;
