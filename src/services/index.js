import axios from "axios";

const api = axios.create({
  baseURL: 'https://swapi.dev/api'
})

export const getCharacters = async () => {
  let response
  let erro
  try {
    response = await api.get('/people')
  } catch (error) {
    erro = error
  }

  return {
    response: response && response.data.results,
    erro
  }
}

export const getCharacter = async (param) => {
  let response
  let erro

  try {
    response = await api.get(`/people/${param}/`)
  } catch (error) {
    erro = error
  }

  return {
    response: response && response.data,
    erro
  }
}

export const getPlanet = async (url) => {
  let response
  let erro
  
  try {
    response = await axios.get(url)
  } catch (error) {
    erro = error
  }

  return {
    response: response && response.data.name,
    erro
  }
}

export const getFilms = async (characterFilms) => {
  let response
  let erro

  let newFilm = []
  await characterFilms.map( async (film) => {
    try {
      const responseFilm = await axios.get(film)
      newFilm = [...newFilm, {title: responseFilm.data.title} ]
    } catch (error) {
      erro = error
    }
  })
  response = newFilm

  return { 
    response,
    erro
  }
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