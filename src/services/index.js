// import axios from 'axios';

const axios = require('axios');

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

const getCharacters = async () => {
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

const getCharacter = async (param) => {
  try {
    const response = await api.get(`/people/${param}/`);
    const { data } = response;
    return data;
  } catch (error) {
    return false;
  }
};

const getPlanet = async (url) => {
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

const getFilms = async (characterFilms) => {
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

const getSpecie = async (character) => {
  try {
    if (character.length === 0) return 'Not defined';
    const response = await axios.get(character);
    return response.data;
  } catch (error) {
    return false;
  }
};

module.exports = { getCharacters, getCharacter, getFilms, getSpecie, getPlanet };
