import { 
  useEffect, 
  useState
} from 'react';
import MainCharacters from './components/MainCharacters';
import { getCharacters } from '../../services'
import { Header } from './style';

const CharactersPage = () => {
  const [ characters, setCharacters ] = useState()

  useEffect(() => {
    const fetch = async () => {
      const response = await getCharacters()
      if (response.response) setCharacters(response.response)
    }
    fetch()
  }, [])

  return (
    <>
      <Header>
        <h1>Star Wars</h1>
      </Header>
      {characters === undefined ? <p>Loading...</p> 
      :
      <MainCharacters characters={ characters }/>}
    </>
  );
}

export default CharactersPage;