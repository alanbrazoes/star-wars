import { Section, Div } from '../../pages/CharactersDetailsPage/style'

const Dados = ({ character, planet, films, species }) => {
  console.log(films)
  return (
    <>
      {character === undefined? 
      <p> Loading... </p>
      : 
      <Section>
        <Div>
          <h2>Dados</h2>
          <p>Espécie: {species}</p>
          <p>Gênero: {character.gender}</p>
          <p>Aniversário: {character.birth_year}</p>
          {planet ? <p> Loading... </p> : <p> Planeta: {planet} </p>}
          <p>Cor dos olhos: {character.eye_color}</p>
          <p>Cor dos cabelos: {character.hair_color}</p>
          <p>Altura: {character.height}cm</p>
          <p>Peso: {character.mass}</p>
          <p>Cor da pele: {character.skin_color}</p>
        </Div>
        <Div>
          <h2>Filmes</h2>
          {films && films.map((film,i) => {
            return (
              <p key={i}> {film.title} </p>
            )
          })}
        </Div>
      </Section>}
    </>
  )
}

export default Dados;