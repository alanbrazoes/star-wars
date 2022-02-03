import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";

import { getCharacter, getFilms, getPlanet, getSpecie } from '../../services';
import { Main, Header, Button } from './style'
import Dados from "../../components/Dados";

function CharactersDetailsPage() {
  const param = useParams()

  const [ characters, setCharacters ] = useState({
    character: '',
    planet: '',
    species: '',
    films: [],
  })

  let navigate = useNavigate()

  const goBack = () => {
    setCharacters({
      character: '',
      planet: '',
      species: '',
      films: [],
    })
    navigate(-1)
  }
    
  useEffect(() => {
    const fetch = async () => {
      const responseCharacter = await getCharacter(param.index)
      const responsePlanet = await getPlanet(responseCharacter.response.homeworld)
      const responseFilms = await getFilms(responseCharacter.response.films)
      const responseSpecies = await getSpecie(responseCharacter.response.species)

      if(responseCharacter.response 
        && responsePlanet.response 
        && responseFilms.response 
        && responseSpecies.response) {
          setCharacters({
            character: responseCharacter.response,
            planet: responsePlanet.response,
            species: responseSpecies.response,
            films: responseFilms.response
          })
        } 
    }
    fetch()
  }, [param.index])

  const { character, planet, films, species } = characters;
  return (
    <>
      <Header>
          <Button onClick={goBack}> Voltar </Button>
      </Header>
      <Main>
        <h1>{character === undefined ? <p> Loading... </p> : character.name}</h1>
        <Dados 
          character={ character } 
          planet={ planet }
          films={ films }
          species={ species }
        />
      </Main>
    </>
  );
}

export default CharactersDetailsPage;