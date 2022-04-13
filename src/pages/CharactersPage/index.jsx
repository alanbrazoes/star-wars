import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCharacters } from '../../services';
import { Header, MainStyle, CardCharacter } from './style';
import LoadingComponent from '../../components/Loading';

const CharactersPage = () => {
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

  const listCards = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.03,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const cards = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <Header>
        <h1 data-testid="title">Star Wars</h1>
      </Header>

      {loading ? (
        <LoadingComponent>Loading...</LoadingComponent>
      ) : (
        <MainStyle initial="hidden" animate="visible" variants={listCards}>
          {characters?.map(({ name, birth_year: birth, gender }, i) => (
            <CardCharacter
              key={name}
              variants={cards}
              whileHover={{ scale: 1.2, borderColor: '#ffb703' }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/details/${i + 1}`} className="link">
                <h3 data-testid="name">Nome: {name}</h3>
                <p>Aniversário: {birth}</p>
                <p>Genero: {gender}</p>
              </Link>
            </CardCharacter>
          ))}
        </MainStyle>
      )}
    </>
  );
};

export default CharactersPage;
