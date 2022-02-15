import { useEffect, useState } from 'react';
import { useHistory } from "react-router";

import { getCharacters } from '../../services'
import { Header, Loading, MainStyle, Button, CardCharacter } from './style';

const CharactersPage = () => {
  const [ characters, setCharacters ] = useState()
  let history = useHistory()

  useEffect(() => {
    const fetch = async () => {
      const response = await getCharacters()
      if (response.response) setCharacters(response.response)
    }
    fetch()
  }, [])
  
  const goToDetails = (url) => {
    history.push(url)
  }

  return (
    <>
      <Header>
        <h1 data-testid="title">Star Wars</h1>
      </Header>

      {characters === undefined ? 
      <Loading> Loading...</Loading> 
      :
      <MainStyle>
        {characters && characters.map((character, i) => {
          return (
            <CardCharacter key={i}>
              <h3>Nome: {character.name} </h3>
              <p>Aniversário: {character.birth_year}</p>
              <p>Genero: {character.gender}</p>
              <Button onClick={() => goToDetails(`/details/${i + 1}`)}>Conhecer {character.name}</Button>
            </CardCharacter>
          ) 
        })}
      </MainStyle>}
    </>
  );
}

export default CharactersPage;