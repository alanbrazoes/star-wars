import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

export const getCharacters = async () => {
  try {
    const response = await api.get('/people');
    const {
      data: { results },
    } = response;
    return results;
  } catch (error) {
    return false;
  }
};

export const getCharacter = async (param) => {
  try {
    const response = await api.get(`/people/${param}/`);
    const { data } = response;
    return data;
  } catch (error) {
    return false;
  }
};

export const getPlanet = async (url) => {
  try {
    const response = await axios.get(url);
    const {
      data: { name },
    } = response;
    return name;
  } catch (error) {
    return false;
  }
};

export const getFilms = async (characterFilms) => {
  const teste = characterFilms.map(async (film) => {
    const response = await axios.get(film);
    const {
      data: { title },
    } = response;
    return title;
  });
  const fetch = await Promise.all(teste);
  return fetch;
};

export const getSpecie = async (character) => {
  try {
    if (character.length === 0) return 'Not defined';
    const response = await axios.get(character);
    return response.data;
  } catch (error) {
    return false;
  }
};
