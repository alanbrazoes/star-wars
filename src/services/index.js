import axios from "axios";

const api = axios.create({
  baseURL: 'https://swapi.dev/api'
})

export const getCharacters = async () => {
  try {
    const response = await api.get('/people')
    return(await response.data.results)
  } catch (error) {
    return(false)
  }
}

export const getCharacter = async (param) => {
  try {
    const response = await api.get(`/people/${param}/`)
    return(await response.data.json())
  } catch (error) {
    return(error)
  }
}

export const getPlanet = async (url) => {
  let response
  let erro
  try {
    const data = await axios.get(url)
    response = data.data.name
  } catch (error) {
    erro = error
  }

  return {
    response,
    erro
  }
}

export const getFilms = async (characterFilms) => {
  const teste = characterFilms.map( async (film) => {
    const t = await axios.get(film)
    return t.data.title
  })
  const fetch = await Promise.all(teste)
  return { response: fetch }
}

export const getSpecie = async (character) => {
  let response
  let erro

  try {
    if (character.length === 0) return { response: response = 'Not defined', erro }
    response = await axios.get(character)
  } catch (error) {
    erro = error
  }

  return {
    response: response && response.data.name,
    erro
  }
}

// module.exports = { getCharacters }