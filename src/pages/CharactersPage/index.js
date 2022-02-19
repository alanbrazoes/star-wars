import { useEffect, useState } from 'react';
import { useHistory } from "react-router";

import { getCharacters } from '../../services'
import { Header, Loading, MainStyle, Button, CardCharacter } from './style';
import LoadingComponent from '../../components/Loading';

const CharactersPage = () => {
  let history = useHistory()

  const [ characters, setCharacters ] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch();
  }, [])
  
  const fetch = async () => {
    let isMounted = true;
    const response = await getCharacters()
    if (response.length && isMounted) {
      setLoading(false)
      setCharacters(response)
    }
    return () => {isMounted = false}
  }

  const goToDetails = (url) => {
    history.push(url)
  }

  return (
    <>
      <Header>
        <h1 data-testid="title">Star Wars</h1>
      </Header>

      <MainStyle>
        {loading ? <Loading>Loading...</Loading> : 
          <>
            {characters?.map(({ name, birth_year, gender, created }, i) => (
                <CardCharacter key={i}>
                  <h3 data-testid="name">Nome: {name} </h3>
                  <p>Aniversário: {birth_year}</p>
                  <p>Genero: {gender}</p>
                  <Button onClick={() => goToDetails(`/details/${i + 1}`)}>Conhecer {name}</Button>
                </CardCharacter>
              ) 
            )}
          </>
        }
      </MainStyle>
    </>
  );
}

export default CharactersPage;