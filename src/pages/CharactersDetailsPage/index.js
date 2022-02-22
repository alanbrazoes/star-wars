import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router";

import { getCharacter, getFilms, getPlanet, getSpecie } from '../../services';
import { Main, Header, Button } from './style'
import Dados from "../../components/Dados";
import { Loading } from "../CharactersPage/style";

const CharactersDetailsPage = () => {
  const param = useParams()
  let history = useHistory()
  const [ characters, setCharacters ] = useState({
    character: '',
    planet: '',
    species: '',
    films: [],
  })

  const goBack = () => {
    setCharacters({
      character: '',
      planet: '',
      species: '',
      films: [],
    })
    history.goBack()
  }
    
  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    const character = await getCharacter(param.index)
    const planet = await getPlanet(character.homeworld)
    const films = await getFilms(character.films)
    const species = await getSpecie(character.species)

    if(character && planet && films && species) {
      setCharacters({
        character,
        planet,
        species: species,
        films
      })
    }
  }

  const { character, planet, films, species } = characters;
  return (
    <>
      <Header>
        <Button onClick={goBack}> Voltar </Button>
      </Header>
      <Main>
        {character === '' ? 
          <Loading> Loading... </Loading> 
          : (
          <>
            <h1>{character.name}</h1>
            <Dados 
              character={ character } 
              planet={ planet }
              films={ films }
              species={ species }
            />
          </>
        )}
      </Main>
    </>
  );
}

export default CharactersDetailsPage;